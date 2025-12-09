import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Clients from './Clients';
import Payouts from './Payouts';
import Marketing from './Marketing';
import Support from './Support';
import Profile from './Profile'; // <--- Import this

const App = () => {
  return (
    <div className="min-h-screen bg-[#050B0D] text-white font-sans relative overflow-x-hidden">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/payouts" element={<Payouts />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/support" element={<Support />} />

        <Route path="/profile" element={<Profile />} /> {/* <--- New Route */}
      </Routes>
    </div>
  );
};

export default App;
