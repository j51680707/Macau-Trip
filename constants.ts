import { ActivityType, DaySchedule } from './types';

export const ITINERARY: DaySchedule[] = [
  {
    dayId: 'day1',
    date: '12/13 (六)',
    title: 'Day 1: 內港風情與文青葡韻',
    items: [
      {
        id: 'd1-1',
        time: '10:00',
        title: '抵達澳門國際機場',
        locationName: 'Macau International Airport (MFM)',
        type: ActivityType.FLIGHT,
        coordinates: { lat: 22.1583, lng: 113.5933 },
        description: '搭乘澳門航空 NX631 抵達。領取行李後，分兩台計程車前往十六浦。',
        details: {
          bookingCode: 'NX631',
          tips: '記得開啟漫遊或更換 SIM 卡。',
          googleMapsUrl: 'https://maps.google.com/?q=Macau+International+Airport'
        }
      },
      {
        id: 'd1-2',
        time: '12:30',
        title: '飯店入住/寄放行李',
        locationName: 'Sofitel Macau At Ponte 16',
        type: ActivityType.HOTEL,
        coordinates: { lat: 22.1965, lng: 113.5368 },
        description: '抵達澳門十六浦索菲特酒店寄放行李。位於內港歷史區。',
        details: {
          tips: '地址：澳門巴素打爾古街',
          googleMapsUrl: 'https://maps.google.com/?q=Sofitel+Macau+At+Ponte+16'
        }
      },
      {
        id: 'd1-3',
        time: '13:30',
        title: '午餐：樂軒華粵菜餐廳',
        locationName: 'Le Chinois (Sofitel 18F)',
        type: ActivityType.FOOD,
        coordinates: { lat: 22.1965, lng: 113.5368 },
        description: '飯店直達，享用精緻點心與 270 度內港江景。',
        details: {
          bookingCode: 'RES-LE-CHINOIS',
          tips: '★素食友善：提供素粉果、炒飯等選項。',
          googleMapsUrl: 'https://maps.google.com/?q=Sofitel+Macau+At+Ponte+16'
        }
      },
      {
        id: 'd1-4',
        time: '15:00',
        title: '文青散策：望德堂區',
        locationName: 'Albergue SCM (婆仔屋)',
        type: ActivityType.SIGHTSEEING,
        coordinates: { lat: 22.1953, lng: 113.5463 },
        description: '計程車約 MOP 30。避開大三巴人潮，探索仁慈堂婆仔屋老樟樹與葡國碎石路。',
        details: {
          tips: '推薦路線：婆仔屋 -> 瘋堂斜巷 -> 望德聖母堂。',
          googleMapsUrl: 'https://maps.google.com/?q=Albergue+SCM'
        }
      },
      {
        id: 'd1-5',
        time: '18:00',
        title: '晚餐：上葡京「自助山」',
        locationName: 'The Grand Buffet',
        type: ActivityType.FOOD,
        coordinates: { lat: 22.1465, lng: 113.5750 },
        description: '澳門自助餐天花板！晚餐時段享用戶外燒烤區與生猛海鮮。',
        details: {
          bookingCode: 'GLP-BUFFET-4PAX',
          tips: '已預約 4 位用餐。需跨海前往路氹，車程約 25 分鐘。',
          googleMapsUrl: 'https://maps.google.com/?q=Grand+Lisboa+Palace+Resort+Macau'
        }
      }
    ]
  },
  {
    dayId: 'day2',
    date: '12/14 (日)',
    title: 'Day 2: 官也街美食與奢華轉場',
    items: [
      {
        id: 'd2-1',
        time: '08:30',
        title: '飯店早餐',
        locationName: 'Mistral (Sofitel)',
        type: ActivityType.FOOD,
        coordinates: { lat: 22.1965, lng: 113.5368 },
        description: '享用飯店包含的自助早餐，隨後 11:00 前退房。',
        details: {
          googleMapsUrl: 'https://maps.google.com/?q=Sofitel+Macau+At+Ponte+16'
        }
      },
      {
        id: 'd2-2',
        time: '11:30',
        title: '午餐 & 官也街',
        locationName: 'La Famiglia (Taipa Village)',
        type: ActivityType.FOOD,
        coordinates: { lat: 22.1537, lng: 113.5574 },
        description: '位於氹仔舊城區的葡意料理，適合多人聚餐。',
        details: {
          bookingCode: 'FAMIGLIA-6PAX',
          tips: '★素食友善 (可做素義大利麵)。必買：安德魯蛋塔、晃記餅家、莫義記。',
          googleMapsUrl: 'https://maps.google.com/?q=La+Famiglia+Macau'
        }
      },
      {
        id: 'd2-3',
        time: '14:30',
        title: '⚠️ 分流時刻：送機 / 續留',
        locationName: 'Split Point (Taipa)',
        type: ActivityType.TRANSPORT,
        coordinates: { lat: 22.1537, lng: 113.5574 },
        description: '返台友人：15:00 前離開前往機場 (NX618 17:35 起飛)。續留 5 人：前往瑞吉酒店。',
        details: {
          tips: '返台者請預留時間領取行李。',
          googleMapsUrl: 'https://maps.google.com/?q=Macau+International+Airport'
        }
      },
      {
        id: 'd2-4',
        time: '15:30',
        title: '瑞吉入住 & 倫敦人探索',
        locationName: 'The St. Regis Macao',
        type: ActivityType.HOTEL,
        coordinates: { lat: 22.1466, lng: 113.5663 },
        description: '體驗標誌性管家服務 (咖啡/茶)。參觀倫敦人水晶金殿。',
        details: {
          googleMapsUrl: 'https://maps.google.com/?q=The+Londoner+Macao'
        }
      },
      {
        id: 'd2-5',
        time: '19:00',
        title: '晚餐：客房餐飲服務',
        locationName: 'In-Room Dining (St. Regis)',
        type: ActivityType.FOOD,
        coordinates: { lat: 22.1466, lng: 113.5663 },
        description: '利用每房 MOP 800 額度享用房內晚餐。',
        details: {
          bookingCode: 'ROOM-SERVICE',
          tips: '推薦：澳洲和牛扒 ($548)、龍蝦雲吞麵 ($188)、素食蘑菇湯 ($138) 與芝士胡椒意粉 ($218)。',
          googleMapsUrl: 'https://maps.google.com/?q=The+St.+Regis+Macao'
        }
      }
    ]
  },
  {
    dayId: 'day3',
    date: '12/15 (一)',
    title: 'Day 3: 路環漁村慢活 & 返台',
    items: [
      {
        id: 'd3-1',
        time: '09:00',
        title: '半自助早餐',
        locationName: 'The Manor (St. Regis)',
        type: ActivityType.FOOD,
        coordinates: { lat: 22.1466, lng: 113.5663 },
        description: '享用著名的現點現做主餐早餐 (如龍蝦蛋、牛排蛋)。',
        details: {
          tips: '素食者推薦：酪梨吐司或松露炒蛋。',
          googleMapsUrl: 'https://maps.google.com/?q=The+St.+Regis+Macao'
        }
      },
      {
        id: 'd3-2',
        time: '11:00',
        title: '路環漁村慢活',
        locationName: 'Coloane Village',
        type: ActivityType.SIGHTSEEING,
        coordinates: { lat: 22.1182, lng: 113.5521 },
        description: '參觀聖方濟各聖堂、路環圖書館、漫步十月初五馬路。',
        details: {
          tips: '必買：安德魯餅店總店 (剛出爐蛋塔)。',
          googleMapsUrl: 'https://maps.google.com/?q=Chapel+of+St+Francis+Xavier'
        }
      },
      {
        id: 'd3-3',
        time: '12:00',
        title: '午餐：雅憩花園餐廳',
        locationName: 'Nga Tim Café',
        type: ActivityType.FOOD,
        coordinates: { lat: 22.1182, lng: 113.5521 },
        description: '教堂前大樹下的風味大排檔，環境舒適愜意。',
        details: {
          tips: '推薦：西洋烚菜、炒雜菜、新鮮海鮮。',
          googleMapsUrl: 'https://maps.google.com/?q=Nga+Tim+Cafe'
        }
      },
      {
        id: 'd3-4',
        time: '14:30',
        title: '最後採買 / 前往機場',
        locationName: 'Macau Airport',
        type: ActivityType.TRANSPORT,
        coordinates: { lat: 22.1583, lng: 113.5933 },
        description: '瑞吉至機場約 10 分鐘。搭乘 NX618 (17:35 起飛) 返台。',
        details: {
          tips: '若有時間可先逛四季名店。',
          googleMapsUrl: 'https://maps.google.com/?q=Macau+International+Airport'
        }
      }
    ]
  }
];

export const TAIWAN_MACAU_TIPS = [
  "不需要簽證：台灣護照可免簽停留30天。",
  "電壓與插座：澳門使用220V，插座為英式三腳方型 (Type G)，需準備轉接頭。",
  "貨幣：使用澳門幣 (MOP)，但在賭場和大部分店家也通用港幣 (HKD)，匯率通常 1:1。",
  "網路：建議在台灣先買好漫遊或網卡，澳門公共WiFi覆蓋率高但速度不一。",
  "交通：計程車起跳價較高，建議多利用各大酒店的免費接駁巴士 (發財車)。",
  "緊急電話：報警/火警/救護車請撥 999。"
];
