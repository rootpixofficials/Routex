import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    mission: false,
    values: false,
    team: false,
    achievement: false
  });

  // Refs for scroll detection
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const achievementRef = useRef(null);

  // Animation controls
  const controls = {
    hero: useAnimation(),
    mission: useAnimation(),
    values: useAnimation(),
    team: useAnimation(),
    achievement: useAnimation()
  };

  // Custom scroll observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: heroRef, key: 'hero', threshold: 0.3 },
        { ref: missionRef, key: 'mission', threshold: 0.2 },
        { ref: valuesRef, key: 'values', threshold: 0.2 },
        { ref: teamRef, key: 'team', threshold: 0.2 },
        { ref: achievementRef, key: 'achievement', threshold: 0.2 }
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

  // Color variables based on image
  const colors = {
    primary: "#0B1A41", // Dark Blue from logo
    secondary: "#8B1E3F", // Burgundy/Red from logo
    accent: "#FFD700", // Gold for highlights
    lightBg: "#F5F7FA",
    darkBg: "#1A1F3C"
  };

  return (
    <div className="w-full overflow-x-hidden bg-white min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative h-[500px] md:h-[600px] overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.secondary} 0%, #1A2D5F 100%)` }}>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="/images/bedroom3.jpg"
            alt="About Us Banner"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${colors.secondary}E6 0%, #1A2D5F99 100%)` }}></div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls.hero}
          className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            About <span className="text-[#FFD700]">Us</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl max-w-3xl text-blue-100 mb-8 leading-relaxed"
          >
            Innovating the future of interior design with premium PVC laminates
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex items-center text-sm tracking-widest text-blue-200"
          >
            <span className="hover:text-[#FFD700] transition-colors cursor-pointer">HOME</span>
            <span className="mx-3">❯</span>
            <span className="hover:text-[#FFD700] transition-colors cursor-pointer">COMPANY</span>
            <span className="mx-3">❯</span>
            <span className="text-[#FFD700] font-semibold">ABOUT US</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section ref={missionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls.mission}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Mission */}
          <div>
            <motion.div variants={staggerItem} className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#0B1A41] text-white rounded-full text-sm font-semibold tracking-wider shadow-md">
                OUR MISSION
              </span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Redefining Interior <span style={{ color: colors.secondary }} className="font-bold">
                Aesthetics
              </span>
            </motion.h2>

            <motion.p variants={staggerItem} className="text-gray-700 text-lg leading-relaxed mb-8">
              At the heart of our mission is the commitment to transform spaces through innovative design and superior quality PVC laminates. We strive to provide architects, designers, and homeowners with materials that inspire creativity and stand the test of time.
            </motion.p>

            <motion.div 
              variants={fadeInLeft}
              className="bg-gradient-to-r from-[#F8FAFC] to-white rounded-2xl p-8 border-l-4 shadow-lg"
              style={{ borderLeftColor: colors.secondary }}
            >
              <div className="flex items-start">
                <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: colors.secondary }}>
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    To become the most trusted brand in decorative surfaces globally, known for our innovation, quality, and customer-centric approach.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Vision */}
          <motion.div
            variants={scaleIn}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src="\images\bedroom3.jpg"
                alt="Our Vision"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${colors.primary}40 0%, transparent 60%)` }}></div>
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div style={{ color: colors.primary }} className="text-3xl font-bold">30+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-20 hidden lg:block" style={{ backgroundColor: colors.secondary }}></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20 hidden lg:block" style={{ backgroundColor: colors.primary }}></div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section ref={valuesRef} className="py-20 md:py-28" style={{ backgroundColor: colors.lightBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls.values}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider" style={{ color: colors.secondary }}>
              OUR CORE VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Principles That <span style={{ color: colors.primary }}>Guide Us</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
              These values define who we are and how we operate, ensuring excellence in everything we do.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls.values}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "✨",
                title: "Quality Excellence",
                description: "Uncompromising commitment to quality in every product we manufacture and deliver.",
                color: colors.primary,
                points: ["Premium Materials", "Rigorous Testing", "ISO Certified"]
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Continuous research and development to bring cutting-edge designs and technologies.",
                color: colors.secondary,
                points: ["Latest Technology", "Trend Research", "Custom Solutions"]
              },
              {
                icon: "🤝",
                title: "Customer Focus",
                description: "Building lasting relationships through exceptional service and support.",
                color: colors.primary,
                points: ["24/7 Support", "Expert Consultation", "After-Sales Service"]
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(139, 30, 63, 0.15)" }}
                className="group relative bg-white p-8 rounded-3xl transition-all border border-gray-200 shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 transition-opacity duration-500" style={{ backgroundColor: value.color, opacity: 0 }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto" style={{ backgroundColor: `${value.color}15` }}>
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center mb-8">
                    {value.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {value.points.map((point, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: value.color }}></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== OUR TEAM ===== */}
      {/* <section ref={teamRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls.team}
        > */}
          {/* <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider" style={{ color: colors.secondary }}>
              MEET OUR TEAM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Dedicated <span style={{ color: colors.primary }}>Professionals</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
              Our team of experts combines decades of experience with passion for excellence.
            </p>
          </motion.div> */}

          {/* <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Rajesh Kumar",
                role: "Founder & CEO",
                image: "/images/team-1.jpg",
                description: "30+ years in manufacturing industry",
                color: colors.primary
              },
              {
                name: "Priya Sharma",
                role: "Design Director",
                image: "/images/team-2.jpg",
                description: "Award-winning interior designer",
                color: colors.secondary
              },
              {
                name: "Amit Patel",
                role: "Technical Head",
                image: "/images/team-3.jpg",
                description: "Expert in material science",
                color: colors.primary
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.03 }}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-2xl border-2 shadow-xl`} style={{ borderColor: `${member.color}40` }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${member.color}80 0%, transparent 60%)` }}></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white" style={{ background: `linear-gradient(to top, ${member.color} 0%, transparent 100%)` }}>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#FFD700] font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-100 text-sm">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div> */}

          {/* Team Stats */}
          {/* <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t"
            style={{ borderColor: `${colors.primary}20` }}
          >
            {[
              { value: "200+", label: "Team Members", icon: "👥", color: colors.primary },
              { value: "15+", label: "Design Experts", icon: "🎨", color: colors.secondary },
              { value: "10+", label: "Countries Served", icon: "🌍", color: colors.primary },
              { value: "98%", label: "Client Satisfaction", icon: "⭐", color: colors.secondary }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section> */}

      {/* ===== ACHIEVEMENTS ===== */}
      <section ref={achievementRef} className="py-20 md:py-28" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, #1A2D5F 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls.achievement}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider text-[#FFD700]">
              OUR ACHIEVEMENTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Milestones of <span className="text-[#FFD700]">Excellence</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls.achievement}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                year: "2017",
                title: "Company Founded",
                description: "Established manufacturing unit in Greater Noida",
                icon: "🏭"
              },
              {
                year: "2019",
                title: "ISO Certification",
                description: "Achieved ISO 9001:2015 certification",
                icon: "📜"
              },
              {
                year: "2021",
                title: "Export Expansion",
                description: "Started exporting to 10+ countries",
                icon: "🚢"
              },
              {
                year: "2023",
                title: "Innovation Award",
                description: "Received Best Innovation Award",
                icon: "🏆"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group hover:bg-white/15 transition-all"
              >
                <div className="text-5xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-[#FFD700] mb-2">{achievement.year}</div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-blue-100 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16 pt-12 border-t border-white/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Ready to Transform Your Space?
            </h3>
            <button 
              className="text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              style={{ backgroundColor: colors.secondary }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#6A1630'}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.secondary}
            >
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTNOTE ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-500 italic"
          style={{ color: colors.primary }}
        >
          "Creating beautiful spaces that inspire and endure"
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUs;