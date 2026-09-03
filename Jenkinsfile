
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
     env.PATH = "${tool 'nodejs26'}/bin:${env.PATH}"
    def testExitCode = 0
    def qualityGatePassed = false
    def failureMessage = ''
    def testCommand = '' 

    try {

        stage('Checkout') {
            checkout scm
        }

        stage('Install Dependencies') {
            sh 'npm ci'
        }


        stage('Install Browsers') {
        echo 'Installing Playwright browsers...'
        sh 'npx playwright install --with-deps'
}

        stage('Run Tests') {

            if (params.TEST_SUITE == 'smoke') {
                testCommand =
                    "npx playwright test tests/smoke --project=${params.BROWSER}"
            }
            else if (params.TEST_SUITE == 'regression') {
                testCommand =
                    "npx playwright test tests/regression --project=${params.BROWSER}"
            }
            else {
                testCommand =
                    "npx playwright test --project=${params.BROWSER}"
            }

            testExitCode = sh(
                script: testCommand,
                returnStatus: true
            )
        }

    } finally {

        stage('Archive Reports') {

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

  stage('Allure Report') { allure includeProperties: false, jdk: '', results: [[path: 'allure-results']] } 
        stage('Quality Gate') {

            if (testExitCode == 0) {

                qualityGatePassed = true

                echo 'QUALITY GATE PASSED'
                echo 'All tests passed.'
                echo 'Exit Code: 0'

            } else {

                qualityGatePassed = false

                failureMessage =
                    "Quality Gate Failed. Playwright exit code: ${testExitCode}"

                echo 'QUALITY GATE FAILED'
                echo failureMessage

                currentBuild.result = 'FAILURE'
            }
        }

        stage('Email Notification') {

            def status = qualityGatePassed ? 'SUCCESS' : 'FAILURE'

            emailext(
                subject:
                    "${status}: Playwright ${params.TEST_SUITE} - ${params.BROWSER} - Build #${env.BUILD_NUMBER}",

                body: """
Hello,

Playwright Automation Test Execution

----------------------------------------
Build Information
----------------------------------------

Job          : ${env.JOB_NAME}
Build Number : ${env.BUILD_NUMBER}
Status       : ${status}

----------------------------------------
Test Configuration
----------------------------------------

Browser      : ${params.BROWSER}
Test Suite   : ${params.TEST_SUITE}
Exit Code    : ${testExitCode}

----------------------------------------
Quality Gate
----------------------------------------

${qualityGatePassed
    ? 'PASSED - All test cases passed.'
    : 'FAILED - One or more test cases failed.'}

----------------------------------------
Reports
----------------------------------------

Build:
${env.BUILD_URL}

Playwright Report:
${env.BUILD_URL}artifact/playwright-report/index.html

----------------------------------------

Regards,
Jenkins
""",

                to: 'beauty.singh3105@gmail.com'
            )
        }

        /*
         * Fail the Jenkins build AFTER:
         * 1. Tests
         * 2. Reports
         * 3. Quality Gate
         * 4. Email
         */

        if (!qualityGatePassed) {

            error(failureMessage)
        }
    }
}
