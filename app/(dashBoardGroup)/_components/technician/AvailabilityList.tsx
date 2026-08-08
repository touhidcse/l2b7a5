"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Clock, Calendar, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IAvailabilitySlot } from "@/lib/types";
import { getTechnicianAvailability } from "@/service/technicianActions";


export function AvailabilityList() {
  const [slots, setSlots] = useState<IAvailabilitySlot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAvailability = async () => {
      const res = await getTechnicianAvailability();

      if (res?.success && res.data?.technicianAvailabilities) {
        setSlots(res.data.technicianAvailabilities);
        toast.success(res.message || "Availability slots retrieved successfully");
      } else {
        toast.error(res?.message || "Failed to load availability slots");
      }
      setLoading(false);
    };

    fetchAvailability();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className="text-muted-foreground animate-pulse">Loading availability schedule...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {slots.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            No availability slots found.
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slots.map((slot) => (
            <Card key={slot.id} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {slot.day}
                </CardTitle>
                <Badge variant={slot.isAvailable ? "default" : "secondary"}>
                  {slot.isAvailable ? (
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Available
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> Unavailable
                    </span>
                  )}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>
                    {slot.startTime} - {slot.endTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}