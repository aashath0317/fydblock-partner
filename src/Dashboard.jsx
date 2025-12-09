import React, { useState } from 'react';
import Layout from './components/Layout';
import { Copy } from 'lucide-react';
const API_BASE_URL = 'https:api.fydblock.com/api'

const Dashboard = () => {
    const [stats, setStats] = useState({
        earnings: 0,
        pending: 0,
        referrals: 0,
        conversion: '0%',
        link: 'Loading...'
    });
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                // Fetch Stats
                const statsRes = await fetch(`${API_BASE_URL}/partner/stats`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const statsData = await statsRes.json();
                
                if (statsRes.ok) {
                    setStats({
                        earnings: statsData.total_earnings,
                        pending: statsData.pending_payout,
                        referrals: statsData.active_referrals,
                        conversion: statsData.conversion_rate,
                        link: statsData.referral_link
                    });
                }

                // Fetch Clients (Reuse for Table)
                const clientRes = await fetch(`${API_BASE_URL}/partner/clients`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (clientRes.ok) {
                    setClients(await clientRes.json());
                }

            } catch (error) {
                console.error("Failed to load dashboard data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Layout title="Partner Dashboard">
            <div className="space-y-6">
                {/* Referral Link Box */}
                <div className="bg-gradient-to-r from-[#1D3B30] to-[#121819] border border-[#00FF9D]/20 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-xl font-medium text-white mb-4">
                        Share your unique link & Earn. Get 40% Recurring.
                    </h2>
                    <div className="flex gap-4">
                        <div className="flex-1 bg-[#0A1012] border border-white/10 rounded-lg px-4 py-3 text-gray-300 font-mono text-sm flex items-center">
                            {stats.link}
                        </div>
                        <button 
                            onClick={() => navigator.clipboard.writeText(stats.link)}
                            className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                            <Copy size={18} /> Copy Link
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-4">
                    <StatCard title="Total Earnings" value={`$${stats.earnings}`} change="+12%" changeColor="text-[#00FF9D]" />
                    <StatCard title="Pending Payout" value={`$${stats.pending}`} />
                    <StatCard title="Active Referrals" value={stats.referrals} />
                    <StatCard title="Conversion Rate" value={stats.conversion} />
                </div>

                {/* ... Keep Chart ... */}

                {/* Recent Referrals Table */}
                <div className="bg-[#0A1012] border border-white/5 rounded-2xl p-6">
                    <h3 className="text-white font-bold mb-4">Recent Referrals</h3>
                    <Table clients={clients} />
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

const Table = ({ clients }) => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="text-gray-500 text-xs uppercase tracking-wider border-b border-white/5">
                    <th className="pb-3 font-medium">User</th>
                    <th className="pb-3 font-medium">Country</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Plan</th>
                    <th className="pb-3 font-medium">Status</th>
                </tr>
            </thead>
            <tbody className="text-sm text-gray-300">
                {clients && clients.length > 0 ? clients.map((client, i) => (
                    <TableRow 
                        key={i}
                        user={client.full_name || 'Anonymous'} 
                        country={client.country} 
                        date={new Date(client.created_at).toLocaleDateString()} 
                        plan={client.plan} 
                        status="Active" 
                    />
                )) : (
                    <tr><td colSpan="5" className="py-4 text-center text-gray-500">No referrals yet</td></tr>
                )}
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
