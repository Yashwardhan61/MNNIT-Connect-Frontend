import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); // 'login' or 'signup'

  return (
    <div>
      {currentPage === 'login' ? (
        <LoginPage onSignUpClick={() => setCurrentPage('signup')} />
      ) : (
        <SignUpPage onSignInClick={() => setCurrentPage('login')} />
      )}
    </div>
  );
}

export default App;