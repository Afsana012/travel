import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#f4faf7] text-slate-900 p-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
            <img src="./images/logotb.png" alt="logo" className="w-60 h-auto object-contain"/>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="font-medium hover:text-blue-600 transition">Login</a>
          <button className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;