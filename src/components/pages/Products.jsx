import React, { useState } from 'react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilter, setShowFilter] = useState(false);

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
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Laminates</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Discover our extensive collection of high-quality PVC laminates. Transform your spaces with elegance and durability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all">
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
            <h2 className="text-3xl font-bold text-gray-900">Our Collection</h2>
            <p className="text-gray-600 mt-2">Premium PVC laminates for every interior need</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button 
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span className="mr-2">⚙️</span>
              Filters
            </button>
            
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
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
              <h3 className="text-lg font-bold text-gray-900 mb-6">Categories</h3>
              
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-sm ${
                      selectedCategory === category.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Filter by</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Price Range</label>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
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
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-2 text-sm text-gray-700">{thickness}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Finish</label>
                    <div className="flex flex-wrap gap-2">
                      {['Matte', 'Glossy', 'Satin', 'Semi-Gloss'].map(finish => (
                        <span key={finish} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">
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
                <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Products</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredProducts.filter(p => p.featured).map(product => (
                    <div 
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20"></div>
                      <div className="relative p-8">
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="md:w-1/3 mb-6 md:mb-0">
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                              <span className="text-5xl">✨</span>
                            </div>
                          </div>
                          <div className="md:w-2/3 md:pl-8">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs font-bold">
                                FEATURED
                              </span>
                              {product.popular && (
                                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs font-bold">
                                  POPULAR
                                </span>
                              )}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                            <p className="text-gray-300 mb-4">{product.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="text-2xl font-bold text-white">{product.price}</div>
                              <button className="px-6 py-2.5 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
                <h3 className="text-xl font-bold text-gray-900">
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
                      className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      {/* Product Image */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
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
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs font-bold">
                              POPULAR
                            </span>
                          )}
                          {product.discount && (
                            <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs font-bold">
                              SALE
                            </span>
                          )}
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
                            ❤️
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-blue-600 font-medium">
                              {categories.find(c => c.id === product.category)?.name}
                            </span>
                            <div className="flex items-center">
                              <span className="text-amber-500">⭐</span>
                              <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
                              <span className="mx-1 text-gray-300">•</span>
                              <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                        </div>

                        {/* Price & Specifications */}
                        <div className="mb-6">
                          <div className="flex items-center mb-3">
                            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                            {product.discount && (
                              <>
                                <span className="ml-2 text-sm text-gray-500 line-through">{product.discount}</span>
                                <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 rounded text-xs font-bold">
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
                        <button className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:shadow-lg transition-all group-hover:from-blue-600 group-hover:to-cyan-500">
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
                      className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-1/4">
                          <div className="h-48 md:h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
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
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                  {categories.find(c => c.id === product.category)?.name}
                                </span>
                                {product.popular && (
                                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                              <p className="text-gray-600 mb-4">{product.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gray-900 mb-2">{product.price}</div>
                              <div className="flex items-center justify-end mb-2">
                                <span className="text-amber-500">⭐</span>
                                <span className="ml-1 font-medium">{product.rating}</span>
                                <span className="ml-2 text-gray-500">({product.reviews})</span>
                              </div>
                              <div className="text-sm text-green-600 font-medium">✓ In Stock</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                              <div className="text-sm text-gray-500 mb-1">Thickness</div>
                              <div className="font-semibold">{product.thickness.join(', ')}</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                              <div className="text-sm text-gray-500 mb-1">Size</div>
                              <div className="font-semibold">{product.size}</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                              <div className="text-sm text-gray-500 mb-1">Finish</div>
                              <div className="font-semibold">{product.finish}</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                              <div className="text-sm text-gray-500 mb-1">Colors</div>
                              <div className="flex justify-center">
                                {product.colors.map((color, idx) => (
                                  <div
                                    key={idx}
                                    className="w-4 h-4 rounded-full border border-gray-300 -ml-1 first:ml-0"
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                              </div>
                            </div>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No products found</h3>
            <p className="text-gray-600 mb-8">Try selecting a different category or adjusting your filters</p>
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setShowFilter(false);
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-xl"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeProductDetails}
          />
          
          {/* Modal */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                    <p className="text-blue-600">
                      {categories.find(c => c.id === selectedProduct.category)?.name}
                    </p>
                  </div>
                  <button
                    onClick={closeProductDetails}
                    className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-2xl">✕</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                <div className="p-6">
                  {/* Hero Section */}
                  <div className="flex flex-col lg:flex-row gap-8 mb-8">
                    <div className="lg:w-2/5">
                      <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                        <div className="text-8xl">
                          {selectedProduct.category === 'wood-finish' && '🌳'}
                          {selectedProduct.category === 'stone-finish' && '🗿'}
                          {selectedProduct.category === 'solid-colors' && '🎨'}
                          {selectedProduct.category === 'patterns' && '🔷'}
                          {selectedProduct.category === 'metallic' && '✨'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-3/5">
                      <div className="flex items-center gap-3 mb-4">
                        {selectedProduct.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          <div className="text-3xl font-bold text-gray-900">{selectedProduct.price}</div>
                          {selectedProduct.discount && (
                            <div className="ml-4">
                              <div className="text-lg text-gray-500 line-through">{selectedProduct.discount}</div>
                              <div className="text-sm text-red-600 font-medium">Special Offer</div>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                          <div className="flex items-center">
                            <span className="text-amber-500 mr-1">⭐</span>
                            <span className="font-medium">{selectedProduct.rating}</span>
                            <span className="mx-1">•</span>
                            <span>{selectedProduct.reviews} reviews</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {selectedProduct.stock}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <button className="py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg">
                          Request Sample
                        </button>
                        <button className="py-3.5 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50">
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="mb-8">
                    <div className="border-b border-gray-200">
                      <div className="flex space-x-8">
                        {['Description', 'Specifications', 'Applications', 'Colors'].map(tab => (
                          <button key={tab} className="pb-4 font-semibold text-gray-900 border-b-2 border-transparent hover:text-blue-600">
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed">{selectedProduct.longDescription}</p>
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Product Specifications</h3>
                      <div className="space-y-3">
                        {[
                          { label: 'Thickness', value: selectedProduct.thickness.join(', ') },
                          { label: 'Standard Size', value: selectedProduct.size },
                          { label: 'Finish Type', value: selectedProduct.finish },
                          { label: 'Edge Type', value: 'Square Edge' },
                          { label: 'Packaging', value: 'Carton Box' },
                          { label: 'Minimum Order', value: '10 Sheets' }
                        ].map((spec, idx) => (
                          <div key={idx} className="flex justify-between py-3 border-b border-gray-100">
                            <span className="text-gray-600">{spec.label}</span>
                            <span className="font-semibold">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          'Water Resistant',
                          'Scratch Proof',
                          'Stain Resistant',
                          'Easy to Clean',
                          'Fire Retardant',
                          'Eco Friendly',
                          'UV Resistant',
                          'Termite Proof'
                        ].map((feature, idx) => (
                          <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-xl">
                            <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                              ✓
                            </div>
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Color Options */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Available Colors</h3>
                    <div className="flex flex-wrap gap-4">
                      {selectedProduct.colors.map((color, idx) => (
                        <div key={idx} className="text-center">
                          <div 
                            className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg mb-2"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-sm text-gray-600">Color {idx + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Applications</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedProduct.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                            ✓
                          </div>
                          <span className="font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final CTA */}
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Space?</h3>
                    <p className="text-gray-300 mb-6">Get professional consultation and samples for your project</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100">
                        Download Full Catalog
                      </button>
                      <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold hover:shadow-lg">
                        Contact Sales Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Mozaic?</h2>
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help Choosing?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Our laminate experts are ready to help you select the perfect product for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100">
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