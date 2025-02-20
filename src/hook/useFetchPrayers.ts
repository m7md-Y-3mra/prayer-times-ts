import { fetchData } from "@/services/api";
import { useEffect, useRef, useState } from "react";
import { Prayer, PrayerNames } from "@/types/types";
import config from "@/config";
import { ResponseData } from "@/types/responseType";
export const useFetchPrayers = () => {
  const [prayers, setPrayers] = useState<Prayer[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState();
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchAthanData = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setLoading(true);
      try {
        const data = await fetchData<ResponseData>(config.aladhanAPIURL);
        const prayersTimings = [
          {
            name: PrayerNames.FAJR,
            time: data.data.timings.Fajr,
          },
          {
            name: PrayerNames.SUNRISE,
            time: data.data.timings.Sunrise,
          },
          {
            name: PrayerNames.DHUHR,
            time: data.data.timings.Dhuhr,
          },
          {
            name: PrayerNames.ASR,
            time: data.data.timings.Asr,
          },
          {
            name: PrayerNames.MAGHRIB,
            time: data.data.timings.Maghrib,
          },
          {
            name: PrayerNames.ISHA,
            time: data.data.timings.Isha,
          },
        ];
        setPrayers(prayersTimings);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        if (e.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchAthanData();
  }, []);

  return {
    prayers,
    loading,
    error,
  };
};
