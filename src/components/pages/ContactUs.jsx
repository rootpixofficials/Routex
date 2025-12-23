import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUndo, FaHeadset, FaCheckCircle } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
    setIsSubmitted(false);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-blue-600" />,
      title: "Phone Number",
      content: "+91 8010 800 400",
      description: "Call us for quick assistance"
    },
    {
      icon: <FaEnvelope className="text-blue-600" />,
      title: "Email Address",
      content: "info@mozaiclam.com",
      description: "Email us for detailed inquiries"
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-600" />,
      title: "Office Location",
      content: "Plot No. 136, Ecotech-1 Extension",
      description: "Greater Noida, G.B. Nagar, Uttar Pradesh – 201308"
    }
  ];

  const openingHours = [
    { day: "Monday – Thursday", hours: "09:00 – 17:00" },
    { day: "Friday", hours: "09:00 – 16:00" },
    { day: "Saturday", hours: "09:00 – 16:00" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      {/* ================= ENHANCED BANNER ================= */}
      <section className="relative h-[400px] md:h-[450px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60"></div>
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Get In <span className="text-cyan-300">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl"
          >
            Let's discuss how we can transform your space
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center text-sm tracking-widest text-blue-200"
          >
            <span className="hover:text-cyan-300 transition-colors cursor-pointer">HOME</span>
            <span className="mx-3">❯</span>
            <span className="hover:text-cyan-300 transition-colors cursor-pointer">PAGES</span>
            <span className="mx-3">❯</span>
            <span className="text-cyan-300">CONTACT US</span>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-2xl">{info.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                </div>
                <p className="text-2xl font-bold text-blue-700 mb-2">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>

          {/* ================= ENHANCED CONTACT FORM ================= */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Form */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full text-sm font-semibold tracking-wider border border-blue-100 mb-3">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Interested in <span className="text-blue-700">discussing</span>?
                </h2>
                <p className="text-gray-600 text-lg">
                  Active & Ready to use Contact Form! We'll respond within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you soon.</p>
                  <button
                    onClick={handleReset}
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter subject"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Enter your message..."
                    ></textarea>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-white transition-all ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          SENDING...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane /> SEND YOUR MESSAGE
                        </>
                      )}
                    </motion.button>
                    
                    <button
                      type="button"
                      onClick={handleReset}
                      className="flex items-center gap-2 px-10 py-4 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-all"
                    >
                      <FaUndo /> RESET
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right - Info Box */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 text-white shadow-2xl"
            >
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <FaHeadset className="mr-3 text-cyan-300" />
                  Mozaic Laminates
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-800 p-3 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                        <p className="text-blue-200 text-sm">{info.content}</p>
                        {info.description && (
                          <p className="text-blue-300 text-xs mt-1">{info.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-blue-700">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <FaClock className="mr-3 text-cyan-300" />
                  Opening Hours
                </h4>
                
                <div className="space-y-4">
                  {openingHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-blue-200">{item.day}</span>
                      <span className={`font-semibold ${item.hours === 'Closed' ? 'text-red-300' : 'text-cyan-300'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-blue-800/50 rounded-xl">
                  <h4 className="font-bold text-lg mb-3">Need Immediate Help?</h4>
                  <p className="text-blue-200 text-sm mb-6">
                    Just make an appointment to get help from our experts within the hour.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    Contact Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ENHANCED MAP ================= */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Our <span className="text-blue-700">Location</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our manufacturing unit and experience our quality firsthand
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              title="Mozaic Laminates Location"
              className="w-full h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.257828661095!2d77.49579931507826!3d28.45381298249991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea2b6c5bffff%3A0x5b8466aa81ea45a1!2sEcotech%201%20Extension%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201308!5e0!3m2!1sen!2sin!4v1640777542457!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM CTA BAR ================= */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-400/10 to-cyan-400/10 rounded-full translate-x-48 translate-y-48"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                YOUR INTERIORS DESERVE THE <span className="text-cyan-300">FINEST QUALITY</span>
              </h2>
              <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
                Transform your space with premium PVC laminates that combine beauty, durability, and innovation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 transition-all"
              >
                Start Your Project Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SUBSCRIBE SECTION ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full text-sm font-semibold tracking-wider border border-blue-100 mb-6">
              STAY UPDATED
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unlimited Support & Easily Customizable
            </h3>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Subscribe to get exclusive updates, design tips, and special offers
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-600 transition-all"
              >
                Subscribe Now
              </motion.button>
            </form>
            
            <p className="text-gray-500 text-sm mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;