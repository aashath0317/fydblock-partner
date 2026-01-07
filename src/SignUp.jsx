import React, { useState, useEffect } from 'react';
import { ArrowLeft, Eye, EyeOff, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'https://api.fydblock.com/api'

const SignUp = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        password: ''
    });

    // Password Validation State
    const [validations, setValidations] = useState({
        length: false,
        lower: false,
        upper: false,
        number: false,
        special: false
    });

    useEffect(() => {
        const p = formData.password;
        setValidations({
            length: p.length >= 8,
            lower: /[a-z]/.test(p),
            upper: /[A-Z]/.test(p),
            number: /[0-9]/.test(p),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(p),
        });
    }, [formData.password]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const allValid = Object.values(validations).every(Boolean);
        if (!allValid) {
            alert("Please ensure your password meets all requirements.");
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token); // <--- Save the token
                navigate('/dashboard'); // <--- Redirect directly to Dashboard
            } else {
                alert(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050B0D] text-white font-sans relative flex flex-col overflow-x-hidden">

            {/* --- Background Glow --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vh] bg-[#00FF9D]/5 rounded-full blur-[120px]" />
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
            <div className="flex-1 flex flex-col items-center relative z-10 px-4 pb-20 mt-4">

                <div className="w-full max-w-[500px]">

                    {/* Tabs: Log In / Register */}
                    <div className="flex justify-center items-center gap-12 mb-6">
                        {/* Inactive Tab */}
                        <div
                            className="flex flex-col items-center cursor-pointer group"
                            onClick={() => navigate('/signin')}
                        >
                            <span className="text-2xl font-medium text-gray-400 group-hover:text-white transition-colors mb-2">Log In</span>
                            <div className="w-8 h-1 bg-transparent group-hover:bg-[#00FF9D]/50 rounded-full transition-colors"></div>
                        </div>

                        {/* Active Tab */}
                        <div className="flex flex-col items-center cursor-pointer">
                            <span className="text-2xl font-medium text-white mb-2">Register</span>
                            <div className="w-8 h-1 bg-[#00FF9D] rounded-full"></div>
                        </div>
                    </div>

                    {/* Header Text */}
                    <div className="text-center mb-10">
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                            The chosen Partner Program allows you to receive a percentage of Fydblock
                            revenue based on the Subscription Fee of every active client you refer.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleRegister} className="space-y-6">

                        {/* Name Input */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-end relative z-20">
                                <label className="text-base font-bold text-white">Name</label>
                                <div className="text-xs text-gray-400">
                                    If you have already an account.
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            navigate('/signin');
                                        }}
                                        className="text-[#00FF9D] hover:underline ml-1 font-bold cursor-pointer select-none"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </div>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name..."
                                className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#00FF9D] placeholder:text-gray-500 text-sm shadow-md"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-base font-bold text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address..."
                                className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#00FF9D] placeholder:text-gray-500 text-sm shadow-md"
                            />
                        </div>

                        {/* Country Input */}
                        <div className="space-y-2">
                            <label className="text-base font-bold text-white">Country of Resident</label>
                            <input
                                type="text"
                                name="country"
                                required
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="United Arab Emirates"
                                className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#00FF9D] placeholder:text-gray-500 text-sm shadow-md"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <label className="text-base font-bold text-white">Create your Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password..."
                                    className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#00FF9D] placeholder:text-gray-500 text-sm shadow-md pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors"
                                >
                                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Password Checklist */}
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-1">
                            <CheckItem label="8 characters" valid={validations.length} />
                            <CheckItem label="1 lowercase letter" valid={validations.lower} />
                            <CheckItem label="1 uppercase letter" valid={validations.upper} />
                            <CheckItem label="1 number" valid={validations.number} />
                            <CheckItem label="1 special character" valid={validations.special} />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#3B82F6] text-white text-base font-bold py-3 rounded-lg hover:bg-[#2563EB] transition-all shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Processing...' : 'Create Account'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

// Helper for checklist items
const CheckItem = ({ label, valid }) => (
    <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-[2px] flex items-center justify-center transition-colors ${valid ? 'bg-[#00FF9D]' : 'bg-gray-600'}`}>
            {valid && <Check size={10} className="text-black" strokeWidth={4} />}
        </div>
        <span className={`text-[11px] ${valid ? 'text-gray-300' : 'text-gray-500'}`}>{label}</span>
    </div>
);

export default SignUp;


