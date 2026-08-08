"use client";

import { useEffect, useState, useTransition, useCallback } from "react";
import Link from "next/link";
import { cancelBooking, getCustomerBookings } from "@/service/booking";
import { BookingStatus, IBooking } from "@/lib/types";
import { createPaymentSession } from "@/service/payment";
import { toast } from "sonner";

export default function BookingHistoryPage() {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  // Default to true so no synchronous setLoading(true) is needed during initial mount
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [processingPaymentId, setProcessingPaymentId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Pure async fetcher with NO synchronous state setters at the top
  const fetchBookings = useCallback(async () => {
    try {
      const result = await getCustomerBookings();

      if (!result.success) {
        throw new Error(result.message || "Failed to load bookings");
      }

      const dataList = Array.isArray(result)
        ? result
        : result.data || result.bookings || [];

      setBookings(dataList);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch on mount safely
  useEffect(() => {
    let ignore = false;

    async function loadData() {
      await fetchBookings();
    }

    loadData();

    return () => {
      ignore = true;
    };
  }, [fetchBookings]);

  // Retry handler (safe to update loading state here because it's triggered by a user event)
  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchBookings();
  };


const handlePayNow = async (bookingId: string) => {
  setProcessingPaymentId(bookingId);

  // Directly call the server action; redirect() will execute cleanly
  const res = await createPaymentSession(bookingId);

  // If execution reaches here, it means no redirect occurred (e.g. backend error)
  if (res && !res.success) {
    toast.error("Payment session not created");
    setProcessingPaymentId(null);
  }
};
  

  const handleCancelBooking = (bookingId: string) => {
  if (!confirm("Are you sure you want to cancel this booking?")) return;

  startTransition(async () => {
    const res = await cancelBooking(bookingId);

    if (res?.success) {
      toast.success("Booking cancel");
      setBookings((prev) =>
        prev.map((b) =>
          b.id === bookingId ? { ...b, status: "CANCELLED" } : b
        )
      );
    } else {
      toast.error("Cancellation faild");
    }
  });
};

  const getStatusBadge = (status: BookingStatus) => {
    const styles: Record<BookingStatus, string> = {
      REQUESTED: "bg-amber-100 text-amber-800 border-amber-300",
      ACCEPTED: "bg-blue-100 text-blue-800 border-blue-300",
      DECLINED: "bg-red-100 text-red-800 border-red-300",
      PAID: "bg-purple-100 text-purple-800 border-purple-300",
      IN_PROGRESS: "bg-emerald-100 text-emerald-800 border-emerald-300",
      COMPLETED: "bg-slate-100 text-slate-800 border-slate-300",
      CANCELLED: "bg-rose-100 text-rose-800 border-rose-300",
    };

    return (
      <span
        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-800 border-gray-300"
          }`}
      >
        {status ? status.replace("_", " ") : "UNKNOWN"}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-28 animate-pulse rounded-xl bg-slate-200" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl bg-red-50 p-6 text-center text-red-700">
        <p>{error}</p>
        <button
          onClick={handleRetry}
          className="mt-2 text-sm font-semibold underline"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Your Bookings</h2>

      {bookings.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center text-slate-500 shadow-sm">
          No bookings found.{" "}
          <Link href="/services" className="text-blue-600 underline">
            Browse Services
          </Link>{" "}
          to create one.
        </div>
      ) : (
        bookings.map((booking) => {
          const canPay =
            booking.status === "ACCEPTED" &&
            (!booking.payment || booking.payment.status === "PENDING");

          const canCancel = booking.status === "REQUESTED" || booking.status === "PAID";
          const hasReview = Boolean(booking.review);
          const canReview = booking.status === "COMPLETED" && !hasReview;

          const isPayingThis = processingPaymentId === booking.id;

          return (
            <div
              key={booking.id}
              className="flex flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow-sm transition-all md:flex-row md:items-center"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    {booking.service?.title || "Service"}
                  </h3>
                  {getStatusBadge(booking.status)}
                </div>
                <p className="text-sm text-slate-600">
                  Technician:{" "}
                  <span className="font-medium text-slate-800">
                    {booking.technician?.user?.name || "N/A"}
                  </span>
                </p>
                <p className="text-xs text-slate-500">📅 {booking.startAt}</p>
                <p className="text-base font-bold text-slate-900">
                  ${booking.price?.toFixed(2) ?? "0.00"}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {canPay && (
                  <button
                    disabled={isPayingThis}
                    onClick={() => handlePayNow(booking.id)}
                    className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 disabled:opacity-50"
                  >
                    {isPayingThis ? "Redirecting..." : "Pay Now"}
                  </button>
                )}

                {canCancel && (
                  <button
                    disabled={isPending}
                    onClick={() => handleCancelBooking(booking.id)}
                    className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition-colors hover:bg-rose-100 disabled:opacity-50"
                  >
                    Cancel Booking
                  </button>
                )}

                {canReview && (
                  <Link
                    href={`/customer-dashboard/reviews/${booking.id}`}
                    className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    Leave Review
                  </Link>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
