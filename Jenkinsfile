pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-username/your-laravel-project.git'
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
        cd /path/to/your/project
        git pull
        composer install --no-dev
        php artisan migrate --force
        """
    }
}
    }
}
