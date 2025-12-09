import React, { useState } from 'react';
import Layout from './components/Layout';
import { Check, Edit2, ChevronRight, Monitor } from 'lucide-react';

const Profile = () => {
    // Toggle states for notifications/security
    const [toggles, setToggles] = useState({
        twoFactor: false,
        emailNotif: true,
        smsNotif: true,
        promoNotif: false,
    });

    const handleToggle = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <Layout title="Profile Settings">

            {/* Top Banner Card */}
            <div className="bg-[#1D3B30] border border-[#00FF9D]/20 rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00FF9D]/10 to-transparent pointer-events-none" />

                <div className="flex items-center gap-6 relative z-10">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-[#050B0D] shadow-xl"></div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-1">Akeel Aasath</h2>
                        <p className="text-gray-300 text-sm mb-3">Partner ID: #88392-FYD</p>
                        <div className="flex gap-3">
                            <span className="bg-[#00FF9D]/20 text-[#00FF9D] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Pro Plan Active
                            </span>
                            <span className="bg-yellow-500/20 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                <Check size={12} strokeWidth={4} /> Verified
                            </span>
                        </div>
                    </div>
                </div>

                <button className="relative z-10 border border-white/20 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                    Edit Avatar
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* --- LEFT COLUMN (Forms) --- */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Personal Information */}
                    <div className="bg-[#0A1012] border border-white/5 rounded-2xl p-8">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                <span className="w-1 h-5 bg-white rounded-full"></span>
                                Personal Information
                            </h3>
                            <button className="text-xs text-gray-400 hover:text-white transition-colors">Save Changes</button>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">First Name</label>
                                <input type="text" defaultValue="Akeel" className="w-full bg-white text-gray-900 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Last Name</label>
                                <input type="text" defaultValue="Aasath" className="w-full bg-white text-gray-900 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-400 text-sm">Email Address</label>
                            <input type="email" defaultValue="alex@fydblock.io" className="w-full bg-white text-gray-900 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]" />
                        </div>
                    </div>

                    {/* Payment Details */}
                    <div className="bg-[#0A1012] border border-white/5 rounded-2xl p-8">
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-1 h-5 bg-white rounded-full"></span>
                            Payment Details
                        </h3>

                        {/* Info Box */}
                        <div className="bg-[#1D3B30]/50 border border-[#00FF9D]/30 rounded-lg p-4 mb-6 text-[#00FF9D] text-sm text-center">
                            Payouts are processed automatically on the 15th via PayPal. Ensure your PayPal email matches your registration email or update it below.
                        </div>

                        <div className="space-y-2 mb-6">
                            <label className="text-gray-400 text-sm">PayPal Email</label>
                            <div className="flex gap-4">
                                <input type="email" defaultValue="alex@fydblock.io" className="flex-1 bg-white text-gray-900 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]" />
                                <button className="border border-white/20 text-white px-6 rounded-md text-sm font-medium hover:bg-white/5 transition-colors">Verify</button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-t border-white/5 pt-6">
                            <div>
                                <p className="text-white font-medium text-sm">Tax Form (W-8BEN)</p>
                                <p className="text-gray-500 text-xs">Required for non-US partners.</p>
                            </div>
                            <span className="flex items-center gap-2 text-[#00FF9D] text-sm font-bold border border-[#00FF9D]/30 px-3 py-1 rounded-full">
                                <Check size={14} strokeWidth={3} /> Submitted
                            </span>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN (Security & Notifications) --- */}
                <div className="space-y-8">

                    {/* Security */}
                    <div className="bg-[#0A1012] border border-white/5 rounded-2xl p-6">
                        <h3 className="text-white font-bold text-lg mb-6">Security</h3>

                        <button className="w-full flex justify-between items-center bg-[#1A1F21] p-4 rounded-lg border border-white/5 mb-6 hover:border-[#00FF9D]/30 transition-colors">
                            <div className="text-left">
                                <p className="text-white text-sm font-medium">Change Password</p>
                                <p className="text-gray-500 text-[10px]">Last changed 3 months ago</p>
                            </div>
                            <ChevronRight size={16} className="text-gray-400" />
                        </button>

                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <p className="text-white text-sm font-medium">2FA Authentication</p>
                                <p className="text-gray-500 text-[10px]">Extra security layer</p>
                            </div>
                            <Toggle active={toggles.twoFactor} onClick={() => handleToggle('twoFactor')} />
                        </div>

                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Active Sessions</p>
                            <div className="flex items-start gap-3">
                                <Monitor size={20} className="text-[#00FF9D] mt-1" />
                                <div>
                                    <p className="text-white text-sm">Mac Book Pro <span className="text-[#00FF9D] text-xs ml-1">(Current)</span></p>
                                    <p className="text-gray-500 text-xs">Singapore • Chrome</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-[#0A1012] border border-white/5 rounded-2xl p-6">
                        <h3 className="text-white font-bold text-lg mb-6">Notifications</h3>
                        <div className="space-y-6">
                            <ToggleRow label="New Referral Signup" active={toggles.emailNotif} onClick={() => handleToggle('emailNotif')} />
                            <ToggleRow label="Payout Processed" active={toggles.smsNotif} onClick={() => handleToggle('smsNotif')} />
                            <ToggleRow label="Marketing Updates" active={toggles.promoNotif} onClick={() => handleToggle('promoNotif')} />
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

// --- Helper Components ---

const Toggle = ({ active, onClick }) => (
    <div
        onClick={onClick}
        className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 ${active ? 'bg-[#00FF9D]' : 'bg-gray-600'}`}
    >
        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${active ? 'translate-x-6' : 'translate-x-0'}`}></div>
    </div>
);

const ToggleRow = ({ label, active, onClick }) => (
    <div className="flex justify-between items-center">
        <span className="text-gray-300 text-sm">{label}</span>
        <Toggle active={active} onClick={onClick} />
    </div>
);

export default Profile;
