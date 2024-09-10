export interface RootObject {
  code: number;
  status: string;
  data: Data;
}

interface Data {
  timings: Timings;
  date: Date;
  meta: Meta;
}

interface Meta {
  latitude: number;
  longitude: number;
  timezone: string;
  method: Method;
  latitudeAdjustmentMethod: string;
  midnightMode: string;
  school: string;
  offset: Offset;
}

interface Offset {
  Imsak: number;
  Fajr: number;
  Sunrise: number;
  Dhuhr: number;
  Asr: number;
  Maghrib: number;
  Sunset: number;
  Isha: number;
  Midnight: number;
}

interface Method {
  id: number;
  name: string;
  params: Params;
  location: Location;
}

interface Location {
  latitude: number;
  longitude: number;
}

interface Params {
  Fajr: number;
  Isha: string;
}

interface Date {
  readable: string;
  timestamp: string;
  hijri: Hijri;
  gregorian: Gregorian;
}

interface Gregorian {
  date: string;
  format: string;
  day: string;
  weekday: Weekday2;
  month: Month2;
  year: string;
  designation: Designation;
}

interface Month2 {
  number: number;
  en: string;
}

interface Weekday2 {
  en: string;
}

interface Hijri {
  date: string;
  format: string;
  day: string;
  weekday: Weekday;
  month: Month;
  year: string;
  designation: Designation;
  holidays: any[];
}

interface Designation {
  abbreviated: string;
  expanded: string;
}

interface Month {
  number: number;
  en: string;
  ar: string;
}

interface Weekday {
  en: string;
  ar: string;
}

interface Timings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
}