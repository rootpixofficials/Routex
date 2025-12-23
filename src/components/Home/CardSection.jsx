import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
,
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "🏭",
      title: "Modern Manufacturing",
      description: "European technology equipped facility ensuring precision and quality"
    },
    {
      icon: "🛡️",
      title: "Durability",
      description: "High dimensional stability and long-lasting performance"
    },
    {
      icon: "🎨",
      title: "Design Variety",
      description: "Wide range of trendy and chic designs to choose from"
    },
    {
      icon: "📦",
      title: "Quick Delivery",
      description: "Fast and reliable delivery across India"
    }
  ];

  const products = [
    {
      name: "Classic Wood",
      category: "Wood Finish",
      color: "bg-amber-100"
    },
    {
      name: "Marble Effect",
      category: "Stone Finish",
      color: "bg-gray-100"
    },
    {
      name: "Solid Colors",
      category: "Modern Series",
      color: "bg-blue-100"
    },
    {
      name: "Metallic",
      category: "Premium Series",
      color: "bg-slate-100"
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={images[currentIndex]}
            alt="Mozaic Laminates"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="mb-8">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium mb-4">
                  PREMIUM PVC LAMINATES
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Crafting Beautiful Spaces with <span className="text-blue-300">Premium Quality</span>
                </h1>
                <p className="text-lg text-gray-200 mb-10 max-w-xl">
                  Transform your interiors with our high-quality PVC laminates. 30+ years of excellence in manufacturing durable and elegant surfaces.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl">
                  Explore Products
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/30 transition-all">
                  Request Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;