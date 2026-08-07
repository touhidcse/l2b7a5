import React from "react";
import { ProfileHeader } from "@/app/(publicGroup)/_components/profile/profileHeader";
import { getMe } from "@/service/getMe";
import { IUser } from "@/lib/types";
import { getTechnicianBookings } from "@/service/technicianActions";
import BookingManagementTable from "../_components/technician/BookingManagementTable";
import ProfileManagementForm from "../_components/technician/ProfileManagementForm";
import AvailabilityScheduler from "../_components/technician/AvailabilityScheduler";


export default async function TechnicianPage() {
  const user = (await getMe()) as IUser;
  const bookingRes = await getTechnicianBookings();
  const bookings = bookingRes.data || [];

  // Overview metrics calculations
  const totalEarnings = bookings
    .filter((b) => b.status === "COMPLETED")
    .reduce((sum, b) => sum + (b.price || 0), 0);

  const pendingRequests = bookings.filter((b) => b.status === "REQUESTED").length;
  const upcomingJobs = bookings.filter((b) =>
    ["ACCEPTED", "PAID", "IN_PROGRESS"].includes(b.status)
  ).length;

  return (
    <div className="space-y-6 p-6">
      <ProfileHeader user={user} />

      {/* Metrics Row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase text-slate-400">Total Earnings</p>
          <p className="mt-2 text-2xl font-bold text-emerald-600">${totalEarnings.toFixed(2)}</p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase text-slate-400">Pending Requests</p>
          <p className="mt-2 text-2xl font-bold text-amber-500">{pendingRequests}</p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase text-slate-400">Upcoming Jobs</p>
          <p className="mt-2 text-2xl font-bold text-blue-600">{upcomingJobs}</p>
        </div>
      </div>

      <BookingManagementTable initialBookings={bookings} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProfileManagementForm initialData={user.technicianProfile} />
        <AvailabilityScheduler />
      </div>
    </div>
  );
}