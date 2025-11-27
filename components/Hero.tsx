import React, { useEffect, useState } from 'react';
import { CloudSun, Info, MapPin, Droplets, Wind } from 'lucide-react';
import { getRealtimeWeather } from '../services/geminiService.ts';
import { WeatherData } from '../types.ts';

interface HeroProps {
  onOpenTips: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenTips }) => {
  const [weather, setWeather] = useState<WeatherData>({ 
    temp: '--', 
    condition: 'Loading...', 
    humidity: '--',
    windSpeed: '--',
    location: 'Macau' 
  });

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getRealtimeWeather('Macau');
      setWeather(data);
    };
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const today = new Date().toLocaleDateString('zh-TW', { month: 'long', day: 'numeric', weekday: 'long' });

  return (
    <div className="relative bg-gradient-to-br from-primary to-teal-800 text-white rounded-b-[2rem] shadow-xl p-6 pt-12 pb-8 overflow-hidden z-10 transition-all duration-500 ease-in-out">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full -ml-8 -mb-8 blur-xl"></div>

      {/* Header Row */}
      <div className="relative flex justify-between items-start">
        <div>
          <div className="flex items-center space-x-2 text-teal-100 text-sm mb-1">
             <MapPin size={14} />
             <span>{weather.location}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Macau Trip</h1>
          <p className="text-teal-100 opacity-90 mt-1">{today}</p>
        </div>
        
        <button 
          onClick={onOpenTips}
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition backdrop-blur-md"
          aria-label="Travel Tips"
        >
          <Info size={24} className="text-white" />
        </button>
      </div>

      {/* Main Weather Info */}
      <div className="mt-6 bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
        <div className="flex items-center space-x-4 mb-3">
          <CloudSun size={40} className="text-secondary" />
          <div>
            <div className="text-2xl font-semibold">{weather.temp}</div>
            <div className="text-sm text-teal-100 capitalize">{weather.condition}</div>
          </div>
        </div>

        {/* Detailed Stats Divider */}
        <div className="h-px bg-white/10 my-2"></div>

        {/* Humidity and Wind */}
        <div className="flex justify-between items-center text-sm text-teal-50 px-1 pt-1">
          <div className="flex items-center space-x-2">
            <Droplets size={16} className="opacity-80" />
            <span>濕度 {weather.humidity}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wind size={16} className="opacity-80" />
            <span>風速 {weather.windSpeed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;