pipeline {
    agent windows
    
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                bat 'test.bat'
            }
        }
        
        stage('Deploy') {
            steps {
                bat 'npm run build'
                bat 'npm start'
            }
        }
    }
}
