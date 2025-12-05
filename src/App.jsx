import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => {
  return (
    <div className="min-h-screen bg-[#050B0D] text-white font-sans relative overflow-x-hidden">

      {/* --- Global Ambient Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#00FF9D]/10 rounded-full blur-[150px]" />
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[60vh] bg-[#00A3FF]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[40vh] bg-[#00FF9D]/5 rounded-full blur-[180px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">
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
      </div>
    </div>
  );
};

export default App;
