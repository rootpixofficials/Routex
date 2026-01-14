import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    content: false,
    specs: false,
    features: false
  });

  // Refs for scroll detection
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const specsRef = useRef(null);
  const featuresRef = useRef(null);

  // Animation controls
  const controls = {
    hero: useAnimation(),
    content: useAnimation(),
    specs: useAnimation(),
    features: useAnimation()
  };

  // Custom scroll observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: heroRef, key: 'hero', threshold: 0.3 },
        { ref: contentRef, key: 'content', threshold: 0.2 },
        { ref: specsRef, key: 'specs', threshold: 0.2 },
        { ref: featuresRef, key: 'features', threshold: 0.2 }
      ];

      sections.forEach(({ ref, key, threshold }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight * (1 - threshold);
          
          if (isInView && !isVisible[key]) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
            controls[key].start("visible");
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, controls]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="w-full overflow-x-hidden bg-white min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative h-[480px] md:h-[520px] bg-red-900 overflow-hidden">
        <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0"
                >
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-900/60"></div>
                </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls.hero}
          className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Our <span className="text-red-300">Story</span>
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="flex items-center text-sm tracking-widest text-red-200"
          >
            <span className="hover:text-red-300 transition-colors cursor-pointer">HOME</span>
            <span className="mx-3">❯</span>
            <span className="hover:text-red-300 transition-colors cursor-pointer">PAGES</span>
            <span className="mx-3">❯</span>
            <span className="text-red-300">ABOUT</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls.content}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* LEFT CONTENT */}
          <div>
            <motion.div variants={staggerItem} className="mb-4">
              <span className="inline-block px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold tracking-wider border border-red-100">
                ABOUT COMPANY
              </span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-6 leading-tight">
              Crafting Excellence in <span className="text-blue-600 relative">
                PVC Laminates
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30"></span>
              </span>
            </motion.h2>

            {[
              "RoutEx Artistic PVC Laminates has completed four years of operations in India since its establishment in the year 2017. The company has a truly world-class manufacturing unit at Greater Noida, Uttar Pradesh with high standard facilities equipped with European technology.",
              "RoutEx PVC laminates come in thickness of 1.25mm & 3.25mm, offering dimensional stability to architects and interior designers. We conceive a trendy and chic design which not only reflects our client's preferences but also enriches their lives."
            ].map((text, index) => (
              <motion.p
                key={index}
                variants={staggerItem}
                className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg"
              >
                {text}
              </motion.p>
            ))}

            <motion.div 
              variants={fadeInLeft}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl border-l-4 border-red-500 shadow-sm"
            >
              <h3 className="text-xl font-bold text-red-700 mb-2 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Why Choose RoutEX?
              </h3>
              <p className="text-gray-700">
                We genuinely focus on customers' fulfillment at every stage and keep up extraordinary benchmarks in our work process which makes us a preferred choice of our clients.
              </p>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={scaleIn}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl group border border-blue-100">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src="\images\slide3.jpg"
                alt="Premium Laminate"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Blue accent element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 hidden lg:block"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== TECHNICAL SPECIFICATION ===== */}
      <section ref={specsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls.specs}
          className="grid lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* LEFT LIST */}
          <div className="lg:col-span-2">
            <motion.div variants={staggerItem} className="mb-8">
              <span className="text-sm font-semibold tracking-wider text-red-700">
                TECHNICAL SPECIFICATIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Precise Engineering & <span className="text-blue-700">Quality</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Thickness", value: "1.25mm & 3.25mm", icon: "📏" },
                { title: "Standard Size", value: "1220mm x 2440mm", icon: "📐" },
                { title: "Design Range", value: "Wide variety available", icon: "🎨" },
                { title: "Adhesive", value: "Standard laminating adhesive", icon: "🔗" },
                { title: "Lamination", value: "Proper surface preparation", icon: "✨" },
                { title: "Cutting", value: "Diamond blade cutter", icon: "✂️" },
                { title: "Maintenance", value: "Easy cleaning", icon: "🧹" },
                { title: "Durability", value: "High resistance", icon: "🛡️" }
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-start space-x-4 p-4 hover:bg-blue-50/50 rounded-lg transition-colors border border-blue-50"
                >
                  <div className="text-2xl">{spec.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{spec.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{spec.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD - Updated with blue theme */}
          <motion.div
            variants={fadeInRight}
            className="relative"
          >
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-8 text-white shadow-xl overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-600/20 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">
                    Important
                    <br />
                    <span className="text-red-300">Installation Note</span>
                  </h3>
                  <p className="text-red-200">
                    Kindly remove the protective film within 7 days of installation for best results
                  </p>
                </div>

                {/* Blue checkmarks */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="aspect-square bg-blue-600/30 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-red-300 text-xl">✓</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-red-700">
                  <p className="text-sm text-red-300">Trusted Experience</p>
                  <p className="text-3xl font-bold text-red-300 mt-1">30+ Years</p>
                  <p className="text-xs text-red-400 mt-2">of manufacturing excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section ref={featuresRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-blue-50/50 rounded-3xl mx-4 lg:mx-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls.features}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-wider text-blue-700">
            WHY CHOOSE ROUTEX
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Unmatched <span className="text-red-700">Quality Standards</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Our commitment to excellence ensures every product meets the highest standards of quality and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🏭",
              title: "Modern Manufacturing",
              desc: "European technology equipped facility ensuring top-notch quality and precision in every laminate.",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: "🎨",
              title: "Design Excellence",
              desc: "Trendy and chic designs that reflect client preferences and enhance interior aesthetics.",
              color: "from-blue-600 to-blue-700"
            },
            {
              icon: "🛡️",
              title: "Durability & Performance",
              desc: "High dimensional stability and long-lasting performance backed by 30+ years of experience.",
              color: "from-blue-700 to-blue-800"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)" }}
              className="group relative bg-white p-8 rounded-2xl transition-all border border-blue-100 shadow-sm overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
                
                {/* Blue line animation on hover */}
                <div className="mt-6 h-1 w-12 bg-blue-100 group-hover:bg-blue-500 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls.features}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-blue-100"
        >
          {[
            { value: "30+", label: "Years Experience", color: "text-red-700" },
            { value: "1000+", label: "Projects Completed", color: "text-red-600" },
            { value: "50+", label: "Design Variants", color: "text-red-700" },
            { value: "24/7", label: "Support", color: "text-red-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center"
            >
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== BLUE ACCENT SECTION ===== */}
      
    </div>
  );
};

export default About;