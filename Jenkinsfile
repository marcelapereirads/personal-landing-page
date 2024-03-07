pipeline {
    agent any

    tools {nodejs "NodeJS16.19.0"}

    triggers {
        githubPush()
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
