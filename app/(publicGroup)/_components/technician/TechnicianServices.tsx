import { TechnicianProfileProps } from "@/lib/types";

export function TechnicianServices({
  technician,
}: TechnicianProfileProps) {
  return (
    <div className="space-y-1">
      {technician.services?.map((service) => (
        <div
          key={service.id}
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-sm font-medium">
              {service.title}
            </p>

            <p className="text-xs text-muted-foreground">
              {service.category?.type}
            </p>
          </div>

          <span className="text-sm font-semibold">
            ৳{service.price.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}