import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Ecatalogue = () => {
  const [email, setEmail] = useState('');
  const [downloads, setDownloads] = useState(0);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  const handleDownload = (fileName) => {
    setDownloads(prev => prev + 1);
    // In a real app, this would trigger actual file download
    alert(`Downloading ${fileName}...`);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Decorative Laminates",
      date: "June 01, 2021",
      excerpt: "Explore our latest collection of decorative laminates for modern interiors."
    },
    {
      id: 2,
      title: "Precaution For PVC Laminates Installation",
      date: "May 12, 2021",
      excerpt: "Important safety measures and installation guidelines for PVC laminates."
    },
    {
      id: 3,
      title: "The Benefits of using Mozaic High-Pressure Laminates",
      date: "April 15, 2021",
      excerpt: "Discover why our high-pressure laminates are the preferred choice."
    }
  ];

  const catalogues = [
    {
      id: 1,
      title: "RoutEx Classic Collection",
      description: "Premium PVC laminates with elegant designs",
      size: "45 MB",
      pages: 120,
      downloads: 1245
    },
    {
      id: 2,
      title: "Modern Interior Series",
      description: "Contemporary designs for modern homes",
      size: "38 MB",
      pages: 98,
      downloads: 987
    },
    {
      id: 3,
      title: "Commercial Range",
      description: "Durable laminates for commercial spaces",
      size: "52 MB",
      pages: 145,
      downloads: 756
    },
    {
      id: 4,
      title: "Wooden Finish Collection",
      description: "Realistic wood textures and patterns",
      size: "41 MB",
      pages: 112,
      downloads: 1032
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-blue-600 transition-colors">HOME</a>
          <span className="mx-2">❯</span>
          <span className="text-blue-600 font-semibold">E-CATALOGUE</span>
        </div>
        

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 mb-12 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Welcome Back
              </h1>
              <p className="text-gray-700 text-lg mb-6">
                Access our complete collection of PVC laminate catalogues. Download the latest designs and inspiration for your next project.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-blue-600">{downloads}+</div>
                  <div className="text-sm text-gray-600">Downloads Today</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Catalogues Available</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src="/images\slide3.jpg"
                  alt="Catalogue Preview"
                  className="rounded-xl shadow-2xl w-full max-w-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-sm">Featured Catalogue</div>
                  <div className="font-bold">2024 Collection</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Catalogue Download Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                ROUTEX E-CATALOGUE DOWNLOAD
              </h2>
              <p className="text-gray-600">DESIGNING TEAM</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Catalogues
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogues.map((catalogue) => (
              <motion.div
                key={catalogue.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📚</span>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {catalogue.size}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {catalogue.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {catalogue.description}
                  </p>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-6">
                    <span>{catalogue.pages} pages</span>
                    <span>{catalogue.downloads} downloads</span>
                  </div>
                  
                  <button
                    onClick={() => handleDownload(catalogue.title)}
                    className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 py-3 rounded-lg font-semibold hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 border border-blue-100 flex items-center justify-center"
                  >
                    <span className="mr-2">⬇️</span>
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Two Column Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Contact with us</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Unlimited Support</h4>
                  <p className="text-blue-200 text-sm">24/7 customer support for all your queries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🎨</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Easily Customizable</h4>
                  <p className="text-blue-200 text-sm">Custom designs tailored to your needs</p>
                </div>
              </div>
              
              <form className="pt-6 border-t border-blue-700">
                <h4 className="font-bold mb-4">Subscribe to Connect with us</h4>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right Column - Inspirational */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full -translate-y-16 translate-x-16"></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">
              YOUR INTERIORS SHOULD BE AS BEAUTIFUL
            </h2>
            <p className="text-gray-700 mb-8 relative z-10">
              Discover endless possibilities with our premium PVC laminates. Transform your spaces with designs that inspire and endure.
            </p>
            <div className="relative z-10">
              <img
                src="/images/interior-design.jpg"
                alt="Beautiful Interior"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow">
                <div className="font-bold text-gray-900">Featured Design</div>
                <div className="text-sm text-gray-600">Modern Luxury Collection</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="flex items-center mb-6">
                  <img
                    src="/images\WhatsApp_Image_2025-12-12_at_20.50.58_fd8c0ffa-removebg-preview.png"
                    alt="MOZAIC Logo"
                    className="h-10"
                  />
                  <div className="ml-4">
                    <div className="font-bold text-lg">R O U T E X</div>
                    <div className="text-cyan-300 text-sm">ARTISTIC PVC LAMINATES</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Premium quality PVC laminates for modern interiors.
                </p>
              </div>

              {/* Blog Posts */}
              <div>
                <h3 className="font-bold text-lg mb-6">OUR RECENT BLOG POST</h3>
                <div className="space-y-6">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="border-l-2 border-cyan-500 pl-4">
                      <div className="text-cyan-300 text-sm">{post.date}</div>
                      <h4 className="font-semibold mt-1">{post.title}</h4>
                      <p className="text-gray-300 text-sm mt-2">{post.excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-lg mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {['Home', 'About Us', 'Products', 'Visualizer', 'E-Catalogue', 'Contact Us', 'More'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-300 hover:text-cyan-300 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-bold text-lg mb-6">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="mr-3">📞</span>
                    +91 8010 8004 00
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✉️</span>
                    info@routex.com
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">📍</span>
                    Plot No. 136, Ecotech-1 Extension, Greater Noida, G.B. Nagar, Uttar Pradesh-201308
                  </li>
                </ul>
                <div className="mt-8">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center">
                    <span className="mr-2">💬</span>
                    Chat with Us
                  </button>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  © mozaidam.com. All Right Reserved.
                </div>
                <div className="text-gray-400 text-sm">
                  Design & Development by:-vcqru <span className="text-cyan-300">Quick Query</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Ecatalogue;