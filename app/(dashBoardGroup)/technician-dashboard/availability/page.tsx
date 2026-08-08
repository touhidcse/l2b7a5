import { AvailabilityList } from "../../_components/technician/AvailabilityList";


export default function TechnicianAvailabilityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Availability</h1>
        <p className="text-muted-foreground">
          View and manage your weekly working hours and time slots.
        </p>
      </div>

      <AvailabilityList />
    </div>
  );
}