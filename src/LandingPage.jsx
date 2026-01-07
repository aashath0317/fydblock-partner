import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    Minus,
    Plus,
    Menu,
    X,
    ChevronDown,
    ShieldCheck,
    Users,
    TrendingUp,
    Layers,
    Lightbulb,
    Share2,
    UserPlus,
    DollarSign
} from 'lucide-react';
import Footer from './components/Footer';

const EXCHANGES = [
    { name: 'BINANCE', logo: 'BINANCE.png' },
    { name: 'COINBASE', logo: 'COINBASE.png' },
    { name: 'KRAKEN', logo: 'KRAKEN.png' },
    { name: 'BYBIT', logo: 'BYBIT.png' },
    { name: 'OKX', logo: 'OKX.jpg' },
];

const MARQUEE_LOGOS = [...EXCHANGES, ...EXCHANGES, ...EXCHANGES, ...EXCHANGES];

const LandingPage = () => {
    const navigate = useNavigate();
    // State for the calculator
    const [clients, setClients] = useState(10);
    const earnings = (clients * 125).toLocaleString();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // --- Helper to handle navigation ---
    const handleJoinClick = () => {
        navigate('/signup');
    };

    return (
        <div className="min-h-screen bg-transparent text-white font-sans selection:bg-[#00FF9D] selection:text-black">
            <nav className="fixed top-0 w-full z-50 bg-[#020506]/30 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                        <img src="/logo.png" alt="FydBlock Logo" className="h-12" />
                        <span className="font-extralight text-xl tracking-wide">Partner</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
                        {/* Add links here if needed */}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => navigate('/signin')}
                            className="text-white font-medium hover:text-[#00FF9D] transition-colors cursor-pointer"
                        >
                            Log In
                        </button>
                        <button
                            onClick={handleJoinClick}
                            className="bg-[#00FF9D] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-[#00cc7d] transition-colors shadow-[0_0_15px_rgba(0,255,157,0.4)] cursor-pointer"
                        >
                            Sign Up
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

                {/* Mobile Menu Dropdown (Added for completeness) */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-[#050B0D] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
                        <button
                            onClick={() => navigate('/signin')}
                            className="w-full border border-white/20 text-white py-3 rounded-lg font-bold"
                        >
                            Log In
                        </button>
                        <button
                            onClick={handleJoinClick}
                            className="w-full bg-[#00FF9D] text-black py-3 rounded-lg font-bold"
                        >
                            Sign Up
                        </button>
                    </div>
                )}
            </nav>

            {/* --- Hero Section --- */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                {/* Background Blobs - Fixed and Stronger */}
                <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-[#00FF9D]/25 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Left Text Content */}
                        <div className="space-y-8 max-w-xl">
                            <h1 className="text-5xl md:text-5xl font-light leading-[1.1] text-white">
                                Earn Up To 30% For <br />
                                Every Payment <br />
                                Your Referred <br />
                                Users Make.
                            </h1>

                            <p className="text-gray-400 text-lg md:text-xl font-light">
                                Lifetime referral share + bonuses for trading volume
                            </p>

                            <div className="pt-4">
                                {/* Hero Button (FIXED) */}
                                <button
                                    onClick={handleJoinClick}
                                    className="border border-[#00FF9D] text-[#00FF9D]bg-transparent px-10 py-3 rounded-full text-lg font-medium hover:bg-[#00FF9D] hover:text-black transition-all duration-300 cursor-pointer"
                                >
                                    Join Now
                                </button>
                            </div>
                        </div>

                        {/* Right Calculator Card */}
                        <div className="relative">
                            {/* Card Container */}
                            <div className="bg-[#080D0F] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">

                                {/* Top Glow Line (Green border effect) */}
                                <div className="absolute top-0 right-0 w-full h-full border border-[#00FF9D]/30 rounded-[2rem] pointer-events-none"></div>
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00FF9D]/10 blur-[60px] rounded-full pointer-events-none"></div>

                                {/* Header & Big Number */}
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-gray-400 text-sm font-medium pt-2">
                                        Number of Clients
                                    </span>
                                    <span className="text-7xl md:text-8xl font-light text-white leading-none tracking-tighter">
                                        {clients}
                                    </span>
                                </div>

                                {/* Custom Slider */}
                                <div className="mb-12 relative group">
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={clients}
                                        onChange={(e) => setClients(parseInt(e.target.value))}
                                        className="w-full h-1.5 bg-gray-700 rounded-lgqh appearance-none cursor-pointer z-20qk relative"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, white 0%, white ${(clients / 100) * 100}%, #374151 ${(clients / 100) * 100}%, #374151 100%)`
                                        }}
                                    />
                                    <style>{`
                      input[type=range]::-webkit-slider-thumb {
                          -webkit-appearance: none;
                          height: 24px;
                          width: 48px;
                          border-radius: 999px;
                          background: white;
                          cursor: pointer;
                          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                      }
                      input[type=range]::-moz-range-thumb {
                          height: 24px;
                          width: 48px;
                          border-radius: 999px;
                          background: white;
                          border: none;
                          cursor: pointer;
                          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                      }
                  `}</style>
                                </div>

                                {/* Earnings Box */}
                                <div className="bg-[#05080A] border border-white/5 rounded-2xl p-6 md:p-8">
                                    <p className="text-gray-500 text-sm mb-2">Your potentials Earnings</p>
                                    <p className="text-4xl md:text-5xl font-medium text-white tracking-tight">
                                        ${earnings}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="overflow-hidden relative w-full mask-linear-gradient">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050B0D] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050B0D] to-transparent z-10"></div>

                <div className="flex gap-16 animate-marquee whitespace-nowrap px-6 transition-all duration-500 w-max">
                    {MARQUEE_LOGOS.map((ex, i) => (
                        <span key={i} className="text-2xl font-bold font-mono tracking-widest text-white/40 flex items-center gap-4 hover:text-[#00FF9D] hover:shadow-[0_0_10px_rgba(0,255,157,0.2)] transition-all cursor-default group">
                            <img
                                src={`/logos/${ex.logo}`}
                                alt={ex.name}
                                className="w-14 h-14 object-contain transition-opacity"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="w-14 h-14 rounded bg-white/10 hidden"></span>
                            {ex.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* --- Asset Security Section --- */}
            <section className="container mx-auto px-6 mb-32 pt-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
                        FydBlock Asset Security
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Your assets are protected by industry-leading security measures and regulatory compliance
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-[#0A1014] border border-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:border-[#00FF9D]/30 transition-colors shadow-lg shadow-black/50">
                            <ShieldCheck className="text-[#00FF9D]" size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-3">Compliant with Multiple Regulations</h3>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            FydBlock adheres to strict regulatory standards across multiple jurisdictions, ensuring a secure and compliant trading environment.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-[#0A1014] border border-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:border-[#00FF9D]/30 transition-colors shadow-lg shadow-black/50">
                            <Users className="text-[#00FF9D]" size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-3">95% of User Assets in Cold Wallet</h3>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            The majority of user funds are stored in cold wallets, providing enhanced security against potential cyber threats.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-[#0A1014] border border-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:border-[#00FF9D]/30 transition-colors shadow-lg shadow-black/50">
                            <TrendingUp className="text-[#00FF9D]" size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-3">Proof-of-Reserves (PoR) Auditing</h3>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Regular third-party audits verify that FydBlock maintains sufficient reserves to back all user deposits.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Commission Section --- */}
            <br /><br />
            <section className="container mx-auto px-6 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
                        FydBlock Affiliate Commission
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Fydblock offers a transparent, multi-tier commission structure that rewards both direct referrals and sub-affiliate partnerships.
                        <br className="hidden md:block" />
                        All commissions are settled accurately in USDT with real-time tracking and daily updates.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Tree Lines (CSS Visualization) */}
                    {/* Horizontal Top Line (Arch) */}
                    {/* Horizontal Top Line (Arch) */}
                    <div className="absolute top-32 left-[21.8%] right-[21.8%] h-52 border-t border-r border-l border-[#00FF9D]/40 rounded-t-3xl hidden md:block pointer-events-none shadow-[0_-5px_20px_rgba(0,255,157,0.15)]"></div>
                    {/* Central Vertical Connector (Logo to Arch) */}
                    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-[#00FF9D]/40 hidden md:block"></div>

                    {/* Central Node */}
                    <div className="relative z-10 flex flex-col items-center justify-center mb-32">
                        {/* Glow effect behind logo */}
                        <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#00FF9D] to-[#00A86B] flex items-center justify-center shadow-[0_0_50px_rgba(0,255,157,0.3)] p-0.5 relative">
                            <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse"></div>
                            <Layers className="text-white" size={40} strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Branches */}
                    <div className="grid md:grid-cols-2 gap-12 md:gap-32 relative mt-12">

                        {/* Left Branch */}
                        <div className="flex flex-col items-center relative">

                            {/* Branch Icon */}
                            <div className="w-16 h-16 bg-[#00FF9D] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,157,0.4)] mb-2 z-10 relative mt-8">
                                <Lightbulb className="text-white" size={32} />
                            </div>

                            {/* Card 1: Label */}
                            <div className="bg-[#1A2328] border border-white/5 px-10 py-6 rounded-2xl w-full max-w-sm text-center mb-20 relative shadow-lg -mt-2">
                                {/* Vertical connector line */}
                                <div className="absolute h-20 w-[1px] bg-[#00FF9D]/30 left-1/2 -bottom-20"></div>
                                <h3 className="text-lg text-gray-300 font-light">Referral Commission</h3>
                            </div>

                            {/* Card 2: Value */}
                            <div className="bg-gradient-to-b from-[#1A2328] to-[#0E1418] border border-white/5 px-10 py-6 rounded-2xl w-full max-w-sm text-center shadow-lg group hover:border-[#00FF9D]/30 transition-colors">
                                <span className="text-xl text-gray-300 font-light">Up To <span className="text-[#00FF9D] font-medium">40%</span></span>
                            </div>
                        </div>

                        {/* Right Branch */}
                        <div className="flex flex-col items-center relative">

                            {/* Branch Icon */}
                            <div className="w-16 h-16 bg-[#00FF9D] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,157,0.4)] mb-2 z-10 relative mt-8">
                                <Share2 className="text-white" size={32} />
                            </div>

                            {/* Card 1: Label */}
                            <div className="bg-[#1A2328] border border-white/5 px-10 py-6 rounded-2xl w-full max-w-sm text-center mb-20 relative shadow-lg -mt-2">
                                {/* Vertical connector line */}
                                <div className="absolute h-20 w-[1px] bg-[#00FF9D]/30 left-1/2 -bottom-20"></div>
                                <h3 className="text-lg text-gray-300 font-light">Sub-Affiliates Commissions</h3>
                            </div>

                            {/* Card 2: Value */}
                            <div className="bg-gradient-to-b from-[#1A2328] to-[#0E1418] border border-white/5 px-10 py-6 rounded-2xl w-full max-w-sm text-center shadow-lg group hover:border-[#00FF9D]/30 transition-colors">
                                <span className="text-xl text-gray-300 font-light">Additional <span className="text-[#00FF9D] font-medium">10%</span></span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- Pro Affiliate Banner --- */}
            <section className="container mx-auto px-6 mb-32">
                <div className="border border-white/10 bg-[#0A1014] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-[#00FF9D]/30 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00FF9D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Become our Pro Affiliate</h3>
                        <p className="text-gray-400">Earn lifetime commission + trading volume bonus.</p>
                    </div>
                    <button
                        onClick={handleJoinClick}
                        className="relative z-10 bg-[#00FF9D] text-black px-8 py-3 rounded-full font-bold hover:bg-[#00cc7d] transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)] cursor-pointer"
                    >
                        Join Now
                    </button>
                </div>
            </section>

            {/* --- Steps Section --- */}
            <section className="container mx-auto px-6 mb-32 text-center">
                <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">
                    Becoming an Affiliate is Easy
                </h2>
                <p className="text-gray-400 mb-16">Start earning in three simple steps</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-[#0A1014] border border-white/5 p-8 rounded-3xl group hover:border-[#00FF9D]/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-[#0A1014] border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-[#00FF9D]/30 transition-colors shadow-lg">
                            <UserPlus className="text-[#00FF9D]" size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Apply</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                            Sign up and create your affiliate account in just a few minutes.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-[#0A1014] border border-white/5 p-8 rounded-3xl group hover:border-[#00FF9D]/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-[#0A1014] border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-[#00FF9D]/30 transition-colors shadow-lg">
                            <Share2 className="text-[#00FF9D]" size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Share</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                            Get your unique referral link and start promoting FydBlock to your audience.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-[#0A1014] border border-white/5 p-8 rounded-3xl group hover:border-[#00FF9D]/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-[#0A1014] border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-[#00FF9D]/30 transition-colors shadow-lg">
                            <DollarSign className="text-[#00FF9D]" size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Earn</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                            Earn commissions whenever your referrals trade on the platform.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Benefits Section --- */}
            <section className="container mx-auto px-6 mb-32">
                <div className="text-center mb-16">
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Why Partner With Us</p>
                    <h2 className="text-3xl md:text-5xl font-medium text-white">
                        FydBlock Affiliate Benefits
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <BenefitCard
                        title="Highest Commission Rates"
                        description="Earn up to 40% commission on direct referrals and 10% on sub-affiliates."
                        icon={<div className="text-[#00FF9D]"><ArrowRight className="-rotate-45" size={24} /></div>}
                    />
                    <BenefitCard
                        title="Fast & Transparent Payouts"
                        description="Get paid daily or weekly in crypto or fiat. Real-time tracking of all earnings."
                        icon={<div className="text-blue-400"><ArrowRight className="-rotate-45" size={24} /></div>}
                    />
                    <BenefitCard
                        title="Real-time Analytics"
                        description="Track your clicks, conversions, and earnings in real-time with our advanced dashboard."
                        icon={<div className="text-purple-400"><ArrowRight className="-rotate-45" size={24} /></div>}
                    />
                    <BenefitCard
                        title="Marketing Materials"
                        description="Access high-converting banners, landing pages, and email swipes."
                        icon={<div className="text-yellow-400"><ArrowRight className="-rotate-45" size={24} /></div>}
                    />
                </div>
            </section>

            {/* --- FAQ Section --- */}
            <section className="py-24 relative z-10" id="faq">
                <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">FydBlock <br />Frequently Asked Questions</h2>
                        <p className="text-gray-400 mb-8">Can't find the answer you're looking for? Reach out to our customer support team.</p>
                        <button className="text-[#00FF9D] font-bold flex items-center gap-2 hover:gap-4 transition-all hover:text-white">
                            Contact Support <ArrowRight size={20} />
                        </button>
                    </div>
                    <div className="lg:col-span-8 space-y-4">
                        <AccordionItem question="Is my money safe with FydBlock?" answer="Absolutely. Your funds always remain on your exchange account (like Binance or Coinbase). FydBlock simply sends trade commands via API keys which you configure to disable withdrawal permissions." />
                        <AccordionItem question="Do I need coding skills to use the bots?" answer="No! FydBlock is designed for everyone. We offer pre-configured templates and a visual strategy builder. You can start a bot in 3 clicks." />
                        <AccordionItem question="Which exchanges do you support?" answer="We support over 15 major exchanges including Binance, Kraken, Coinbase Pro, KuCoin, OKX, Bybit, and more." />
                        <AccordionItem question="Can I try it for free?" answer="Yes, we offer a 7-day free trial on our Pro plan so you can test all features risk-free. No credit card required." />
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    );
};

/* --- Sub Components --- */

const StepCard = ({ number, title, actionLabel, isActive, onClick }) => (
    <div className={`
    relative p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col justify-between
    ${isActive
            ? 'bg-gradient-to-b from-[#00FF9D]/5 to-[#0A1014] border-[#00FF9D]/40 shadow-[0_0_30px_rgba(0,255,157,0.05)]'
            : 'bg-[#0A1014]/50 border-white/5 hover:border-white/20'}
  `}>
        <div>
            <div className="text-lg font-bold text-white mb-4">{number}</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{title}</p>
        </div>

        {actionLabel && (
            <button
                onClick={onClick}
                className="w-full bg-[#00FF9D] text-black py-2.5 rounded-lg font-bold text-sm hover:bg-[#00cc7d] transition-colors cursor-pointer"
            >
                {actionLabel}
            </button>
        )}
    </div>
);

const BenefitCard = ({ title, description, icon }) => (
    <div className="bg-[#0A1014] border border-white/5 p-8 rounded-2xl hover:border-[#00FF9D]/20 transition-all hover:-translate-y-1 group">
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#00FF9D]/20 transition-colors">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF9D] transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
            {description}
        </p>
    </div>
);

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/5">
            <button
                className="w-full py-6 flex items-center justify-between text-left hover:text-[#00FF9D] transition-colors group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-lg text-gray-200 group-hover:text-[#00FF9D]">{question}</span>
                <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00FF9D]' : 'text-gray-500'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

export default LandingPage;
