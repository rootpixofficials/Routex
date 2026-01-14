import React from "react";
import { motion } from "framer-motion";

const products = [
  
  { 
    name: "Naturalicious", 
    img: "public/images/bedroom.jpg",
    category: "Natural Series"
  },
  { 
    name: "Mirror Gloss", 
    img: "public/images/kitchen1.jpg",
    category: "Gloss Finish"
  },
  { 
    name: "Stone Stories", 
    img: "public/images/kitchen2.jpg",
    category: "Stone Collection"
  },
  
  { 
    name: "Solid Matt", 
    img: "public/images/kitchen3.jpg",
    category: "Matte Finish"
  },
  { 
    name: "Radical Contours", 
    img: "public/images/bedroom1.jpg",
    category: "3D Effects"
  },
  { 
    name: "Elegant Motifs", 
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Patterns"
  },

  
];

const Product = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-red-700 rounded-full text-sm font-semibold tracking-wider border border-red-200">
              PRODUCT PORTFOLIO
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Premium <span className="text-red-600 relative">
              Surface Solutions
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/20"></span>
            </span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover our exquisite collection of PVC laminates, meticulously crafted to 
              transform spaces with elegance and durability.
            </p>
          </div>
          
          {/* Divider */}
          <div className="mt-8 flex items-center justify-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            <div className="mx-4 text-blue-400">✧</div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {products.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              {/* Product Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl border border-gray-100">
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Premium PVC laminate with exceptional durability
                  </p>
                  
                  {/* Features */}
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Waterproof
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Scratch Resistant
                    </span>
                  </div>
                  
                  {/* View Button */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform group-hover:scale-[1.02]">
                      View Details
                    </button>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span className="flex items-center justify-center space-x-3">
              <span>Explore Full Collection</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            
            {/* Button Shine Effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl">
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </motion.button>
          
          <p className="text-gray-500 text-sm mt-6">
            Browse through our complete range of premium PVC laminate products
          </p>
        </motion.div>

        {/* Decorative Bottom Border */}
        <div className="mt-20 pt-8 border-t border-blue-100">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-red-300"></div>
            <div className="text-red-400 text-sm font-medium">EXCELLENCE IN EVERY SURFACE</div>
            <div className="w-8 h-px bg-gradient-to-r from-red-300 to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Product;