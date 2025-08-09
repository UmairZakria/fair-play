// File: src/components/RouletteWheel.jsx
import React from 'react';

const RouletteWheel = () => {
  // Define the numbers and positions as they appear in the image
  const numbers = [
    { value: 15, position: '1st' },
    { value: 15, position: '2nd' },
    { value: 24, position: '3rd' },
    { value: 2, position: '4th' },
    { value: 17, position: '5th' },
    { value: 30, position: '6th' },
    { value: 13, position: '7th' },
    { value: 13, position: '8th' },
    { value: 24, position: '9th' },
    { value: 15, position: '10th' },
    { value: 15, position: '11th' },
    { value: 24, position: '12th' },
    { value: 2, position: '13th' },
    { value: 17, position: '14th' },
    { value: 30, position: '15th' },
    { value: 13, position: '16th' },
    { value: 13, position: '17th' },
    { value: 24, position: '18th' },
    { value: 15, position: '19th' },
    { value: 15, position: '20th' },
    { value: 24, position: '21th' },
    { value: 2, position: '22th' },
    { value: 17, position: '23th' },
    { value: 30, position: '24th' },
  ];

  // Colors from your specifications
  const redColor = '#B2121F';
  const darkBlueColor = '#121110';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      {/* Header navigation */}
      <header className="w-full max-w-4xl mb-6">
        <nav className="flex justify-between items-center py-3 px-6 bg-gray-800 rounded-lg border border-white/30">
          <div className="flex space-x-6">
            <span className="text-white font-medium cursor-pointer hover:text-gray-300 transition">Gipfelink</span>
            <span className="text-white font-medium cursor-pointer hover:text-gray-300 transition">Wishes</span>
            <span className="text-white font-medium cursor-pointer hover:text-gray-300 transition">Shop</span>
          </div>
          <span className="text-red-500 font-medium cursor-pointer hover:text-red-400 transition">ActivateWindows</span>
        </nav>
      </header>

      {/* Main roulette content */}
      <main className="w-full max-w-4xl flex flex-col items-center">
        {/* Roulette wheel */}
        <div className="relative w-96 h-96 mb-8">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full border-8 border-gray-700 border-opacity-50"></div>
          
          {/* Center circle */}
          <div className="absolute inset-20 rounded-full bg-gray-800 border border-white/30 flex items-center justify-center">
            <div className="text-white text-xl font-bold">Roulette</div>
          </div>
          
          {/* Number segments */}
          {numbers.map((num, index) => {
            const angle = (360 / numbers.length) * index;
            const isRed = num.value === 15 || num.value === 2 || num.value === 17 || num.value === 13;
            
            return (
              <div 
                key={index}
                className="absolute top-0 left-0 w-full h-full origin-center"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div 
                  className="absolute top-0 left-1/2 w-1/2 h-16 -mt-8 origin-left"
                  style={{ 
                    backgroundColor: isRed ? redColor : darkBlueColor,
                    transform: `rotate(${360/numbers.length/2}deg)`,
                  }}
                >
                  <div 
                    className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-32 h-full flex items-center justify-center"
                    style={{ transform: `rotate(${-360/numbers.length/2}deg)` }}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-white font-bold text-lg">{num.value}</span>
                      <span className="text-white text-xs opacity-70">{num.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Control buttons */}
        <div className="flex space-x-4 mb-8">
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg border border-white/30 hover:bg-gray-700 transition">
            Optimize
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg border border-white/30 hover:bg-gray-700 transition">
            Volatile
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg border border-white/30 hover:bg-gray-700 transition">
            Zone
          </button>
        </div>

        {/* Activation notice */}
        <div className="w-full bg-gray-800 rounded-lg border border-white/30 p-4 text-center">
          <div className="text-red-500 font-medium mb-1">Astvate Windows</div>
          <div className="text-gray-400 text-sm mb-1">Go to Settings to activate Windows</div>
          <div className="text-gray-400 text-sm">Please: Ham</div>
          <div className="text-gray-500 text-xs mt-2">ID: 21723470</div>
        </div>
      </main>
    </div>
  );
};

export default RouletteWheel;