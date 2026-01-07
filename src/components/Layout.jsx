import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Bell, ChevronDown, User, Shield, Users, MessageSquarePlus, HelpCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config';

const Layout = ({ children, title }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [user, setUser] = useState({ name: 'Partner', plan: 'Free' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const res = await fetch(`${API_BASE_URL}/user/me`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    if (res.ok) {
                        const data = await res.json();
                        const userObj = data.user || data;

                        const fullName = userObj.full_name ||
                            (userObj.first_name ? `${userObj.first_name} ${userObj.last_name || ''}` : null) ||
                            userObj.username ||
                            userObj.name ||
                            userObj.email?.split('@')[0] ||
                            'Partner';

                        const finalName = fullName.replace(/undefined/g, '').trim();
                        const plan = userObj.plan || 'Free Plan';

                        setUser({
                            name: finalName,
                            plan: plan
                        });
                    }
                } catch (console) {
                    console.error("Failed to fetch user");
                }
            }
        };
        fetchUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/signin');
    };

    return (
        <div className="min-h-screen bg-[#050B0D] text-white font-sans flex">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Main Content Wrapper */}
            {/* ml-72 pushes content right to clear the sidebar */}
            {/* px-16 adds the "space" you wanted between sidebar and content */}
            <main className="flex-1 ml-72 px-16 py-12 relative z-10">

                {/* Dashboard Header */}
                <header className="flex justify-between items-center mb-12">
                    {/* Dynamic Title based on User */}
                    <h1 className="text-3xl font-bold text-[#00FF9D]">Welcome back, {user.name}</h1>

                    <div className="flex items-center gap-4">
                        {/* Notification Bell (Frontend Style) */}
                        <div className="relative">
                            <button
                                className="relative w-11 h-11 bg-white rounded-xl flex items-center justify-center hover:bg-gray-200 transition shadow-lg group"
                            >
                                <Bell size={20} className="text-black group-hover:scale-105 transition-transform" strokeWidth={2} />
                                <span className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#FF5500] rounded-full"></span>
                            </button>
                        </div>

                        {/* User Profile Dropdown (Frontend Style) */}
                        <div className="relative">
                            <div
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 cursor-pointer bg-[#1A1F24] p-1.5 rounded-lg border border-white/5 pr-3 hover:bg-white/5 transition"
                            >
                                <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
                                </div>
                                <div className="hidden md:block text-left mr-2">
                                    <p className="text-xs font-bold text-white leading-none">{user.name}</p>
                                    <p className="text-[10px] text-[#00FF9D] leading-none mt-1">{user.plan} Active</p>
                                </div>
                                <ChevronDown size={16} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                                    <div className="absolute right-0 top-full mt-2 w-64 bg-[#1A1F24] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden p-2 animate-in fade-in slide-in-from-top-2">
                                        <div className="space-y-1">
                                            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left">
                                                <User size={16} /> Account settings
                                            </button>
                                            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left">
                                                <Shield size={16} /> Security
                                            </button>
                                            <div className="my-1 border-t border-white/5"></div>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors text-left"
                                            >
                                                <LogOut size={16} /> Log out
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="animate-fade-in">
                    {children}
                </div>
            </main>

            {/* Background Blob Effect */}
            <div className="fixed top-0 right-0 w-[50vw] h-[50vh] bg-[#00FF9D]/5 rounded-full blur-[150px] pointer-events-none z-0" />
        </div>
    );
};

export default Layout;
