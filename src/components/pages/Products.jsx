import React, { useState } from 'react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilter, setShowFilter] = useState(false);

  // Brand colors from image
  const colors = {
    primary: "#0B1A41",    // Dark Blue
    secondary: "#8B1E3F",  // Burgundy/Red
    accent: "#FFD700",     // Gold/Yellow
    lightBg: "#F8FAFC",    // Light background
    grayBg: "#F1F5F9",     // Gray background
    textDark: "#1E293B",   // Dark text
    textLight: "#64748B",  // Light text
  };

  const categories = [
    { id: 'all', name: 'All Products', count: 8, icon: '📦' },
    { id: 'wood-finish', name: 'Wood Finish', count: 2, icon: '🌳' },
    { id: 'stone-finish', name: 'Stone Finish', count: 2, icon: '🗿' },
    { id: 'solid-colors', name: 'Solid Colors', count: 2, icon: '🎨' },
    { id: 'patterns', name: 'Patterns', count: 1, icon: '🔷' },
    { id: 'metallic', name: 'Metallic', count: 1, icon: '✨' }
  ];

  const products = [
    {
      id: 1,
      name: "Classic Oak Wood",
      category: "wood-finish",
      description: "Premium oak wood finish with realistic grain texture",
      longDescription: "Experience the timeless elegance of oak wood with our Classic Oak laminate. Featuring authentic wood grain texture and warm tones, perfect for traditional and modern interiors alike.",
      image: "/images/products/classic-oak.jpg",
      price: "₹ 120/sq. ft.",
      discount: "₹ 140/sq. ft.",
      thickness: ["1.25mm", "3.25mm"],
      size: "1220 x 2440 mm",
      finish: "Matte",
      applications: ["Walls", "Furniture", "Doors", "Ceilings"],
      colors: ["#8B4513", "#D2691E", "#A0522D"],
      stock: "In Stock",
      popular: true,
      featured: true,
      tags: ["Best Seller", "Eco-Friendly"],
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "White Marble",
      category: "stone-finish",
      description: "Luxurious white marble effect with subtle veining",
      longDescription: "Bring the sophistication of Italian marble to your space. Our White Marble laminate features delicate veining and a polished finish that mimics real marble without the maintenance.",
      image: "/images/products/white-marble.jpg",
      price: "₹ 135/sq. ft.",
      thickness: ["1.25mm", "3.25mm"],
      size: "1220 x 2440 mm",
      finish: "Glossy",
      applications: ["Kitchen Countertops", "Bathroom Walls", "Flooring"],
      colors: ["#FFFFFF", "#F5F5F5", "#E8E8E8"],
      stock: "In Stock",
      popular: true,
      featured: true,
      tags: ["Luxury", "Water Resistant"],
      rating: 4.9,
      reviews: 98
    },
    {
      id: 3,
      name: "Ocean Blue",
      category: "solid-colors",
      description: "Vibrant solid blue color for modern interiors",
      longDescription: "Add a splash of color to your space with Ocean Blue. This vibrant solid color laminate is perfect for accent walls, modern furniture, and contemporary design elements.",
      image: "/images/products/ocean-blue.jpg",
      price: "₹ 110/sq. ft.",
      discount: "₹ 125/sq. ft.",
      thickness: ["1.25mm", "3.25mm"],
      size: "1220 x 2440 mm",
      finish: "Matte",
      applications: ["Accent Walls", "Modern Furniture", "Commercial Spaces"],
      colors: ["#1E90FF", "#4169E1"],
      stock: "In Stock",
      popular: false,
      featured: false,
      tags: ["Modern", "Scratch Resistant"],
      rating: 4.5,
      reviews: 67
    },
    {
      id: 4,
      name: "Geometric Pattern",
      category: "patterns",
      description: "Modern geometric pattern for contemporary spaces",
      longDescription: "Transform your space with our Geometric Pattern laminate. Featuring clean lines and modern design, perfect for creating focal points in contemporary interiors.",
      image: "/images/products/geometric-pattern.jpg",
      price: "₹ 125/sq. ft.",
      thickness: ["1.25mm"],
      size: "1220 x 2440 mm",
      finish: "Matte",
      applications: ["Feature Walls", "Office Partitions", "Retail Spaces"],
      colors: ["#2C3E50", "#34495E", "#7F8C8D"],
      stock: "Limited Stock",
      popular: true,
      featured: false,
      tags: ["Trending", "Designer Choice"],
      rating: 4.7,
      reviews: 89
    },
    {
      id: 5,
      name: "Brushed Metal",
      category: "metallic",
      description: "Industrial brushed metal finish",
      longDescription: "Achieve an industrial chic look with our Brushed Metal laminate. The metallic finish adds depth and texture, perfect for modern kitchens and commercial spaces.",
      image: "/images/products/brushed-metal.jpg",
      price: "₹ 140/sq. ft.",
      thickness: ["1.25mm"],
      size: "1220 x 2440 mm",
      finish: "Satin",
      applications: ["Kitchen Cabinets", "Elevator Interiors", "Retail Displays"],
      colors: ["#808080", "#696969", "#A9A9A9"],
      stock: "In Stock",
      popular: false,
      featured: false,
      tags: ["Industrial", "Durable"],
      rating: 4.6,
      reviews: 42
    },
    {
      id: 6,
      name: "Walnut Wood",
      category: "wood-finish",
      description: "Rich walnut wood finish with deep tones",
      longDescription: "The rich, dark tones of walnut wood bring warmth and sophistication to any space. Our Walnut Wood laminate features authentic grain patterns and a smooth finish.",
      image: "/images/products/walnut-wood.jpg",
      price: "₹ 130/sq. ft.",
      discount: "₹ 145/sq. ft.",
      thickness: ["1.25mm", "3.25mm"],
      size: "1220 x 2440 mm",
      finish: "Semi-Gloss",
      applications: ["Walls", "Furniture", "Doors"],
      colors: ["#654321", "#8B4513"],
      stock: "In Stock",
      popular: true,
      featured: true,
      tags: ["Premium", "Wood Look"],
      rating: 4.8,
      reviews: 156
    },
    {
      id: 7,
      name: "Black Galaxy",
      category: "stone-finish",
      description: "Premium black granite effect with sparkling flecks",
      longDescription: "Experience luxury with Black Galaxy laminate. Featuring sparkling mineral flecks on a deep black background, this laminate adds drama and elegance to any space.",
      image: "/images/products/black-galaxy.jpg",
      price: "₹ 150/sq. ft.",
      thickness: ["1.25mm"],
      size: "1220 x 2440 mm",
      finish: "Glossy",
      applications: ["Luxury Interiors", "Hotel Lobbies", "Premium Retail"],
      colors: ["#000000", "#2F4F4F"],
      stock: "In Stock",
      popular: true,
      featured: false,
      tags: ["Luxury", "Premium"],
      rating: 4.9,
      reviews: 103
    },
    {
      id: 8,
      name: "Mint Green",
      category: "solid-colors",
      description: "Soft mint green for calming interiors",
      longDescription: "Create a calming and refreshing atmosphere with Mint Green laminate. The soft pastel shade is perfect for bedrooms, nurseries, and wellness spaces.",
      image: "/images/products/mint-green.jpg",
      price: "₹ 115/sq. ft.",
      thickness: ["1.25mm"],
      size: "1220 x 2440 mm",
      finish: "Matte",
      applications: ["Bedrooms", "Healthcare", "Wellness Centers"],
      colors: ["#98FB98", "#90EE90"],
      stock: "In Stock",
      popular: false,
      featured: false,
      tags: ["Calming", "Eco-Friendly"],
      rating: 4.4,
      reviews: 58
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.secondary} 0%, #1A2D5F 100%)` }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl" style={{ backgroundColor: colors.secondary }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl" style={{ backgroundColor: colors.accent }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Premium <span style={{ color: colors.accent }}>Laminates</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Discover our extensive collection of high-quality PVC laminates. Transform your spaces with elegance and durability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all bg-red-600"
                style={{ backgroundColor: colors.secondary }}
                
              
              >
                Request Catalog
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: colors.primary }}>Our Collection</h2>
            <p className="text-gray-600 mt-2">Premium PVC laminates for every interior need</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button 
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              style={{ backgroundColor: colors.lightBg, color: colors.primary }}
            >
              <span className="mr-2">⚙️</span>
              Filters
            </button>
            
            <div className="flex rounded-lg p-1" style={{ backgroundColor: colors.lightBg }}>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                style={viewMode === 'grid' ? { color: colors.secondary } : {}}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                style={viewMode === 'list' ? { color: colors.secondary } : {}}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 ${showFilter ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-6" style={{ color: colors.primary }}>Categories</h3>
              
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                      selectedCategory === category.id
                        ? 'border text-white'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                    style={selectedCategory === category.id ? 
                      { 
                        backgroundColor: colors.secondary,
                        borderColor: colors.secondary
                      } : {}
                    }
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-sm ${
                      selectedCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-semibold mb-4" style={{ color: colors.primary }}>Filter by</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Price Range</label>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-3/4 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>₹100</span>
                      <span>₹150</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Thickness</label>
                    <div className="space-y-2">
                      {['1.25mm', '3.25mm', 'Both'].map(thickness => (
                        <label key={thickness} className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 focus:ring-2" 
                            style={{ '--tw-ring-color': colors.secondary }}
                          />
                          <span className="ml-2 text-sm text-gray-700">{thickness}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Finish</label>
                    <div className="flex flex-wrap gap-2">
                      {['Matte', 'Glossy', 'Satin', 'Semi-Gloss'].map(finish => (
                        <span 
                          key={finish} 
                          className="px-3 py-1.5 rounded-lg text-sm cursor-pointer hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: colors.lightBg, color: colors.primary }}
                        >
                          {finish}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Featured Products */}
            {filteredProducts.filter(p => p.featured).length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6" style={{ color: colors.primary }}>Featured Products</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredProducts.filter(p => p.featured).map(product => (
                    <div 
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, #1A2D5F 100%)` }}
                    >
                      <div className="absolute inset-0 opacity-20" style={{ backgroundColor: colors.accent }}></div>
                      <div className="relative p-8">
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="md:w-1/3 mb-6 md:mb-0">
                            <div className="w-32 h-32 rounded-2xl flex items-center justify-center"
                              style={{ backgroundColor: colors.accent + '30' }}
                            >
                              <span className="text-5xl">{product.category === 'wood-finish' ? '🌳' : 
                                                       product.category === 'stone-finish' ? '🗿' : 
                                                       product.category === 'solid-colors' ? '🎨' : 
                                                       product.category === 'patterns' ? '🔷' : '✨'}</span>
                            </div>
                          </div>
                          <div className="md:w-2/3 md:pl-8">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 text-white rounded-full text-xs font-bold"
                                style={{ backgroundColor: colors.accent }}
                              >
                                FEATURED
                              </span>
                              {product.popular && (
                                <span className="px-3 py-1 text-white rounded-full text-xs font-bold"
                                  style={{ backgroundColor: colors.secondary }}
                                >
                                  POPULAR
                                </span>
                              )}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                            <p className="text-gray-300 mb-4">{product.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="text-2xl font-bold text-white">{product.price}</div>
                              <button className="px-6 py-2.5 text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                style={{ backgroundColor: colors.accent }}
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Products */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold" style={{ color: colors.primary }}>
                  All Products <span className="text-gray-400">({filteredProducts.length})</span>
                </h3>
                <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <div 
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="group bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                      style={{ 
                        borderColor: selectedCategory === product.category ? colors.secondary + '40' : '#E5E7EB',
                        borderWidth: selectedCategory === product.category ? '2px' : '1px'
                      }}
                    >
                      {/* Product Image */}
                      <div className="relative h-48 overflow-hidden" style={{ backgroundColor: colors.lightBg }}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl opacity-80">
                            {product.category === 'wood-finish' && '🌳'}
                            {product.category === 'stone-finish' && '🗿'}
                            {product.category === 'solid-colors' && '🎨'}
                            {product.category === 'patterns' && '🔷'}
                            {product.category === 'metallic' && '✨'}
                          </div>
                        </div>
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {product.popular && (
                            <span className="px-3 py-1 text-white rounded-full text-xs font-bold"
                              style={{ backgroundColor: colors.secondary }}
                            >
                              POPULAR
                            </span>
                          )}
                          {product.discount && (
                            <span className="px-3 py-1 text-white rounded-full text-xs font-bold"
                              style={{ backgroundColor: '#DC2626' }}
                            >
                              SALE
                            </span>
                          )}
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
                            style={{ color: colors.secondary }}
                          >
                            ❤️
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium"
                              style={{ color: colors.secondary }}
                            >
                              {categories.find(c => c.id === product.category)?.name}
                            </span>
                            <div className="flex items-center">
                              <span style={{ color: colors.accent }}>⭐</span>
                              <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
                              <span className="mx-1 text-gray-300">•</span>
                              <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold mb-2" style={{ color: colors.primary }}>{product.name}</h3>
                          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                        </div>

                        {/* Price & Specifications */}
                        <div className="mb-6">
                          <div className="flex items-center mb-3">
                            <span className="text-2xl font-bold" style={{ color: colors.primary }}>{product.price}</span>
                            {product.discount && (
                              <>
                                <span className="ml-2 text-sm text-gray-500 line-through">{product.discount}</span>
                                <span className="ml-2 px-2 py-1 rounded text-xs font-bold"
                                  style={{ backgroundColor: colors.secondary + '20', color: colors.secondary }}
                                >
                                  SAVE 14%
                                </span>
                              </>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{product.thickness[0]}</span>
                            <span>•</span>
                            <span>{product.finish}</span>
                            <span>•</span>
                            <span>{product.colors.length} colors</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <button className="w-full py-3 text-white rounded-xl font-semibold hover:shadow-lg transition-all group-hover:scale-[1.02]"
                          style={{ backgroundColor: colors.primary }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = colors.secondary}
                          onMouseLeave={(e) => e.target.style.backgroundColor = colors.primary}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // List View
                <div className="space-y-4">
                  {filteredProducts.map(product => (
                    <div 
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="group bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                      style={{ 
                        borderColor: selectedCategory === product.category ? colors.secondary + '40' : '#E5E7EB',
                        borderWidth: selectedCategory === product.category ? '2px' : '1px'
                      }}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-1/4">
                          <div className="h-48 md:h-full flex items-center justify-center"
                            style={{ backgroundColor: colors.lightBg }}
                          >
                            <div className="text-5xl">
                              {product.category === 'wood-finish' && '🌳'}
                              {product.category === 'stone-finish' && '🗿'}
                              {product.category === 'solid-colors' && '🎨'}
                              {product.category === 'patterns' && '🔷'}
                              {product.category === 'metallic' && '✨'}
                            </div>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="md:w-3/4 p-6">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div className="mb-4 md:mb-0">
                              <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 rounded-full text-sm font-medium"
                                  style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                                >
                                  {categories.find(c => c.id === product.category)?.name}
                                </span>
                                {product.popular && (
                                  <span className="px-3 py-1 rounded-full text-sm font-medium"
                                    style={{ backgroundColor: colors.secondary + '15', color: colors.secondary }}
                                  >
                                    Popular
                                  </span>
                                )}
                              </div>
                              <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary }}>{product.name}</h3>
                              <p className="text-gray-600 mb-4">{product.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>{product.price}</div>
                              <div className="flex items-center justify-end mb-2">
                                <span style={{ color: colors.accent }}>⭐</span>
                                <span className="ml-1 font-medium">{product.rating}</span>
                                <span className="ml-2 text-gray-500">({product.reviews})</span>
                              </div>
                              <div className="text-sm font-medium" style={{ color: '#059669' }}>✓ In Stock</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            {[
                              { label: 'Thickness', value: product.thickness.join(', ') },
                              { label: 'Size', value: product.size },
                              { label: 'Finish', value: product.finish },
                              { label: 'Colors', value: '' }
                            ].map((spec, idx) => (
                              <div key={idx} className="text-center p-3 rounded-xl"
                                style={{ backgroundColor: colors.lightBg }}
                              >
                                <div className="text-sm mb-1" style={{ color: colors.primary }}>{spec.label}</div>
                                {spec.label === 'Colors' ? (
                                  <div className="flex justify-center">
                                    {product.colors.map((color, idx) => (
                                      <div
                                        key={idx}
                                        className="w-4 h-4 rounded-full border border-gray-300 -ml-1 first:ml-0"
                                        style={{ backgroundColor: color }}
                                      />
                                    ))}
                                  </div>
                                ) : (
                                  <div className="font-semibold" style={{ color: colors.primary }}>{spec.value}</div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: colors.primary }}>No products found</h3>
            <p className="text-gray-600 mb-8">Try selecting a different category or adjusting your filters</p>
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setShowFilter(false);
              }}
              className="px-8 py-4 text-white rounded-xl font-bold text-lg hover:shadow-xl"
              style={{ backgroundColor: colors.secondary }}
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="py-20" style={{ backgroundColor: colors.lightBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>Why Choose Mozaic?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the perfect blend of quality, innovation, and design excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🏭', title: 'Modern Manufacturing', desc: 'European technology with ISO certification' },
              { icon: '🛡️', title: '30+ Years Expertise', desc: 'Decades of experience in premium laminates' },
              { icon: '🎨', title: '50+ Designs', desc: 'Wide variety of patterns and finishes' },
              { icon: '🚚', title: 'Nationwide Delivery', desc: 'Fast and reliable delivery across India' }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: colors.primary + '10' }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: colors.primary }}>{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help Choosing?</h2>
            <p className="text-white/80 text-lg mb-8">
              Our laminate experts are ready to help you select the perfect product for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white rounded-xl font-bold hover:bg-gray-100 transition-colors"
                style={{ color: colors.secondary }}
              >
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10">
                Call: +91 8010 800 400
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;