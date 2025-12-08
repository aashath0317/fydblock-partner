import React from 'react';
import Sidebar from './Sidebar';
import { Bell } from 'lucide-react';

const Layout = ({ children, title }) => {
    return (
        <div className="min-h-screen bg-[#050B0D] text-white font-sans flex">
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 ml-64 p-8 relative z-10">
                {/* Global Header for Dashboard pages */}
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-[#00FF9D]">{title}</h1>
                    <button className="p-2 bg-[#1A1F21] rounded-lg text-white hover:text-[#00FF9D] transition-colors border border-white/5">
                        <Bell size={20} />
                    </button>
                </header>

                {children}
            </main>

            {/* Background Blob for pages */}
            <div className="fixed top-0 right-0 w-[50vw] h-[50vh] bg-[#00FF9D]/5 rounded-full blur-[150px] pointer-events-none z-0" />
        </div>
    );
};

export default Layout;
