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
                sh '. .env && sudo -S docker-compose build'
            }
        }
    }
}
