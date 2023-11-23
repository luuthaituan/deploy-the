pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/luuthaituan/deploy-the.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'composer install'
            }
        }

        stage('Run Tests') {
            steps {
                sh './vendor/bin/phpunit'
            }
        }

stage('Deploy') {
    steps {
        sh """
        cd C:\Users\IT\Documents\deploy-the
        git pull
        composer install --no-dev
        php artisan migrate --force
        """
    }
}
    }
}
