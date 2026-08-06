import { TechnicianProfileProps } from "@/lib/types";
import { Badge } from "lucide-react";

export function TechnicianServices({ technician }: TechnicianProfileProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {
                technician.services?.map(service => (
                    <div key={service.id} className="space-y-2">
                        <Badge>
                            {service.category?.type}
                        </Badge>
                        <Badge>
                            {service.title}
                        </Badge>
                        <Badge>
                            {service.price}
                        </Badge>
                        <Badge>
                            {service.id}
                        </Badge>

                    </div>
                ))
            }
        </div>
    )
}