import React, { useState } from 'react';
import { Minus, Plus, Thermometer } from 'lucide-react';

function App() {
  const [temperature, setTemperature] = useState(21);

  const increaseTemp = () => {
    setTemperature(prev => Math.min(prev + 1, 40));
  };

  const decreaseTemp = () => {
    setTemperature(prev => Math.max(prev - 1, 0));
  };

  // Calculate background color based on temperature
  const getBackgroundColor = () => {
    if (temperature <= 10) return 'bg-blue-500';
    if (temperature <= 20) return 'bg-green-500';
    if (temperature <= 30) return 'bg-orange-500';
    return 'bg-red-500';
  };

  // Calculate text color based on temperature
  const getTextColor = () => {
    if (temperature <= 10) return 'text-blue-700';
    if (temperature <= 20) return 'text-green-700';
    if (temperature <= 30) return 'text-orange-700';
    return 'text-red-700';
  };

  return (
    <div className={`min-h-screen ${getBackgroundColor()} transition-colors duration-500 flex items-center justify-center`}>
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-80">
        <div className="flex flex-col items-center gap-8">
          {/* Temperature Display */}
          <div className="relative">
            <Thermometer className={`w-12 h-12 ${getTextColor()}`} />
            <div className={`text-6xl font-bold mt-4 ${getTextColor()}`}>
              {temperature}°C
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={decreaseTemp}
              className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors shadow-md"
              aria-label="Decrease temperature"
            >
              <Minus className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={increaseTemp}
              className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors shadow-md"
              aria-label="Increase temperature"
            >
              <Plus className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Temperature Description */}
          <div className="text-gray-600 text-center">
            {temperature <= 10 && "It's cold! ❄️"}
            {temperature > 10 && temperature <= 20 && "Perfect temperature! 👌"}
            {temperature > 20 && temperature <= 30 && "It's getting warm! 🌤️"}
            {temperature > 30 && "Too hot! 🔥"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;