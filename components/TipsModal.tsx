import React from 'react';
import { X, Lightbulb } from 'lucide-react';
import { TAIWAN_MACAU_TIPS } from '../constants';

interface TipsModalProps {
  isOpen: boolean;
  onClose: () => void;
  aiTips: string;
}

const TipsModal: React.FC<TipsModalProps> = ({ isOpen, onClose, aiTips }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[80vh]">
        <div className="bg-secondary p-4 flex justify-between items-center text-white">
          <div className="flex items-center space-x-2">
            <Lightbulb size={24} />
            <h2 className="text-lg font-bold">台灣人遊澳門小撇步</h2>
          </div>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <h3 className="text-sm font-bold text-gray-500 uppercase mb-3 tracking-wider">重要須知</h3>
          <ul className="space-y-3">
            {TAIWAN_MACAU_TIPS.map((tip, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-700">
                <span className="mr-2 text-secondary font-bold">•</span>
                {tip}
              </li>
            ))}
          </ul>

          {aiTips && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <h3 className="text-xs font-bold text-gray-400 uppercase mb-2 flex items-center">
                 AI 每日靈感
                 <span className="ml-2 px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded text-[10px]">Beta</span>
              </h3>
              <p className="text-sm text-gray-600 italic leading-relaxed bg-gray-50 p-3 rounded-lg">
                "{aiTips}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TipsModal;