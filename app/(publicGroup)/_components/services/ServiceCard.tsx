import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IService } from "@/lib/types";
import { MessageSquareIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  service: IService
}

export function ServiceCard({ service }: ServiceCardProps) {
  const bookingCount = service._count?.bookings ?? service.bookings?.length ?? 0;
  const imageUrl =
    service.technician.profilePhoto?.startsWith("http://") ||
      service.technician.profilePhoto?.startsWith("https://")
      ? service.technician.profilePhoto
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUYc4wJBplhHqgn45lCzs1dBf27EoL69wD_XOmp3w1p7KE12_LKqtv5vB&s=10";
  return (
    <Card className="gap-4">
      {service.technician.profilePhoto && (
        <Image
          loading="lazy"
          src={imageUrl}
          unoptimized
          alt={service.technician.user.name}
          width={400}
          height={400}
        // fill
        />
      )}
      <CardHeader>
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="secondary">
            {service.category?.type}
          </Badge>
        </div>
        <CardTitle className="text-lg">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="line-clamp-4 whitespace-pre-line text-muted-foreground">
          {service.description}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            By{" "}
            <Link
              href={`/technicians/${service.technician.id}`}
              className="font-medium hover:underline"
            >
              {service.technician?.user.name ?? "Unknown"}
            </Link>
          </span>
          <span>
            Price {service.price}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquareIcon className="size-3.5" />
            {bookingCount}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}