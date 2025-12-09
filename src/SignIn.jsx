import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'api.fydblock.com/api'

const SignIn = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    // Form State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050B0D] text-white font-sans relative flex flex-col overflow-hidden">

            {/* --- Background --- *}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vh] bg-[#00FF9D]/5 rounded-full blur-[150px]" />
            </div>

            {/* --- Header --- */}
            <div className="w-full relative z-20 pt-6 px-6">
                <div className="container mx-auto">
                    <div className="flex items-center gap-2 cursor-pointer mb-8" onClick={() => navigate('/')}>
                        <img src="/logo.png" alt="FydBlock" className="h-12" />
                        <span className="text-xl font-light text-white tracking-wide">. Partner</span>
                    </div>

                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-white hover:text-[#00FF9D] transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="text-base">Back</span>
                    </button>
                </div>
            </div>

            {/* --- Main Content --- */}
            <div className="flex-1 flex flex-col items-center relative z-10 px-4 mt-4">

                <div className="w-full max-w-[450px]">

                    {/* Tabs: Log In / Register */}
                    <div className="flex justify-center items-center gap-12 mb-12">
                        {/* Active Tab */}
                        <div className="flex flex-col items-center cursor-pointer">
                            <span className="text-2xl font-medium text-white mb-2">Log In</span>
                            <div className="w-8 h-1 bg-[#00FF9D] rounded-full"></div>
                        </div>

                        {/* Inactive Tab */}
                        <div
                            className="flex flex-col items-center cursor-pointer group"
                            onClick={() => navigate('/signup')}
                        >
                            <span className="text-2xl font-medium text-gray-400 group-hover:text-white transition-colors mb-2">Register</span>
                            {/* Invisible line to keep height consistent, visible on hover if desired */}
                            <div className="w-8 h-1 bg-transparent group-hover:bg-[#00FF9D]/50 rounded-full transition-colors"></div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-6">

                        <div className="space-y-2">
                            <label className="text-base font-bold text-white">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address..."
                                className="w-full bg-white text-gray-900 rounded-[4px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#00FF9D] placeholder:text-gray-500 text-sm shadow-md"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-base font-bold text-white">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password..."
                                    className="w-full bg-white text-gray-900 rounded-[4px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#00FF9D] placeholder:text-gray-500 text-sm shadow-md pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                                >
                                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-[4px] bg-white flex items-center justify-center transition-all`}>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={rememberMe}
                                        onChange={() => setRememberMe(!rememberMe)}
                                    />
                                    {rememberMe && <div className="w-3 h-3 bg-black rounded-[1px]" />}
                                </div>
                                <span className="text-sm text-gray-300 group-hover:text-white select-none">Remember me</span>
                            </label>

                            <button type="button" onClick={() => navigate('/resetpass')} className="text-sm text-[#00FF9D] hover:underline">
                                Forget your password
                            </button>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-40 bg-[#00FF9D] text-black text-sm font-bold py-3 rounded-[4px] hover:bg-[#00cc7d] transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)] hover:shadow-[0_0_25px_rgba(0,255,157,0.5)] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? '...' : 'Submit'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;


