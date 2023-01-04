import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppLevelProvider from './context/AppLevelContext'
import AuthProvider from './context/AuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AppLevelProvider>
      <AuthProvider>
        <App />
    </AuthProvider>
    </AppLevelProvider>

  </React.StrictMode>,
)
