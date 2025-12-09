import React from 'react';
import Layout from './components/Layout';
import { Copy } from 'lucide-react';

const Dashboard = () => {
    return (
        <Layout title="Welcome back, Akeel Trader">
            <div className="space-y-6">

                {/* Referral Link Box */}
                <div className="bg-gradient-to-r from-[#1D3B30] to-[#121819] border border-[#00FF9D]/20 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-xl font-medium text-white mb-4">
                        Share your unique link & Earn. Get 40% Recurring.
                    </h2>
                    <div className="flex gap-4">
                        <div className="flex-1 bg-[#0A1012] border border-white/10 rounded-lg px-4 py-3 text-gray-300 font-mono text-sm flex items-center">
                            Fydblock.com/r/akeel_trader
                        </div>
                        <button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                            <Copy size={18} /> Copy Link
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-4">
                    <StatCard title="Total Earnings" value="$4,250.00" change="+12%" changeColor="text-[#00FF9D]" />
                    <StatCard title="Pending Payout" value="$340.50" />
                    <StatCard title="Active Referrals" value="128" />
                    <StatCard title="Conversion Rate" value="4.2%" />
                </div>

                {/* Revenue Graph (SVG Simulation) */}
                <div className="bg-[#0A1012] border border-white/5 rounded-2xl p-6">
                    <h3 className="text-white font-bold mb-6">Revenue Performance <span className="text-gray-500 font-normal text-sm">(Last 30 Days)</span></h3>
                    <div className="h-64 w-full relative flex items-end px-2">
                        {/* Simulated Line Chart using SVG */}
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#00FF9D" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#00FF9D" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,150 Q50,100 100,120 T200,80 T300,140 T400,90 T500,110 T600,60 T700,90 T800,40 T900,100 T1000,80"
                                fill="none"
                                stroke="#00FF9D"
                                strokeWidth="2"
                                className="drop-shadow-[0_0_10px_rgba(0,255,157,0.3)]"
                            />
                        </svg>

                        {/* Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="border-t border-white/5 w-full h-0"></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Referrals Table */}
                <div className="bg-[#0A1012] border border-white/5 rounded-2xl p-6">
                    <h3 className="text-white font-bold mb-4">Recent Referrals</h3>
                    <Table />
                </div>

            </div>
        </Layout>
    );
};

// Reusable Components
const StatCard = ({ title, value, change, changeColor }) => (
    <div className="bg-[#0A1012] border border-white/5 rounded-2xl p-5">
        <p className="text-gray-400 text-sm mb-2">{title}:</p>
        <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">{value}</span>
            {change && <span className={`text-sm ${changeColor} font-medium`}>({change})</span>}
        </div>
    </div>
);

const Table = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="text-gray-500 text-xs uppercase tracking-wider border-b border-white/5">
                    <th className="pb-3 font-medium">User</th>
                    <th className="pb-3 font-medium">Country</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Plan</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Commission</th>
                </tr>
            </thead>
            <tbody className="text-sm text-gray-300">
                <TableRow user="Jhone.d" country="LK" date="2025.12.7" plan="Pro Plan" status="Active" comm="$12" />
                <TableRow user="Sarah.m" country="US" date="2025.12.6" plan="Pro Plan" status="Active" comm="$12" />
                <TableRow user="Mike.t" country="UK" date="2025.12.5" plan="Basic" status="Pending" comm="$5" />
            </tbody>
        </table>
    </div>
);

const TableRow = ({ user, country, date, plan, status, comm }) => (
    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
        <td className="py-4">{user}</td>
        <td className="py-4">{country}</td>
        <td className="py-4 text-gray-400">{date}</td>
        <td className="py-4">{plan}</td>
        <td className="py-4">
            <span className={`flex items-center gap-2 text-xs ${status === 'Active' ? 'text-[#00FF9D]' : 'text-yellow-500'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${status === 'Active' ? 'bg-[#00FF9D]' : 'bg-yellow-500'}`}></span>
                {status}
            </span>
        </td>
        <td className="py-4">{comm}</td>
    </tr>
);

export { Table }; // Exporting table for reuse in Clients page
export default Dashboard;
