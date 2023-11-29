pipeline
{
    agent any

    stages{
        stage('Build'){
            steps{
                echo "Hello, this is the first process"
                sh 'sudo -S docker-compose build'
            }
        }
    }
}
