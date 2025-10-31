import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const contactLinks = [
    { label: "Email", href: "#" },
    { label: "Phone", href: "#" },
    { label: "Address", href: "#" },
  ];

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Browse", href: "/browse" },
    { label: "Help", href: "/instruction" },
  ];

  return (
    <div className="bg-[#FFFDEE] pt-12 flex justify-center">
      <div className="bg-[#C0FFB3] text-[#1A5632] border-6 border-[#1a4d0f] border-b-0 rounded-t-[150px] p-14 w-full max-w-[1500px] grid grid-cols-2 gap-60 relative min-h-[250px]">
        
        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-extrabold mb-6 ml-20">Reach out below!</h3>
          {contactLinks.map((link) => (
            <p key={link.label} className="text-base mb-2 ml-20 text-black">
              {link.label}
            </p>
          ))}
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-2xl font-extrabold mb-6 ml-20">Navigate</h3>
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block text-base mb-2 ml-20 text-black hover:text-green-500 transition-colors"
              style={{ color: "black" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Footer copyright */}
        <p className="absolute bottom-2 right-6 text-sm text-black font-normal">
          &copy; 2025 Readian
        </p>
      </div>
    </div>
  );
};

export default Footer;
