import React from 'react';
import Sidebar from './Sidebar';
import { Bell } from 'lucide-react';

const Layout = ({ children, title }) => {
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
                    <h1 className="text-3xl font-bold text-[#00FF9D]">{title}</h1>

                    {/* Notification Bell */}
                    <button className="p-2.5 bg-[#1A1F21] rounded-xl text-white hover:text-[#00FF9D] transition-colors border border-white/10 hover:border-[#00FF9D]/50 cursor-pointer">
                        <Bell size={22} />
                    </button>
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
