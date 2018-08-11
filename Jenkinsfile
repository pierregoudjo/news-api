pipeline {
  stages {
    agent {
      stage('Install') {
        steps {
          awsCodeBuild projectName: 'news-api', credentialsType: 'keys', region: 'eu-west-1', sourceControlType: 'jenkins'
        }
      }
    }
  }
}
