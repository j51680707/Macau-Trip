import React from 'react';
import { Map, Calendar, CalendarDays, CalendarRange, Image as ImageIcon } from 'lucide-react';
import { Tab } from '../types.ts';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'day1' as Tab, label: 'Day 1', icon: Calendar },
    { id: 'day2' as Tab, label: 'Day 2', icon: CalendarDays },
    { id: 'day3' as Tab, label: 'Day 3', icon: CalendarRange },
    { id: 'map' as Tab, label: '總地圖', icon: Map },
    { id: 'illustration' as Tab, label: '插圖', icon: ImageIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 pb-6 pt-3 z-40">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center space-y-1 transition-colors duration-200 w-14 ${
                isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-teal-50 transform -translate-y-1' : ''}`}>
                <Icon size={isActive ? 24 : 22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;