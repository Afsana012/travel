"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Map,
  Heart,
  UserRound,
} from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Map, label: "My Destinations", href: "/dashboard/destinations" },
  { icon: Heart, label: "Favorites", href: "/dashboard/favorites" },
  { icon: UserRound, label: "Profile", href: "/dashboard/profile" },
];

const MobileTopBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="md:hidden sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="size-9 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
            <Link href="/dashboard">
              <Image
                src="/images/logotb.png"
                alt="Travel Bucket"
                width={120}
                height={30}
                className="h-7 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-30" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/20" />
          <div
            className="absolute top-14 left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-3 space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="size-5" strokeWidth={isActive ? 2 : 1.5} />
                  {item.label}
                </Link>
              );
            })}
            <div className="border-t border-gray-100 pt-2 mt-2">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition"
              >
                <LogOut className="size-5" strokeWidth={1.5} />
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileTopBar;
