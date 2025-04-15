import React, { useState } from 'react';
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';
import { Home, Briefcase, User, Mail, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Define navigation items with their icons
const navigationItems = [
  { title: 'Home', href: '#home', icon: Home },
  { title: 'Work', href: '#work', icon: Briefcase },
  { title: 'About', href: '#about', icon: User },
  { title: 'Contact', href: '#contact', icon: Mail },
];

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav w-full p-4 shadow-md bg-background z-50 relative">
      <div className="nav-content flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="nav-logo flex items-center">
          <svg
            className="w-10 h-10"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_238_1296)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M100 0H0L100 100H0L100 200H200L100 100H200L100 0Z"
                fill="url(#paint0_linear_238_1296)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_238_1296"
                x1="20.5"
                y1="16"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
              <clipPath id="clip0_238_1296">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:block">
          <Dock className="items-end pb-3">
            {navigationItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="no-underline"
                  onMouseEnter={() => setHoveredItem(idx)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <DockItem className="aspect-square rounded-full bg-muted">
                    <DockLabel>{item.title}</DockLabel>
                    <DockIcon>
                      {/* The key change is here - showing both icon and text, but with different opacity */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Icon always present but with varying opacity */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
                          style={{ opacity: hoveredItem === idx ? 0 : 1 }}
                        >
                          <Icon className="text-foreground" size={20} />
                        </div>
                        
                        {/* Text always present but with varying opacity */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
                          style={{ opacity: hoveredItem === idx ? 1 : 0 }}
                        >
                          <span className="text-foreground text-sm font-medium">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </DockIcon>
                  </DockItem>
                </a>
              );
            })}
          </Dock>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute right-4 top-16 bg-background shadow-lg rounded-md px-4 pt-4 pb-6 w-56 z-50"
          >
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 text-foreground text-base font-medium"
                  >
                    <Icon size={18} />
                    {item.title}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;