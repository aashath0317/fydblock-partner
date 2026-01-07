import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'https://api.fydblock.com/api'

const SignIn = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    // Form State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
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
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            console.error(error);
            setError('Connection failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020405] text-white font-sans relative overflow-x-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#00FF9D]/10 rounded-full blur-[150px]" />
                <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[60vh] bg-[#00A3FF]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[40vh] bg-[#00FF9D]/5 rounded-full blur-[180px]" />
            </div>

            {/* Header */}
            <div className="w-full p-6 md:p-12 relative z-20">
                <div className="flex flex-col items-start gap-8">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <img src="/logo.png" alt="FydBlock" className="h-8 md:h-10 object-contain" />
                        <span className="text-xl font-light text-white tracking-wide opacity-80">. Partner</span>
                    </div>

                    <button onClick={() => navigate('/')} className="flex items-center gap-2 text-white hover:text-[#00FF9D] transition-colors">
                        <ArrowLeft size={20} /> <span className="text-base font-medium">Back</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-20 relative z-10 flex flex-col items-center">

                {/* Tabs */}
                <div className="flex items-center gap-12 mb-12">
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-white mb-2">Log In</span>
                        <div className="w-8 h-1 bg-[#00FF9D] rounded-full"></div>
                    </div>
                    <button
                        onClick={() => navigate('/signup')}
                        className="text-2xl font-bold text-gray-500 hover:text-white transition-colors"
                    >
                        Register
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="w-full max-w-lg space-y-6">
                    {/* Error Message */}
                    {error && (
                        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                            <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                            <p className="text-sm text-red-200">{error}</p>
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-lg font-medium text-white">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address..."
                            className="w-full bg-white text-black rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#00FF9D] text-base placeholder:text-gray-500"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-lg font-medium text-white">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password..."
                                className="w-full bg-white text-black rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#00FF9D] text-base placeholder:text-gray-500 pr-12"
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border border-gray-500 flex items-center justify-center bg-transparent group-hover:border-[#00FF9D] transition-colors ${rememberMe ? 'bg-[#00FF9D] border-[#00FF9D]' : ''}`}>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                {rememberMe && <div className="w-2.5 h-2.5 bg-black rounded-[1px]" />}
                            </div>
                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Remember me</span>
                        </label>
                        <button type="button" onClick={() => navigate('/resetpass')} className="text-sm text-[#00FF9D] hover:underline">
                            Forget your password
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full md:w-1/2 bg-[#00FF9D] text-black font-bold py-3.5 rounded-lg hover:bg-[#00cc7d] transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)] mt-8 disabled:opacity-70 disabled:cursor-not-allowed mx-auto block"
                    >
                        {isLoading ? (
                            <Loader2 className="animate-spin mx-auto" size={20} />
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;



