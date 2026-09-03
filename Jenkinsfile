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
                    "npx playwright test --grep @smoke --project=${params.BROWSER}"
            }
            else if (params.TEST_SUITE == 'regression') {
                testCommand =
                    "npx playwright test --grep @regression --project=${params.BROWSER}"
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

        stage('Allure Report') {
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }

        stage('Quality Gate') {

            if (testExitCode == 0) {

                qualityGatePassed = true

                echo 'QUALITY GATE PASSED'
                echo 'All tests passed.'