import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import StudentDashboard from './pages/StudentDashboard';
import { dummyUsers } from './data/dummyData';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
 import Navbar from './components/Navbar';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); // 'login' or 'signup'

  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Check if user is logged in
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');
      
      if (token && userData) {
        setUser(JSON.parse(userData));
      } else {
        console.log("Working");
        // FOR DEMO: Auto-login as student
        // Remove this in production!
        const demoUser = dummyUsers.student;
        setUser(demoUser);
        console.log(demoUser)
        // localStorage.setItem('user', JSON.stringify(demoUser));
        // localStorage.setItem('token', 'demo_token_123');
      }
      setLoading(false);
    }, []);
  

  return (
      <Router>
     <div className="min-h-screen bg-gray-50">
        <Navbar user={user} />
        <div className="container mx-auto px-4 py-8">
           <StudentDashboard user={user} />
      {/* {currentPage === 'login' ? (
        <LoginPage onSignUpClick={() => setCurrentPage('signup')} />
      ) : (
        <SignUpPage onSignInClick={() => setCurrentPage('login')} />
      )} */}
    </div>
    </div>
    </Router>
  );
}

export default App;