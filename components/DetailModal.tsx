import React from 'react';
import { X, MapPin, Ticket, AlertCircle, FileText } from 'lucide-react';
import { ItineraryItem, ActivityType } from '../types.ts';

interface DetailModalProps {
  item: ItineraryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  const isFlight = item.type === ActivityType.FLIGHT;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto transition-opacity"
        onClick={onClose}
      />

      {/* Content */}
      <div className="bg-white w-full max-w-md mx-auto rounded-t-[2rem] sm:rounded-2xl p-6 shadow-2xl transform transition-transform duration-300 pointer-events-auto animate-slide-up sm:animate-zoom-in max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
           <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto sm:hidden mb-2"></div>
           <button 
             onClick={onClose}
             className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
           >
             <X size={20} />
           </button>
        </div>

        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full mb-2">
              {item.time}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
            <div className="flex items-center text-gray-500 mt-1">
              <MapPin size={16} className="mr-1" />
              <span>{item.locationName}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>

          {/* Key Info / Ticket */}
          {item.details && (
            <div className="space-y-4">
              {item.details.bookingCode && (
                <div className={`p-4 rounded-xl border flex items-center justify-between ${
                  isFlight ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'
                }`}>
                  <div className="flex items-center">
                    {/* Conditional Icon based on Activity Type */}
                    {isFlight ? (
                      <Ticket className="text-blue-500 mr-3" size={24} />
                    ) : (
                      <FileText className="text-gray-400 mr-3" size={24} />
                    )}
                    <div>
                      <div className={`text-xs uppercase font-semibold ${
                        isFlight ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        {isFlight ? '電子機票號碼' : '訂位代號'}
                      </div>
                      <div className={`font-mono text-lg font-bold ${
                        isFlight ? 'text-blue-900' : 'text-gray-800'
                      }`}>{item.details.bookingCode}</div>
                    </div>
                  </div>
                </div>
              )}

              {item.details.tips && (
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="flex items-start">
                    <AlertCircle className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <p className="text-sm text-blue-800">{item.details.tips}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="grid grid-cols-1 gap-3 pt-2">
            {item.details?.googleMapsUrl && (
              <a 
                href={item.details.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-primary hover:bg-teal-800 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center transition shadow-lg shadow-teal-700/20"
              >
                <MapPin size={20} className="mr-2" />
                開啟導航 (Google Maps)
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;