
/*const COLORS = {
    lightGreen: '#C2F793',
    mediumGreen: '#79B055',
    darkAccent: '#420015',
    textPrimary: '#0A3F10',
};

const Sidebar = ({ currentView, setView, adminName = "Admin" }) => {
    
    const navItems = [
        // USER SECTION
        { label: "My Works", view: "my-works", icon: BookOpen, type: "user" },
        { label: "My Drafts", view: "my-drafts", icon: LayoutDashboard, type: "user" },
        { label: "My Liked", view: "my-liked", icon: Settings, type: "user" },

        // ADMIN SECTION
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
            
            {/* Profile Header} */
            /*<div className="flex flex-col items-center mb-10 mt-2">
                <div className="w-20 h-20 rounded-full border-2 border-gray-400 mb-2 bg-white flex items-center justify-center">
                    <User size={36} color={COLORS.mediumGreen} />
                </div>
                <p className="text-xl font-mono text-center font-semibold" style={{ color: COLORS.textPrimary }}>
                    Welcome, {adminName}!
                </p>
            </div>

            {/* User Section }*/
            /*<h3 className="text-sm font-mono font-medium uppercase text-gray-500 mb-2 ml-4">
                My Profile
            </h3>
            <div className="space-y-1 ml-4 mb-6">
                {navItems.filter(item => item.type === 'user').map(item => (
                    <NavItem key={item.view} label={item.label} view={item.view} />
                ))}
            </div>

            {/* Admin Section }*/
            /*<h3 className="text-sm font-mono font-medium uppercase text-gray-500 mb-2 ml-4">
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

export default Sidebar;*/

import React, { useState } from "react";

const Sidebar = ({ currentView, setView, adminName = "Admin" }) => {
  const [active, setActive] = useState(currentView || "");

  const userOptions = ["My Works", "My Drafts", "My Liked"];
  const adminOptions = [
  "Overview",
  "All Works",
  "All Users",
  "Total Users",
  "Total Books",
  "Premium Books",
  "Total Views",
  "Top Books",
  "UserRoles",
  "NewUsersByDay",
  "TopAuthors",
  "UserSubscriptionBreakdown"
];

  const handleClick = (option) => {
    setActive(option);
    if (setView) {setView(option);
    }
  };

  const renderOption = (option) => {
    const isActive = active === option;
    return (
      <div key={option} className="relative w-full flex justify-center">
        {isActive && (
          <div className="absolute left-0 top-0 w-70 h-12 bg-white rounded-tl-2xl rounded-bl-2xl" />
        )}
        <p
          onClick={() => handleClick(option)}
          className="relative z-10 text-xl font-semibold font-outfit cursor-pointer px-4 py-2"
          style={{ color: "#000000" }}
        >
          {option}
        </p>
      </div>
    );
  };

  return (
    <div className="w-80 min-h-screen bg-[#C0FFB3] p-6 flex flex-col items-center">
      {/* Profile */}
      <div className="w-28 h-28 bg-[#F9F9F9] rounded-full border border-black flex items-center justify-center mb-8" />
      <p className="text-2xl font-semibold font-geist text-[#000000]">Welcome, {adminName}!</p>

      {/* User Options */}
      <div className="mt-12 space-y-6 w-full">
        {userOptions.map(renderOption)}
      </div>

      {/* Centered short separator line */}
      <div className="w-40 border-t-2 border-black mt-6 mb-2 self-center"></div>

      {/* Admin Section */}
      <p className="mt-2 text-xl font-semibold font-geist text-[#000000]">Admin Options</p>
      <div className="mt-4 space-y-6 w-full text-center">
        {adminOptions.map(renderOption)}
      </div>
    </div>
  );
};

export default Sidebar;


