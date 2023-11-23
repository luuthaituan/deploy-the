node {
    stage('preparation') {
        // Checkout the master branch, with credential
        git credentialsId: 'luuthaituan08091999@gmail.com', url: 'https://github.com/luuthaituan/deploy-the.git'
    }
    stage("composer_install") {
        // Run `composer install`
        sh 'composer install'
    }
    stage("phpunit") {
        sh 'vendor/bin/phpunit'
    }
}
