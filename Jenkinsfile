pipeline
{
    agent any

        stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        }

    stages{
        stage('Build'){
            steps{
                echo "Hello, this is the first process"
                sh 'source .env'
                sh 'sudo -S docker-compose build'
            }
        }
    }
}
