import React, { useState, useEffect } from 'react';
import { ITINERARY } from './constants.ts';
import { Tab, ItineraryItem } from './types.ts';
import Hero from './components/Hero.tsx';
import Timeline from './components/Timeline.tsx';
import BottomNav from './components/BottomNav.tsx';
import MapView from './components/MapView.tsx';
import DetailModal from './components/DetailModal.tsx';
import TipsModal from './components/TipsModal.tsx';
import IllustrationView from './components/IllustrationView.tsx';
import { getSmartTravelTips } from './services/geminiService.ts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('day1');
  const [selectedItem, setSelectedItem] = useState<ItineraryItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isTipsModalOpen, setIsTipsModalOpen] = useState(false);
  const [aiTips, setAiTips] = useState<string>('');

  useEffect(() => {
    // Load AI tips on mount
    const loadTips = async () => {
      const tips = await getSmartTravelTips();
      setAiTips(tips);
    };
    loadTips();
  }, []);

  const handleItemClick = (item: ItineraryItem) => {
    setSelectedItem(item);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300); // Wait for animation
  };

  const getActiveSchedule = () => {
    return ITINERARY.find(day => day.dayId === activeTab);
  };

  const isTimelineTab = ['day1', 'day2', 'day3'].includes(activeTab);

  return (
    <div className="bg-gray-50 min-h-screen font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden flex flex-col">
      
      {/* Map View takes over full screen background if active */}
      {activeTab === 'map' && (
        <MapView onMarkerClick={handleItemClick} />
      )}

      {/* Main Content Area */}
      <div className={`flex-1 overflow-y-auto no-scrollbar relative z-10 transition-opacity duration-300 ${activeTab === 'map' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Hero onOpenTips={() => setIsTipsModalOpen(true)} />
        
        <main className="min-h-screen bg-transparent">
          {isTimelineTab && (
             <Timeline 
               schedule={getActiveSchedule() || ITINERARY[0]} 
               onItemClick={handleItemClick}
             />
          )}
          {activeTab === 'illustration' && (
            <IllustrationView />
          )}
        </main>
      </div>

      {/* Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Modals */}
      <DetailModal 
        item={selectedItem} 
        isOpen={isDetailModalOpen} 
        onClose={closeDetailModal} 
      />

      <TipsModal 
        isOpen={isTipsModalOpen} 
        onClose={() => setIsTipsModalOpen(false)}
        aiTips={aiTips}
      />

      {/* Overlay for Maps tab (Bottom Nav needs background if map is active) */}
      {activeTab === 'map' && (
        <div className="fixed top-0 left-0 right-0 p-4 z-30 pointer-events-none">
           <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg text-center pointer-events-auto max-w-[200px] mx-auto">
             <span className="text-sm font-bold text-gray-800">總行程地圖</span>
           </div>
        </div>
      )}

    </div>
  );
};

export default App;