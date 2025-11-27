import React from 'react';

const IllustrationView: React.FC = () => {
  return (
    <div className="pb-24 pt-6 px-4">
      <div className="mb-6 pl-2">
        <h2 className="text-xl font-bold text-gray-800">行程插圖</h2>
        <p className="text-sm text-gray-500">三天兩夜攻略懶人包</p>
      </div>
      
      <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 overflow-hidden">
        <img 
            src="https://raw.githubusercontent.com/j51680707/Macau-Trip/main/components/Gemini_Generated_Image_l7ojm5l7ojm5l7oj.png" 
            alt="Macau Itinerary Infographic" 
            className="w-full h-auto rounded-xl"
        />
        
        <div className="mt-4 p-3 bg-teal-50 rounded-xl text-center">
           <p className="text-xs text-teal-700">
             長按圖片可儲存至手機相簿
           </p>
        </div>
      </div>
    </div>
  );
};

export default IllustrationView;