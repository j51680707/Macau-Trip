import React from 'react';
import { DaySchedule, ItineraryItem } from '../types.ts';
import TimelineCard from './TimelineCard.tsx';

interface TimelineProps {
  schedule: DaySchedule;
  onItemClick: (item: ItineraryItem) => void;
}

const Timeline: React.FC<TimelineProps> = ({ schedule, onItemClick }) => {
  return (
    <div className="pb-24 pt-6 px-4">
      <div className="mb-6 pl-2">
        <h2 className="text-xl font-bold text-gray-800">{schedule.title}</h2>
        <p className="text-sm text-gray-500">{schedule.date}</p>
      </div>
      
      <div className="relative">
        {schedule.items.map((item) => (
          <TimelineCard 
            key={item.id} 
            item={item} 
            onClick={onItemClick} 
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;