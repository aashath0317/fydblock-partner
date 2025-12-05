import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

const EXCHANGES = [
  { name: 'BINANCE', logo: 'BINANCE.png' },
  { name: 'COINBASE', logo: 'COINBASE.png' },
  { name: 'KRAKEN', logo: 'KRAKEN.png' },
  { name: 'BYBIT', logo: 'BYBIT.png' },
  { name: 'OKX', logo: 'OKX.jpg' },
];

const MARQUEE_LOGOS = [...EXCHANGES, ...EXCHANGES, ...EXCHANGES, ...EXCHANGES];

const PartnerLanding = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState(10);
  const earnings = (clients * 125).toLocaleString();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020506] text-white font-sans">

      {/* --- Partner Navbar --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#020506]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-3 h-6 bg-[#00FF9D] skew-x-[-15deg]"></div>
            <span className="text-xl font-bold tracking-tight">FydBlock <span className="text-gray-500 font-light">Partner</span></span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="text-white hover:text-[#00FF9D] font-medium transition-colors">
              Log In
            </button>
            <button onClick={() => navigate('/register')} className="bg-[#00FF9D] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-[#00cc7d] transition-colors shadow-[0_0_15px_rgba(0,255,157,0.4)]">
              Become a Partner
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#020506] border-b border-white/10 p-4 flex flex-col gap-4 absolute w-full">
            <a href="#how-it-works" className="text-gray-400">How it works</a>
            <a href="#benefits" className="text-gray-400">Benefits</a>
            <button onClick={() => navigate('/login')} className="text-left text-white">Log In</button>
            <button onClick={() => navigate('/register')} className="bg-[#00FF9D] text-black py-2 rounded font-bold">Become a Partner</button>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00FF9D]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8 max-w-xl">
              <h1 className="text-5xl md:text-6xl font-light leading-[1.1] text-white">
                Partner with FydBlock. <br />
                <span className="text-[#00FF9D] font-medium">Grow Your Revenue.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-light">
                Earn up to 30% lifetime commissions on every trade your referred users make. Real-time tracking, instant payouts.
              </p>
              <div className="pt-4">
                <button onClick={() => navigate('/register')} className="bg-[#00FF9D] text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-[#00cc7d] transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)]">
                  Start Earning Now
                </button>
              </div>
            </div>

            {/* Calculator Card */}
            <div className="relative">
              <div className="bg-[#080D0F] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full border border-[#00FF9D]/30 rounded-[2rem] pointer-events-none"></div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-gray-400 text-sm font-medium pt-2">Active Referrals</span>
                  <span className="text-7xl md:text-8xl font-light text-white leading-none tracking-tighter">{clients}</span>
                </div>
                <div className="mb-12 relative group">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={clients}
                    onChange={(e) => setClients(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer z-20 relative"
                    style={{ backgroundImage: `linear-gradient(to right, white 0%, white ${(clients / 100) * 100}%, #374151 ${(clients / 100) * 100}%, #374151 100%)` }}
                  />
                </div>
                <div className="bg-[#05080A] border border-white/5 rounded-2xl p-6 md:p-8">
                  <p className="text-gray-500 text-sm mb-2">Estimated Monthly Earnings</p>
                  <p className="text-4xl md:text-5xl font-medium text-white tracking-tight">${earnings}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Marquee --- */}
      <div className="overflow-hidden relative w-full mask-linear-gradient border-y border-white/5 bg-black/20 py-8">
        <div className="flex gap-16 animate-marquee whitespace-nowrap px-6 transition-all duration-500 w-max opacity-50 grayscale hover:grayscale-0 transition-all">
          {MARQUEE_LOGOS.map((ex, i) => (
            <span key={i} className="text-2xl font-bold font-mono tracking-widest text-white/40 flex items-center gap-4">
              {/* Placeholder for logos since assets might be missing in new repo */}
              <span className="text-lg font-bold">{ex.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* --- Steps Section --- */}
      <section id="how-it-works" className="container mx-auto px-6 py-32">
        <h2 className="text-3xl md:text-5xl font-medium text-center text-white mb-20">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <StepCard number="01" title="Register" desc="Create your partner account in seconds. Instant approval." />
          <StepCard number="02" title="Promote" desc="Get your unique link and marketing assets to share with your audience." />
          <StepCard number="03" title="Earn" desc="Get paid up to 30% commission for every transaction your users make." />
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; 2025 FydBlock Partner Program. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="https://fydblock.com" className="hover:text-[#00FF9D]">Back to Main Site</a>
        </div>
      </footer>
    </div>
  );
};

const StepCard = ({ number, title, desc }) => (
  <div className="bg-[#0A1014]/50 border border-white/5 p-8 rounded-2xl hover:border-[#00FF9D]/30 transition-colors">
    <div className="text-[#00FF9D] font-bold text-xl mb-4">{number}</div>
    <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default PartnerLanding;