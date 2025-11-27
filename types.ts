export interface Coordinates {
  lat: number;
  lng: number;
}

export enum ActivityType {
  FLIGHT = 'FLIGHT',
  HOTEL = 'HOTEL',
  SIGHTSEEING = 'SIGHTSEEING',
  FOOD = 'FOOD',
  TRANSPORT = 'TRANSPORT',
  SHOPPING = 'SHOPPING'
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  locationName: string;
  type: ActivityType;
  coordinates: Coordinates;
  description: string;
  details?: {
    bookingCode?: string;
    ticketImage?: string; // URL placeholder
    tips?: string;
    googleMapsUrl?: string;
  };
}

export interface DaySchedule {
  dayId: string;
  date: string;
  title: string;
  items: ItineraryItem[];
}

export interface WeatherData {
  temp: string;
  condition: string;
  location: string;
  humidity: string;
  windSpeed: string;
}

export type Tab = 'day1' | 'day2' | 'day3' | 'map' | 'illustration';