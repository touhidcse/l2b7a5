import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnicianProfileProps } from "@/lib/types";
import { MessageSquareIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TechnicianSkills } from "./TechnicianSkills";
import { TechnicianServices } from "./TechnicianServices";



export function TechnicianCard({ technician }: TechnicianProfileProps) {
    const bookingCount = technician._count?.bookings ?? technician.bookings?.length ?? 0;
    const imageUrl =
        technician.profilePhoto?.startsWith("http://") ||
            technician.profilePhoto?.startsWith("https://")
            ? technician.profilePhoto
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUYc4wJBplhHqgn45lCzs1dBf27EoL69wD_XOmp3w1p7KE12_LKqtv5vB&s=10";
    return (
        <Link href={`/technicians/${technician.id}`}
              className="font-medium hover:underline">
            <Card className="gap-4">
                {technician.profilePhoto && (
                    <Image
                        loading="lazy"
                        src={imageUrl}
                        unoptimized
                        alt={technician.user.name}
                        width={400}
                        height={400}
                    // fill
                    />
                )}
                <CardHeader>
                    <div className="flex flex-wrap items-center gap-1.5">
                        <Badge variant="default">
                            {technician.user.name}
                        </Badge>
                        <Badge variant="default">
                            {technician.location}
                        </Badge>
                        {/* <Badge variant="default">
                             {technician.user.address}
                        </Badge> */}
                    </div>
                    <CardTitle className="text-lg">
                        {<TechnicianSkills technician={technician} />}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p className="line-clamp-4 whitespace-pre-line text-muted-foreground">
                        {technician.user.name} &apos;s service list:
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>

                            {<TechnicianServices technician={technician} />}
                        </span>
                        <span className="flex items-center gap-1">
                            <MessageSquareIcon className="size-3.5" />
                            Total Bookings : {bookingCount}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}