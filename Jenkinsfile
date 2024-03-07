pipeline {
    agent any

    tools {nodejs "NodeJS16.19.0"}

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
