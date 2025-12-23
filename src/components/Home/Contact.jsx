import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Visualizer", path: "/visualizer" },
    { name: "E-Catalogue", path: "/catalogue" },
    { name: "Contact Us", path: "/contact" }
  ];

  const recentBlogs = [
    "Decorative Laminates: Trends 2024",
    "Precaution Guide for PVC Laminates",
    "Benefits of High-Pressure Laminates"
  ];

  return (
    <div className="w-full bg-white">

      {/* ================= PREMIUM CTA BAR ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 py-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-2xl md:text-3xl font-bold leading-tight text-center md:text-left"
          >
            Transform Your Spaces With
            <br />
            <span className="text-blue-200">Premium PVC Solutions</span>
          </motion.h2>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden min-w-[200px]"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              Contact Us
              <svg 
                className="w-5 h-5 group-hover:translate-x-2 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.button>
        </div>
      </section>

      {/* ================= ENHANCED SUBSCRIBE SECTION ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Decorative Header */}
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider">
                  STAY CONNECTED
                </span>
                <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Exclusive <span className="text-blue-600">Updates</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest trends, product launches, and expert tips
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 border-2 border-blue-100 rounded-xl bg-white text-gray-900 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <span>Subscribe</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.button>
              </div>
              
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center"
                >
                  🎉 Thank you for subscribing! Check your email for confirmation.
                </motion.div>
              )}
            </form>
            
            <p className="text-center text-gray-500 text-sm mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PREMIUM FOOTER ================= */}
      <footer className="bg-gradient-to-b from-gray-900 to-black pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <h2 className="text-white text-2xl font-bold">ROUTEX</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Fine Decor Industries LLP, a proud sister concern of Mozaiclam, brings the same commitment to quality, innovation, and excellence in design that has made us an industry leader.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                    aria-label={platform}
                  >
                    <span className="font-semibold">{platform.charAt(0).toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Recent Blog Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Latest Insights
              </h3>
              <ul className="space-y-4">
                {recentBlogs.map((blog, index) => (
                  <li key={index} className="group">
                    <a href="#" className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        <span className="text-blue-400 group-hover:text-white text-sm">→</span>
                      </div>
                      <span className="text-gray-400 group-hover:text-blue-300 transition-colors leading-relaxed">
                        {blog}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Quick Links
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="text-gray-400 hover:text-blue-300 transition-colors py-2 block group"
                    >
                      <span className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600/50 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Contact Information
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400">📞</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">+91 81010 06043</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400">✉️</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">info@mozaclam.com</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400">📍</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-400 leading-relaxed">
                      Plot No. 136, Sector-1 Extension,<br />
                      Greater Noida, Uttar Pradesh – 201308
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
          ></motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center text-center gap-4"
          >
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ROUTEX PVC Laminates. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Cookie Policy</a>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="text-green-400">✓</span>
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="text-green-400">✓</span>
              <span>30+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="text-green-400">✓</span>
              <span>100% Quality Tested</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;