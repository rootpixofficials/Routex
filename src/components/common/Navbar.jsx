import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/About" },
    { label: "PRODUCTS", path: "/product" },
    { label: "VISUALIZER", path: "/visualizer" },
    { label: "E-CATALOGUE", path: "/E-catalouge" },
    { label: "CONTACT US", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <img
            src="/images/Logo.png"
            alt="MOZAIC Logo"
            className="h-22 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-1">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`px-4 py-3 text-sm font-semibold uppercase rounded-md transition
                    ${
                      isActive(item.path)
                        ? "text-red-600 font-bold bg-blue-50"
                        : scrolled 
                          ? "text-gray-800 hover:text-red-600 hover:bg-blue-50"
                          : "text-white hover:text-red-300 hover:bg-white/10"
                    }`}
                >
                  {item.label}

                  {isActive(item.path) && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute top-2 right-3 w-1.5 h-1.5 bg-red-600 rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              color: scrolled ? '#1f2937' : 'white' // gray-800 when scrolled, white when transparent
            }}
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-80 h-full bg-white z-50 lg:hidden shadow-xl"
          >
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full text-left px-4 py-4 rounded-lg font-medium
                    ${
                      isActive(item.path)
                        ? "bg-blue-50 text-blue-600 font-bold"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;