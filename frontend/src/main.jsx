import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Main from './components/Main/Main'
import Register from './components/Register/SignUp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Register" element={<Register />} /> 
      </Routes>
    </Router>
  </React.StrictMode>,
)
