import React, { useState } from 'react';

const Visualizer = () => {
  const [selectedRoom, setSelectedRoom] = useState('living-room');
  const [selectedLaminate, setSelectedLaminate] = useState('wood-classic');
  const [selectedColor, setSelectedColor] = useState('#2C3E50');
  const [selectedWall, setSelectedWall] = useState('#FFFFFF');
  const [showGrid, setShowGrid] = useState(true);
  const [viewMode, setViewMode] = useState('3d');
  const [selectedFurniture, setSelectedFurniture] = useState([]);

  const rooms = [
    { id: 'living-room', name: 'Living Room', icon: '🛋️', color: 'bg-gradient-to-br from-blue-500 to-blue-700' },
    { id: 'bedroom', name: 'Bedroom', icon: '🛏️', color: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
    { id: 'kitchen', name: 'Kitchen', icon: '🍽️', color: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
    { id: 'office', name: 'Office', icon: '💼', color: 'bg-gradient-to-br from-amber-500 to-orange-600' },
    { id: 'bathroom', name: 'Bathroom', icon: '🚿', color: 'bg-gradient-to-br from-cyan-500 to-blue-600' }
  ];

  const laminates = [
    { id: 'wood-classic', name: 'Classic Wood', color: '#8B4513', category: 'Wood' },
    { id: 'wood-modern', name: 'Modern Wood', color: '#D2691E', category: 'Wood' },
    { id: 'marble-white', name: 'White Marble', color: '#F5F5F5', category: 'Stone' },
    { id: 'marble-gray', name: 'Gray Marble', color: '#808080', category: 'Stone' },
    { id: 'solid-blue', name: 'Ocean Blue', color: '#1E90FF', category: 'Solid' },
    { id: 'solid-gray', name: 'Modern Gray', color: '#708090', category: 'Solid' },
    { id: 'pattern-geo', name: 'Geometric', color: '#2C3E50', category: 'Pattern' },
    { id: 'pattern-abstract', name: 'Abstract', color: '#6A5ACD', category: 'Pattern' }
  ];

  const wallColors = [
    { name: 'Pure White', value: '#FFFFFF', popular: true },
    { name: 'Sky Blue', value: '#87CEEB' },
    { name: 'Light Gray', value: '#D3D3D3', popular: true },
    { name: 'Cream', value: '#FFFDD0' },
    { name: 'Mint Green', value: '#98FB98' },
    { name: 'Soft Pink', value: '#FFB6C1' }
  ];

  const furnitureItems = [
    { id: 'sofa', name: 'Sofa', icon: '🛋️' },
    { id: 'table', name: 'Table', icon: '🪑' },
    { id: 'cabinet', name: 'Cabinet', icon: '🗄️' },
    { id: 'shelf', name: 'Shelf', icon: '📚' },
    { id: 'lamp', name: 'Lamp', icon: '💡' },
    { id: 'plant', name: 'Plant', icon: '🌿' },
    { id: 'rug', name: 'Rug', icon: '🧶' },
    { id: 'art', name: 'Art', icon: '🖼️' }
  ];

  const handleFurnitureClick = (itemId) => {
    setSelectedFurniture(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg"></div>
              <h1 className="text-xl font-bold text-gray-900">Design Visualizer</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Auto-save: </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">On</span>
              </div>
              
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Save Design
              </button>
              
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Panel - Controls */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Room Selection */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Room Type</h2>
                <p className="text-sm text-gray-500 mt-1">Select the space you want to design</p>
              </div>
              
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3">
                  {rooms.map(room => (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room.id)}
                      className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 ${
                        selectedRoom === room.id 
                          ? 'ring-2 ring-blue-500 ring-offset-2' 
                          : 'hover:ring-1 hover:ring-gray-300'
                      }`}
                    >
                      <div className={`absolute inset-0 ${room.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                      <div className="relative z-10">
                        <div className="text-2xl mb-2">{room.icon}</div>
                        <div className="text-sm font-medium text-gray-900">{room.name}</div>
                      </div>
                      {selectedRoom === room.id && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Laminate Selection */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Laminate Selection</h2>
                <p className="text-sm text-gray-500 mt-1">Choose your preferred finish</p>
              </div>
              
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['All', 'Wood', 'Stone', 'Solid', 'Pattern'].map(category => (
                    <button
                      key={category}
                      className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="space-y-3">
                  {laminates.map(laminate => (
                    <button
                      key={laminate.id}
                      onClick={() => {
                        setSelectedLaminate(laminate.id);
                        setSelectedColor(laminate.color);
                      }}
                      className={`w-full flex items-center p-3 rounded-xl border transition-all duration-300 ${
                        selectedLaminate === laminate.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div 
                        className="w-10 h-10 rounded-lg mr-4 border border-gray-200"
                        style={{ backgroundColor: laminate.color }}
                      ></div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-gray-900">{laminate.name}</div>
                        <div className="text-xs text-gray-500">{laminate.category}</div>
                      </div>
                      {selectedLaminate === laminate.id && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Color Customization */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Color & Walls</h2>
                <p className="text-sm text-gray-500 mt-1">Customize your space colors</p>
              </div>
              
              <div className="p-5 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-700">Laminate Color</label>
                    <div className="text-xs text-gray-500">Custom</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg border border-gray-300"
                      style={{ backgroundColor: selectedColor }}
                    ></div>
                    <input
                      type="color"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-full h-12 cursor-pointer rounded-lg border border-gray-300"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-700">Wall Color</label>
                    <div className="text-xs text-gray-500">Popular colors</div>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {wallColors.map(color => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedWall(color.value)}
                        className={`relative aspect-square rounded-lg border-2 transition-all ${
                          selectedWall === color.value 
                            ? 'border-blue-500' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      >
                        {color.popular && (
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Visualization Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Visualization Toolbar */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-gray-50 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('3d')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        viewMode === '3d' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      3D View
                    </button>
                    <button
                      onClick={() => setViewMode('2d')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        viewMode === '2d' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      2D Plan
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowGrid(!showGrid)}
                      className={`px-3 py-1.5 rounded-lg text-sm flex items-center space-x-2 ${
                        showGrid 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>Grid</span>
                      <span className={`w-2 h-2 rounded-full ${showGrid ? 'bg-blue-500' : 'bg-gray-400'}`}></span>
                    </button>
                    
                    <button className="px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                      Measurements
                    </button>
                    
                    <button className="px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                      Lighting
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    Undo
                  </button>
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    Redo
                  </button>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    Clear All
                  </button>
                </div>
              </div>
            </div>

            {/* Visualization Canvas */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 overflow-hidden">
              <div className="h-[500px] relative">
                
                {/* Grid Overlay */}
                {showGrid && (
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                                    linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }} />
                )}
                
                {/* Room Visualization */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* Room Container */}
                    <div className="absolute inset-0 rounded-2xl" style={{ 
                      backgroundColor: selectedWall,
                      boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                    }}>
                      
                      {/* Floor */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-48 rounded-b-2xl"
                        style={{ 
                          backgroundColor: selectedColor,
                          backgroundImage: `
                            linear-gradient(45deg, transparent 65%, rgba(255,255,255,0.2) 75%, transparent 85%),
                            linear-gradient(-45deg, transparent 65%, rgba(255,255,255,0.2) 75%, transparent 85%)
                          `,
                          backgroundSize: '40px 40px'
                        }}
                      />
                      
                      {/* Window */}
                      <div className="absolute top-8 right-8 w-24 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg border-2 border-blue-200">
                        <div className="grid grid-cols-2 gap-1 p-2">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="aspect-square bg-blue-200/50 rounded"></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Furniture based on selection */}
                      {selectedFurniture.includes('sofa') && (
                        <div className="absolute bottom-12 left-12 w-24 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg transform -rotate-6"></div>
                      )}
                      
                      {selectedFurniture.includes('table') && (
                        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-amber-700 to-amber-900 rounded-full"></div>
                      )}
                      
                      {selectedFurniture.includes('lamp') && (
                        <div className="absolute top-24 left-16 w-4 h-20 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full">
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-200 rounded-full"></div>
                        </div>
                      )}
                      
                      {selectedFurniture.includes('plant') && (
                        <div className="absolute bottom-32 right-16 w-6 h-16 bg-gradient-to-b from-emerald-600 to-emerald-800 rounded-full">
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-emerald-500 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    
                    {/* 3D Perspective Lines */}
                    {viewMode === '3d' && (
                      <>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
                      </>
                    )}
                    
                    {/* Measurement Labels */}
                    {viewMode === '2d' && (
                      <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                        <div className="flex items-center">
                          <div className="w-8 h-0.5 bg-blue-500"></div>
                          <span className="ml-2 text-sm font-medium text-blue-700">5m</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* View Controls */}
                {viewMode === '3d' && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-2 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg">
                      {['↖️', '⬆️', '↗️', '⬅️', '⏺️', '➡️', '↙️', '⬇️', '↘️'].map((icon, idx) => (
                        <button
                          key={idx}
                          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
                        >
                          {icon}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Room Info Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {rooms.find(r => r.id === selectedRoom)?.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {laminates.find(l => l.id === selectedLaminate)?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visualization Footer */}
              <div className="border-t border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedColor }}></div>
                      <span className="text-sm text-gray-600">Floor: {laminates.find(l => l.id === selectedLaminate)?.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedWall }}></div>
                      <span className="text-sm text-gray-600">Walls: {wallColors.find(w => w.value === selectedWall)?.name}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    Scale: 1:50 • View: {viewMode.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>

            {/* Furniture & Accessories */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Furniture & Accessories</h2>
                <p className="text-sm text-gray-500 mt-1">Add elements to your design</p>
              </div>
              
              <div className="p-5">
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                  {furnitureItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleFurnitureClick(item.id)}
                      className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-300 ${
                        selectedFurniture.includes(item.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-2xl mb-2">{item.icon}</span>
                      <span className="text-xs font-medium text-gray-700">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div>
              <h3 className="font-semibold text-gray-900">Current Design</h3>
              <p className="text-sm text-gray-500">Your design is auto-saved</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Reset Design
              </button>
              
              <button className="px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-colors">
                Share Design
              </button>
              
              <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-sm hover:shadow">
                Get Quote
              </button>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-blue-700 font-medium mb-2">Design Summary</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Room:</span>
                    <span className="font-medium">{rooms.find(r => r.id === selectedRoom)?.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Laminate:</span>
                    <span className="font-medium">{laminates.find(l => l.id === selectedLaminate)?.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Furniture:</span>
                    <span className="font-medium">{selectedFurniture.length} items</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-emerald-50 rounded-lg">
                <div className="text-sm text-emerald-700 font-medium mb-2">Design Tips</div>
                <ul className="space-y-1 text-sm text-emerald-600">
                  <li>• Use contrasting colors for depth</li>
                  <li>• Consider natural light sources</li>
                  <li>• Balance furniture placement</li>
                </ul>
              </div>
              
              <div className="p-4 bg-amber-50 rounded-lg">
                <div className="text-sm text-amber-700 font-medium mb-2">Need Help?</div>
                <p className="text-sm text-amber-600 mb-3">Our design experts are available</p>
                <button className="w-full px-4 py-2 bg-amber-100 text-amber-700 rounded-lg text-sm font-medium hover:bg-amber-200 transition-colors">
                  Chat with Designer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Designs Preview */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Designs</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Modern Living', room: 'Living Room', color: 'bg-gradient-to-r from-blue-400 to-cyan-400' },
              { name: 'Serene Bedroom', room: 'Bedroom', color: 'bg-gradient-to-r from-purple-400 to-pink-400' },
              { name: 'Contemporary Kitchen', room: 'Kitchen', color: 'bg-gradient-to-r from-emerald-400 to-teal-400' },
              { name: 'Minimal Office', room: 'Office', color: 'bg-gradient-to-r from-amber-400 to-orange-400' }
            ].map((design, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`${design.color} rounded-xl aspect-video flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-4xl opacity-80">🏠</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="font-semibold">{design.name}</div>
                    <div className="text-sm opacity-90">{design.room}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-4">
              <span className="text-white text-xl">🎨</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Start Designing Your Dream Space</h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visualize how Mozaic laminates transform your space. All designs are saved to your account.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Start New Design
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Tutorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;