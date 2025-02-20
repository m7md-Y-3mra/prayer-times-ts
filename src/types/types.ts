export enum PrayerNames {
  FAJR = "FAJR",
  SUNRISE = "SUNRISE",
  DHUHR = "DHUHR",
  ASR = "ASR",
  MAGHRIB = "MAGHRIB",
  ISHA = "ISHA",
}

export interface Prayer {
  name: PrayerNames;
  time: string;
}
