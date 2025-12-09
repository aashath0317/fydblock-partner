import React from 'react';
import Layout from './components/Layout';
import { ArrowUpRight, Wallet } from 'lucide-react';

const Payouts = () => {
    // Dummy Data matching the image
    const historyData = [
        { date: 'Dec 15, 2023', amount: '$340', method: 'Bank', status: 'Paid' },
        { date: 'Nov 15, 2023', amount: '$340', method: 'Paypal', status: 'Paid' },
        { date: 'Oct 15, 2023', amount: '$340', method: 'Bank', status: 'Non-paid' },
        { date: 'Dec 15, 2023', amount: '$340', method: 'Bank', status: 'Paid' },
        { date: 'Nov 15, 2023', amount: '$340', method: 'Paypal', status: 'Paid' },
        { date: 'Oct 15, 2023', amount: '$340', method: 'Bank', status: 'Non-paid' },
        { date: 'Dec 15, 2023', amount: '$340', method: 'Bank', status: 'Paid' },
        { date: 'Nov 15, 2023', amount: '$340', method: 'Paypal', status: 'Paid' },
        { date: 'Oct 15, 2023', amount: '$340', method: 'Bank', status: 'Non-paid' },
        { date: 'Dec 15, 2023', amount: '$340', method: 'Bank', status: 'Paid' },
        { date: 'Nov 15, 2023', amount: '$340', method: 'Paypal', status: 'Paid' },
        { date: 'Oct 15, 2023', amount: '$340', method: 'Bank', status: 'Non-paid' },
    ];

    return (
        <Layout title="Payouts">
            <div className="space-y-8">

                {/* Top Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Next Payout Card */}
                    <div className="bg-[#1D3B30] border border-[#00FF9D]/20 rounded-2xl p-6 relative overflow-hidden group">
                        {/* Green gradient background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF9D]/10 to-transparent pointer-events-none" />

                        <div className="relative z-10 flex justify-between items-start">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D]">
                                    <Wallet size={20} />
                                </div>
                                <span className="text-white font-medium">Next Payout</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-[#00FF9D] flex items-center justify-center text-black">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-1">$4,500</h2>
                            <p className="text-gray-400 text-xs">You payout on Dec 15</p>
                        </div>
                    </div>

                    {/* Total Active Client Card */}
                    <div className="bg-[#0A1012] border border-white/5 rounded-2xl p-6 flex flex-col justify-center">
                        <span className="text-gray-400 mb-2">Total active client</span>
                        <h2 className="text-3xl font-bold text-white">158</h2>
                    </div>
                </div>

                {/* History Section */}
                <div>
                    <h3 className="text-xl font-medium text-white mb-6">Payout History</h3>

                    <div className="bg-[#0A1012] border border-white/5 rounded-2xl p-8">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-white text-base font-bold border-b border-white/5">
                                    <th className="pb-6 pl-4">Date</th>
                                    <th className="pb-6">Amount</th>
                                    <th className="pb-6">Method</th>
                                    <th className="pb-6">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-400 text-base">
                                {historyData.map((item, index) => (
                                    <tr key={index} className="hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                        <td className="py-4 pl-4">{item.date}</td>
                                        <td className="py-4 text-white font-medium">{item.amount}</td>
                                        <td className="py-4">{item.method}</td>
                                        <td className="py-4">
                                            {/* UPDATED: Conditional Styling for Paid (Green) vs Non-paid (Red) */}
                                            <span className={`${item.status === 'Paid'
                                                ? 'text-[#00FF9D] font-medium' // Green
                                                : 'text-red-500 font-medium'   // Red
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Payouts;
