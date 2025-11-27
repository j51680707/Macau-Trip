import React from 'react';
import { Plane, Hotel, Camera, Utensils, Train, ShoppingBag, MapPin, ChevronRight } from 'lucide-react';
import { ActivityType, ItineraryItem } from '../types.ts';

interface TimelineCardProps {
  item: ItineraryItem;
  onClick: (item: ItineraryItem) => void;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, onClick }) => {
  const getIcon = (type: ActivityType) => {
    switch (type) {
      case ActivityType.FLIGHT: return <Plane size={18} />;
      case ActivityType.HOTEL: return <Hotel size={18} />;
      case ActivityType.SIGHTSEEING: return <Camera size={18} />;
      case ActivityType.FOOD: return <Utensils size={18} />;
      case ActivityType.TRANSPORT: return <Train size={18} />;
      case ActivityType.SHOPPING: return <ShoppingBag size={18} />;
      default: return <MapPin size={18} />;
    }
  };

  const getColors = (type: ActivityType) => {
     switch (type) {
      case ActivityType.FLIGHT: return 'bg-blue-100 text-blue-600 border-blue-200';
      case ActivityType.HOTEL: return 'bg-indigo-100 text-indigo-600 border-indigo-200';
      case ActivityType.SIGHTSEEING: return 'bg-pink-100 text-pink-600 border-pink-200';
      case ActivityType.FOOD: return 'bg-orange-100 text-orange-600 border-orange-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    // Prevent event bubbling if clicking specific internal buttons if any
    onClick(item);
  };

  const handleMapClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if(item.details?.googleMapsUrl) {
      window.open(item.details.googleMapsUrl, '_blank');
    }
  };

  return (
    <div className="flex group mb-6 relative" onClick={handleClick}>
      {/* Time Column */}
      <div className="w-16 flex-shrink-0 flex flex-col items-center pt-2">
        <span className="text-sm font-bold text-gray-700">{item.time}</span>
        {/* Vertical Line */}
        <div className="h-full w-0.5 bg-gray-200 mt-2 group-last:hidden"></div>
      </div>

      {/* Card */}
      <div className="flex-1 ml-2 relative cursor-pointer transform transition duration-200 hover:-translate-y-1">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex justify-between items-start mb-2">
            <div className={`p-2 rounded-xl ${getColors(item.type)}`}>
              {getIcon(item.type)}
            </div>
            {item.details?.googleMapsUrl && (
              <button 
                onClick={handleMapClick}
                className="text-gray-400 hover:text-blue-500 transition p-1"
              >
                <MapPin size={16} />
              </button>
            )}
          </div>
          
          <h3 className="font-bold text-gray-800 text-lg leading-tight">{item.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{item.locationName}</p>
          
          <div className="mt-3 flex items-center text-primary text-xs font-medium">
             <span>查看詳情</span>
             <ChevronRight size={12} className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;