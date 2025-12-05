import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<LandingPage />} />

      {/* Auth Routes - Handling both /login and /signin conventions */}
      <Route path="/login" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />

      <Route path="/register" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Placeholder for the missing bot-builder route mentioned in SignUp */}
      <Route path="/bot-builder" element={<div className="text-white text-center pt-20">Bot Builder (Coming Soon)</div>} />
    </Routes>
  );
};

export default App;
