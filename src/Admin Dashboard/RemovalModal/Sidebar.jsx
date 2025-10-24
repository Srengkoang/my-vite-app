// Sidebar.jsx
import React from 'react';
import { Users, BookOpen, BarChart3, User, Settings, LayoutDashboard } from 'lucide-react';

const COLORS = {
    lightGreen: '#C2F793',
    mediumGreen: '#79B055',
    darkAccent: '#420015',
    textPrimary: '#0A3F10',
};

const MOCK_DATA = {
    adminName: "Alex",
};

const Sidebar = ({ currentView, setView }) => {
    const navItems = [
        { label: "My Works", view: "my-works", icon: BookOpen, type: "user" },
        { label: "My Drafts", view: "my-drafts", icon: LayoutDashboard, type: "user" },
        { label: "My Liked", view: "my-liked", icon: Settings, type: "user" },
        { label: "Overview", view: "overview", icon: BarChart3, type: "admin" },
        { label: "All Works", view: "all-works", icon: BookOpen, type: "admin" },
        { label: "All Users", view: "all-users", icon: Users, type: "admin" },
    ];

    const NavItem = ({ label, view }) => {
        const isActive = currentView === view;
        return (
            <div
                onClick={() => setView(view)}
                className="flex items-center text-lg font-mono px-4 py-3 rounded-r-lg cursor-pointer transition-all duration-200"
                style={{
                    borderLeft: isActive ? `6px solid ${COLORS.mediumGreen}` : 'none',
                    backgroundColor: isActive ? 'white' : COLORS.lightGreen,
                    borderRadius: isActive ? '0 30px 30px 0' : '0',
                    color: isActive ? COLORS.darkAccent : COLORS.textPrimary,
                    marginRight: isActive ? '-10px' : '0',
                }}
            >
                {label}
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full p-4" style={{ backgroundColor: COLORS.lightGreen }}>
            <div className="flex flex-col items-center mb-10 mt-2">
                <div className="w-20 h-20 rounded-full border-2 border-gray-400 mb-2 bg-white flex items-center justify-center">
                    <User size={36} color={COLORS.mediumGreen} />
                </div>
                <p className="text-xl font-mono text-center font-semibold" style={{ color: COLORS.textPrimary }}>
                    Welcome, {MOCK_DATA.adminName}!
                </p>
            </div>

            <h3 className="text-sm font-mono font-medium uppercase text-gray-500 mb-2 mt-4 ml-4">
                My Profile
            </h3>
            <div className="space-y-1 ml-4 mb-6">
                {navItems.filter(item => item.type === 'user').map(item => (
                    <NavItem key={item.view} label={item.label} view={item.view} />
                ))}
            </div>

            <h3 className="text-sm font-mono font-medium uppercase text-gray-500 mb-2 mt-4 ml-4">
                Admin Options
            </h3>
            <div className="space-y-1 ml-4">
                {navItems.filter(item => item.type === 'admin').map(item => (
                    <NavItem key={item.view} label={item.label} view={item.view} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;