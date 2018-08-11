pipeline {
  stages {

    stage('Install') {
      steps {
        awsCodeBuild projectName: 'news-api', credentialsType: 'keys', region: 'us-west-2', sourceControlType: 'jenkins'
      }
    }
  }
}
