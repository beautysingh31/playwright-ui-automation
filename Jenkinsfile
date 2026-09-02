properties([
    parameters([
        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Select browser for Playwright tests'
        ),

        choice(
            name: 'TEST_SUITE',
            choices: ['smoke', 'regression', 'all'],
            description: 'Select test suite to execute'
        )
    ])
])

node {

    def testExitCode = 0
    def testCommand = ''

    try {

        stage('Checkout') {

            echo 'Checking out source code...'

            checkout scm
        }

        stage('Install Dependencies') {

            echo 'Installing dependencies...'

            sh 'npm ci'
        }

        stage('Prepare Test Command') {

            switch (params.TEST_SUITE) {

                case 'smoke':
                    testCommand =
                        "npx playwright test tests/smoke --project=${params.BROWSER}"
                    break

                case 'regression':
                    testCommand =
                        "npx playwright test tests/regression --project=${params.BROWSER}"
                    break

                case 'all':
                    testCommand =
                        "npx playwright test --project=${params.BROWSER}"
                    break

                default:
                    error("Invalid test suite selected")
            }

            echo "======================================"
            echo "Browser    : ${params.BROWSER}"
            echo "Test Suite : ${params.TEST_SUITE}"
            echo "Command    : ${testCommand}"
            echo "======================================"
        }

        stage('Run Playwright Tests') {

            echo 'Running Playwright tests...'

            testExitCode = sh(
                script: testCommand,
                returnStatus: true
            )

            echo "Playwright exit code: ${testExitCode}"
        }

    } finally {

        stage('Archive Reports') {

            echo '======================================'
            echo 'Archiving test reports...'
            echo '======================================'

            archiveArtifacts(
                artifacts: 'playwright-report/**',
                allowEmptyArchive: true
            )

            archiveArtifacts(
                artifacts: 'allure-results/**',
                allowEmptyArchive: true
            )

            archiveArtifacts(
                artifacts: 'test-results/**',
                allowEmptyArchive: true
            )
        }

        stage('Quality Gate') {

            if (testExitCode == 0) {

                echo '======================================'
                echo 'QUALITY GATE PASSED'
                echo 'All test cases passed.'
                echo 'Exit Code: 0'
                echo '======================================'

            } else {

                echo '======================================'
                echo 'QUALITY GATE FAILED'
                echo "Test cases failed."
                echo "Exit Code: ${testExitCode}"
                echo '======================================'

                currentBuild.result = 'FAILURE'

                error(
                    "Quality Gate Failed. Playwright exit code: ${testExitCode}"
                )
            }
        }

    }

    stage('Send Email Notification') {

        def buildStatus = currentBuild.result ?: 'SUCCESS'

        emailext(
            subject: "${buildStatus}: ${env.JOB_NAME} #${env.BUILD_NUMBER}",

            body: """
Hello,

Playwright Automation Execution Summary

========================================
Build Information
========================================

Job          : ${env.JOB_NAME}
Build Number : ${env.BUILD_NUMBER}
Status       : ${buildStatus}

========================================
Test Execution
========================================

Browser      : ${params.BROWSER}
Test Suite   : ${params.TEST_SUITE}
Exit Code    : ${testExitCode}

========================================
Reports
========================================

Jenkins Build:
${env.BUILD_URL}

Playwright Report:
${env.BUILD_URL}artifact/playwright-report/index.html

Allure Results:
${env.BUILD_URL}artifact/allure-results/

========================================

Regards,
Jenkins
""",

            to: 'beauty.singh3105@gmail.com'
        )
    }
}
