pipeline
{
    agent any

    stages{
        stage('Build'){
            steps{
                echo "Hello, this is the first process"
                sh 'echo tuan89 | sudo -S docker-compose build'
            }
        }
    }
}
