pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
