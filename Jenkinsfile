pipeline
{
    agent any

    stages{
        stage('Build'){
            steps{
                echo "Hello, this is the first process"
                sh 'cd deploy-the && sudo docker-compose build'
            }
        }
    }
}
