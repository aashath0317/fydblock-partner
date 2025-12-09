import React, { useState } from 'react';
import Layout from './components/Layout';

const Marketing = () => {
    const [activeTab, setActiveTab] = useState('Banners');

    // Dummy data to match the image
    const assets = [
        { title: 'Square Banner', size: '300x250 Banner', type: 'File Type / 150 MB' },
        { title: 'Social Media Kit', size: 'Social Story', type: 'File Type / 120 MB' },
        { title: 'Email Template 01', size: '300x250 Banner', type: 'File Type / 150 MB' },
        { title: 'Square Banner', size: '300x250 Banner', type: 'File Type / 150 MB' },
        { title: 'Social Media Kit', size: 'Social Story', type: 'File Type / 120 MB' },
        { title: 'Email Template 01', size: '300x250 Banner', type: 'File Type / 150 MB' },
        { title: 'Square Banner', size: '300x250 Banner', type: 'File Type / 150 MB' },
        { title: 'Social Media Kit', size: 'Social Story', type: 'File Type / 120 MB' },
        { title: 'Email Template 01', size: '300x250 Banner', type: 'File Type / 150 MB' },
    ];

    return (
        <Layout title="Marketing Assets">
            <div className="space-y-8">

                {/* Tabs Navigation */}
                <div className="flex gap-8 border-b border-white/10 pb-1">
                    {['Banners', 'Social Media Kit', 'Method'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 text-sm font-bold transition-all relative ${activeTab === tab
                                    ? 'text-[#00FF9D]'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {tab}
                            {/* Active Underline */}
                            {activeTab === tab && (
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00FF9D] rounded-full"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Assets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {assets.map((item, index) => (
                        <div key={index} className="bg-[#0A1012] border border-white/5 rounded-2xl p-4 hover:border-[#00FF9D]/20 transition-colors group">

                            {/* Image Placeholder */}
                            <div className="bg-white rounded-xl h-40 w-full flex items-center justify-center mb-6 relative overflow-hidden">
                                {/* Gradient sheen effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white"></div>
                                <span className="relative z-10 text-gray-300 text-lg font-medium">{item.size}</span>
                            </div>

                            {/* Content */}
                            <div className="px-1">
                                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                <p className="text-gray-500 text-xs mb-6">{item.type}</p>

                                <button className="w-full py-3 rounded-lg border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 hover:text-white hover:border-white/30 transition-all active:scale-95">
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </Layout>
    );
};

export default Marketing;
