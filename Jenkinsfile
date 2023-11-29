pipeline
{
    agent any

    stages{
        stage('Checkout SCM'){
            steps {
                checkout scm
            }
        }

        stage('Build'){
            steps{
                echo "Hello, this is the first process"
                sh 'cd /var/www/deploy-the'
                sh 'git pull https://github.com/luuthaituan/deploy-the.git main'
                sh 'composer install && sudo -S docker-compose build'
            }
        }

        stage('Deploy'){
            steps{
                echo "Hey, this is the second process, hope it will success"
                sh 'sudo -S docker-compose up -d && sudo docker-compose ps'
                sh 'sudo -S docker-compose down'
            }
        }
    }
}
