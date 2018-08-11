pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        awsCodeBuild projectName: 'news-api', credentialsType: 'jenkins', region: 'eu-west-1', sourceControlType: 'jenkins'
      }
    }
  }
}
