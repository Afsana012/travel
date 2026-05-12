import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#f4faf7] text-slate-900 p-2 md:p-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="./images/logotb.png"
              alt="logo"
              className="w-40 md:w-60 h-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/signin"
            className="text-sm md:text-base font-medium hover:text-blue-600 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-black text-white px-3 py-1.5 md:px-5 md:py-2 rounded-lg text-sm md:text-base font-medium hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;