import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LocateFixed } from "lucide-react";
import DropdownMenuEntity from "./components/DropdownMenuEntity";
import { Button } from "./components/ui/button";
import PrayerCard from "./PrayerCard";

function App() {
  return (
    <div className="bg-primary min-h-screen overflow-hidden center-flex-col">
      <div className="container center-flex-col gap-2 md:gap-3">
        <div className="flex items-center gap-5 m-[-10px]">
          <h1 className="text-4xl md:text-5xl text-white font-[600]">
            {/* {t("title")} */}
            Prayer times
          </h1>
          {/* toggle: Arabic or English */}
          <DropdownMenuEntity entities={["ar", "en"]} selectedEntity="ar" />
        </div>
        {/* <p className="max-w-[500px] w-full text-primary-foreground text-sm lg:text-[17px] text-center leading-5 font-[500] tracking-wide">
          Get accurate prayer times for any city worldwide. Select your location
          manually or use auto-detection for real-time prayer schedules
        </p> */}

        {/* Dropdown Menu */}
        <div className="flex justify-between gap-1 sm:gap-3 w-[95%] lg:w-[70%] my-1 lg:my-2">
          <DropdownMenuEntity entities={["PS", "SU"]} selectedEntity={"PS"} />
          <DropdownMenuEntity
            entities={["Gaza", "Rafah"]}
            selectedEntity={"Gaza"}
          />
          <div className="">
            <Button variant="outline">
              location
              <LocateFixed />
            </Button>
          </div>
        </div>

        <Card className="w-[95%]">
          <CardHeader className="p-3 center-flex-col sm:center-flex-row border-primary border-b">
            <div className="date ">
              <p>12 - 2 - 2020</p>
              <p>10: 30 PM</p>
            </div>
            <div>
              <CardTitle>PS - GAZA</CardTitle>
            </div>
            <div className="date ">
              <p>12 - 2 - 2020</p>
              <p>10: 30 PM</p>
            </div>
          </CardHeader>
          <CardContent>
            {/* <p className="text-center text-red-500 text-xl sm:text-2xl font-extrabold tracking-widest m-auto p-10">
              Error loading prayer times!
            </p> */}
            <div>
              <div className="center-flex-row gap-2 md:gap-3 py-4">
                {/* <ActivePrayerCard
                // key={index}
                // prayerName={prayerTime.displayName}
                // prayerTime={moment(prayerTime[prayers[index]], "HH:mm").format(
                //   "hh:mm A"
                // )}
                // counter={countdown}
                // upcomingPrayer={t("Upcoming Prayer")}
              /> */}
                {["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"].map(
                  (prayer) => (
                    <PrayerCard prayerName={prayer} prayerTime="10: 35" />
                  )
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
