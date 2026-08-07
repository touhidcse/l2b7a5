"use client";

import { useState } from "react";
import { toast } from "sonner";
import { IBooking, BookingStatus } from "@/lib/types";
import { updateBookingStatus } from "@/service/technicianActions";

interface Props {
  initialBookings: IBooking[];
}

export default function BookingManagementTable({ initialBookings }: Props) {
  const [bookings, setBookings] = useState<IBooking[]>(initialBookings);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleStatusChange = (bookingId: string, status: BookingStatus) => {
    setLoadingId(bookingId);
    updateBookingStatus(bookingId, status).then((res) => {
      setLoadingId(null);
      if (res.success) {
        toast.success(res.message);
        setBookings((prev) =>
          prev.map((b) => (b.id === bookingId ? { ...b, status } : b))
        );
      } else {
        toast.error(res.message);
      }
    });
  };

  const renderActionButtons = (booking: IBooking) => {
    const isLoading = loadingId === booking.id;

    if (booking.status === "REQUESTED") {
      return (
        <div className="flex gap-2">
          <button
            disabled={isLoading}
            onClick={() => handleStatusChange(booking.id, "ACCEPTED")}
            className="rounded bg-emerald-600 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
          >
            Accept
          </button>
          <button
            disabled={isLoading}
            onClick={() => handleStatusChange(booking.id, "DECLINED")}
            className="rounded bg-rose-600 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-700 disabled:opacity-50"
          >
            Decline
          </button>
        </div>
      );
    }

    if (booking.status === "PAID") {
      return (
        <button
          disabled={isLoading}
          onClick={() => handleStatusChange(booking.id, "IN_PROGRESS")}
          className="rounded bg-blue-600 px-3 py-1 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Mark In-Progress
        </button>
      );
    }

    if (booking.status === "IN_PROGRESS") {
      return (
        <button
          disabled={isLoading}
          onClick={() => handleStatusChange(booking.id, "COMPLETED")}
          className="rounded bg-purple-600 px-3 py-1 text-xs font-semibold text-white hover:bg-purple-700 disabled:opacity-50"
        >
          Mark Completed
        </button>
      );
    }

    return <span className="text-xs text-slate-400">No Action Needed</span>;
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
      <h3 className="mb-4 text-lg font-bold text-slate-800">Booking Requests</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-400">
                  No bookings available.
                </td>
              </tr>
            ) : (
              bookings.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-800">
                    {b.customer?.name || "N/A"}
                  </td>
                  <td className="px-4 py-3">{b.service?.title || "N/A"}</td>
                  <td className="px-4 py-3 font-semibold text-slate-900">${b.price}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{renderActionButtons(b)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}