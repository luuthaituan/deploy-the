pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker-compose up -d'
                sh './vendor/bin/sail build'
            }
        }
        stage('Test') {
            steps {
                sh './vendor/bin/sail test'
            }
        }
        stage('Deploy') {
            steps {
                sh './vendor/bin/sail down'
                sh 'docker-compose up -d'
            }
        }
    }
}
