import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import PerformanceChart from './components/PerformanceChart';
import Table from './components/Table';
import { Copy, Bell } from 'lucide-react';
import API_BASE_URL from './config';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [referralLink, setReferralLink] = useState('Fydblock.com/partner/...');

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                const res = await fetch(`${API_BASE_URL}/user/me`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    console.log("Partner Dashboard User Data:", data); // Debugging

                    // Comprehensive Fallback Strategy
                    const userObj = data.user || data;
                    const fullName = userObj.full_name ||
                        (userObj.first_name ? `${userObj.first_name} ${userObj.last_name || ''}` : null) ||
                        userObj.username ||
                        userObj.name ||
                        userObj.email?.split('@')[0] ||
                        'Partner';

                    // Ensure we don't display "undefined undefined"
                    const finalName = fullName.replace(/undefined/g, '').trim();

                    setUser({ name: finalName });

                    // Generate Referral Link Logic
                    const slug = finalName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                    setReferralLink(`https://fydblock.com/partner/${slug}`);
                } else {
                    console.error("User fetch failed:", res.status);
                }
            } catch (err) {
                console.error("Failed to fetch user:", err);
            }
        };
        fetchUser();
    }, []);

    // Mock Data
    const referrals = [
        { id: 1, user: 'Jhone.d', country: 'LK', date: '2025.12.7', plan: 'Pro Plan', status: 'Active', commision: '$12' },
        { id: 2, user: 'Jhone.d', country: 'LK', date: '2025.12.7', plan: 'Pro Plan', status: 'Active', commision: '$12' },
    ];

    const chartData = [
        { value: 2000, date: '1' }, { value: 2400, date: '5' }, { value: 2100, date: '10' },
        { value: 2600, date: '15' }, { value: 2300, date: '20' }, { value: 1800, date: '25' },
        { value: 2500, date: '30' }, { value: 3000, date: '35' }, { value: 2800, date: '40' },
        { value: 2200, date: '45' }, { value: 2600, date: '50' }, { value: 3200, date: '55' },
        { value: 2800, date: '60' }, { value: 3400, date: '65' }, { value: 4000, date: '70' }
    ];

    return (
        <Layout title="">
            {/* 1. Share Link Section */}
            <section className="bg-gradient-to-r from-[#1A3D33] to-[#0A1513] border border-white/10 rounded-3xl p-8 mb-8 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl font-medium text-white mb-6">Share your unique link & Earn. Get 40% Recurring.</h2>
                    <div className="flex gap-4 max-w-2xl">
                        <div className="flex-1 bg-[#050B0D]/50 border border-white/10 rounded-xl px-4 py-3 text-gray-300 font-mono text-sm flex items-center truncate">
                            {referralLink}
                        </div>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(referralLink);
                            }}
                            className="bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2 whitespace-nowrap"
                        >
                            <Copy size={18} /> Copy Link
                        </button>
                    </div>
                </div>
                {/* Background decorators if needed */}
            </section>

            {/* 2. Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Available Earnings */}
                <div className="bg-[#0A1012] border border-white/10 rounded-2xl p-6">
                    <p className="text-gray-400 text-sm mb-2">Total Earnings:</p>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-2xl font-bold text-white">$4,250.00</h3>
                        <span className="text-[#00FF9D] text-sm">+12%</span>
                    </div>
                </div>

                {/* Pending Payout */}
                <div className="bg-[#0A1012] border border-white/10 rounded-2xl p-6">
                    <p className="text-gray-400 text-sm mb-2">Pending Payout:</p>
                    <h3 className="text-2xl font-bold text-white">$340.50</h3>
                </div>

                {/* Active Referrals */}
                <div className="bg-[#0A1012] border border-white/10 rounded-2xl p-6">
                    <p className="text-gray-400 text-sm mb-2">Active Referrals:</p>
                    <h3 className="text-2xl font-bold text-white">128</h3>
                </div>

                {/* Conversion Rate */}
                <div className="bg-[#0A1012] border border-white/10 rounded-2xl p-6">
                    <p className="text-gray-400 text-sm mb-2">Conversion Rate:</p>
                    <h3 className="text-2xl font-bold text-white">4.2%</h3>
                </div>
            </div>

            {/* 3. Revenue Performance Chart */}
            <section className="bg-[#0A1012] border border-white/10 rounded-3xl p-8 mb-8">
                <h3 className="text-lg font-bold text-white mb-6">Revenue Performance <span className="text-gray-500 text-sm font-normal">(Last 30 Days)</span></h3>
                <div className="w-full">
                    <PerformanceChart data={chartData} themeColor="#00FF9D" />
                </div>
            </section>

            {/* 4. Recent Referrals Table */}
            <section className="bg-[#0A1012] border border-white/10 rounded-3xl p-8">
                <h3 className="text-lg font-bold text-white mb-6">Recent Referrals</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="text-white border-b border-transparent">
                                <th className="pb-4 font-bold">User</th>
                                <th className="pb-4 font-bold">Country</th>
                                <th className="pb-4 font-bold">Date</th>
                                <th className="pb-4 font-bold">Plan</th>
                                <th className="pb-4 font-bold">Status</th>
                                <th className="pb-4 font-bold">Commision</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {referrals.map((item, index) => (
                                <tr key={index} className="border-b border-transparent hover:bg-white/5">
                                    <td className="py-3 font-medium text-white">{item.user}</td>
                                    <td className="py-3">{item.country}</td>
                                    <td className="py-3">{item.date}</td>
                                    <td className="py-3">{item.plan}</td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' ? 'bg-[#00FF9D]' : 'bg-red-500'}`}></span>
                                            <span className={item.status === 'Active' ? 'text-white' : 'text-gray-400'}>{item.status}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 text-white">{item.commision}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    );
};

export default Dashboard;
