import React from 'react';
import {
    LayoutDashboard,
    Users,
    Wallet,
    ShoppingBag,
    MessageCircle
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { path: '/clients', label: 'Clients', icon: <Users size={20} /> },
        // UPDATED: Changed 'Withdraw Funds' to 'Payouts'
        { path: '/withdraw', label: 'Payouts', icon: <Wallet size={20} /> },
        { path: '/marketing', label: 'Marketing assets', icon: <ShoppingBag size={20} /> },
        { path: '/support', label: 'Support', icon: <MessageCircle size={20} /> },
    ];

    return (
        <div className="h-screen w-72 bg-[#050B0D] border-r border-white/10 flex flex-col fixed left-0 top-0 z-50">
            {/* Logo Section */}
            <div className="p-8">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                    <img src="/logo.png" alt="FydBlock" className="h-16" />
                    <span className="text-lg font-light text-white tracking-wide opacity-80">. Partner</span>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-6 space-y-2 mt-4">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-lg transition-all duration-200 group ${isActive
                                ? 'bg-[#00FF9D] text-black shadow-[0_0_15px_rgba(0,255,157,0.3)] font-semibold'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <span className={isActive ? 'text-black' : 'text-gray-400 group-hover:text-white'}>
                                {item.icon}
                            </span>
                            <span className="text-sm tracking-wide">{item.label}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
