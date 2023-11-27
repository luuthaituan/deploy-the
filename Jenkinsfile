pipeline {
    agent any

    environment {
        // Define environment variables if needed
        DOCKER_IMAGE = 'laravelsail/php80-composer:latest' // Adjust the image tag as per your Laravel Sail version
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    // Use Laravel Sail to install dependencies and generate key
                    sh 'sail composer install --ignore-platform-reqs'
                    sh 'sail artisan key:generate'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run your Laravel tests
                    sh 'sail artisan test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Build and push Docker image
                    docker.withRegistry('https://your-docker-registry', 'docker-credentials-id') {
                        def customImage = docker.build("${DOCKER_IMAGE}")
                        customImage.push()
                    }

                    // Deploy the application (e.g., push to a Kubernetes cluster)
                    // Adjust this based on your deployment strategy
                    sh 'kubectl apply -f your-kubernetes-manifest.yaml'
                }
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline passed successfully!'
        }

        failure {
            echo 'CI/CD pipeline failed!'
            // Additional failure handling or notifications can be added here
        }
    }
}
