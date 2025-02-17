import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";

interface PrayerCardProps {
  prayerName: string;
  prayerTime: string;
}



const PrayerCard: FC<PrayerCardProps> = ({prayerName, prayerTime}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="h-[100px] overflow-hidden center-flex-col">
          <img
            src={`/src/assets/images/${prayerName.toLowerCase()}.png`}
            alt={prayerName}
            className=" object-cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{prayerName}</CardTitle>
        <CardTitle>{prayerTime}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default PrayerCard;
