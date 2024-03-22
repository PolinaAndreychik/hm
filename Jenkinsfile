pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/alternative15']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/FikkaP/hm.git']])
            }
        }

        stage('Dependencies') {
            steps {
                dir('hm15') {
                    bat "npm i"
                }
            }
        }

        stage('Tests') {
            steps {
                dir('hm15') {
                    bat "npm run test"
                }
            }
        }
         stage('Report') {
              steps {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'hm15', reportFiles: 'test-report.html', reportName: 'Jest Reporter', reportTitles: 'Jest Reporter', useWrapperFileDirectly: true])    
            }
        }
    }
}
