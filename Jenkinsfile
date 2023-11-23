pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/luuthaituan/deploy-the.git'
                sh 'composer install'
                sh 'cp .env.example .env'
                sh 'php artisan key:generate'
            }
        }
    }
}
