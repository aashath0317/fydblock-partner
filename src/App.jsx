import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Clients from './Clients';

const App = () => {
  return (
    <div className="min-h-screen bg-[#050B0D] text-white font-sans relative overflow-x-hidden">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected / Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />

        {/* Placeholders for menu items that don't have their own page yet */}
        {/* You can point these to Dashboard or create new components for them later */}
        <Route path="/payouts" element={<Dashboard />} />
        <Route path="/marketing" element={<Dashboard />} />
        <Route path="/support" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
