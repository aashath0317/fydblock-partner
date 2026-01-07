import React, { useState, useEffect } from 'react';
import { ArrowLeft, Eye, EyeOff, Check, Loader2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'https://api.fydblock.com/api'

const SignUp = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); // Success state

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
        setError('');
        const allValid = Object.values(validations).every(Boolean);
        if (!allValid) {
            setError("Please ensure your password meets all requirements.");
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
                // Instead of redirecting, show success state
                setIsSuccess(true);
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Connection failed');
        } finally {
            setIsLoading(false);
        }
    };

    // Success View
    if (isSuccess) {
        return (
            <div className="min-h-screen bg-[#020405] text-white font-sans flex items-center justify-center relative overflow-hidden">
                {/* Background Glows for consistency */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#00FF9D]/5 rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 text-center max-w-lg p-8 animate-in fade-in zoom-in duration-300">
                    <div className="mb-6 relative inline-block">
                        <img src="/Mask.png" alt="Success" className="w-48 h-48 object-contain mx-auto relative z-10" />
                        {/* Adding a subtle glow behind the astronaut if needed */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00FF9D]/20 rounded-full blur-2xl z-0"></div>
                    </div>

                    <h2 className="text-4xl font-bold text-white mb-4">Thank You!</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Your application is under consideration,<br />
                        We will get back to you in few business day.
                    </p>

                    <button
                        onClick={() => setIsSuccess(false)} // Or navigate('/')
                        className="absolute top-4 right-4 text-gray-400 hover:text-white"
                    >
                        {/* Close icon if this were a modal, but as a full page state, maybe a button to home? 
                             The design has a close 'X' in top right. Assuming it might dismiss or go back.
                         */}
                    </button>
                    {/* The design shows an X in the top right. Let's put it there. */}
                    <div className="absolute top-[-40px] right-0 cursor-pointer p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" onClick={() => navigate('/')}>
                        <X size={20} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020405] text-white font-sans relative overflow-x-hidden">

            {/* Background Glows matching design - subtle dark green feel */}
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
                    <button
                        onClick={() => navigate('/signin')}
                        className="text-2xl font-bold text-gray-500 hover:text-white transition-colors"
                    >
                        Log In
                    </button>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-white mb-2">Register</span>
                        <div className="w-8 h-1 bg-[#00FF9D] rounded-full"></div>
                    </div>
                </div>

                <div className="text-center mb-12 max-w-xl">
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The chosen Partner Program allows you to receive a percentage of Fydblock
                        revenue based on the Subscription Fee of every active client you refer.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleRegister} className="w-full max-w-lg space-y-6">

                    {/* Name */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-baseline">
                            <label className="text-lg font-medium text-white">Name</label>
                            <span className="text-xs text-gray-400">
                                If you have already an account.
                                <span onClick={() => navigate('/signin')} className="text-[#00FF9D] cursor-pointer ml-1 hover:underline">Sign in</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name..."
                            className="w-full bg-white text-black rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#00FF9D] text-base placeholder:text-gray-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-lg font-medium text-white">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address..."
                            className="w-full bg-white text-black rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#00FF9D] text-base placeholder:text-gray-500"
                        />
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                        <label className="text-lg font-medium text-white">Country of Resident</label>
                        <input
                            type="text"
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="United Arab Emirates"
                            className="w-full bg-white text-black rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#00FF9D] text-base placeholder:text-gray-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label className="text-lg font-medium text-white">Create your Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password..."
                                className="w-full bg-white text-black rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#00FF9D] text-base placeholder:text-gray-500 pr-12"
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

                    {/* Checklist */}
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-2">
                        <CheckItem label="8 characters" valid={validations.length} />
                        <CheckItem label="1 lowercase letter" valid={validations.lower} />
                        <CheckItem label="1 uppercase letter" valid={validations.upper} />
                        <CheckItem label="1 number" valid={validations.number} />
                        <CheckItem label="1 special character" valid={validations.special} />
                    </div>

                    {/* Error */}
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full md:w-1/2 bg-[#00FF9D] text-black font-bold py-3.5 rounded-lg hover:bg-[#00cc7d] transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)] mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? <Loader2 className="animate-spin mx-auto" /> : "Sign up"}
                    </button>

                </form>
            </div>
        </div>
    );
};

const CheckItem = ({ label, valid }) => (
    <div className="flex items-center gap-2">
        <div className={`w-4 h-4 rounded-[3px] flex items-center justify-center transition-colors ${valid ? 'bg-[#00FF9D]' : 'bg-[#00FF9D]'}`}>
            {valid && <Check size={12} className="text-black" strokeWidth={4} />}
        </div>
        <span className="text-xs text-gray-400">{label}</span>
    </div>
);

export default SignUp;


