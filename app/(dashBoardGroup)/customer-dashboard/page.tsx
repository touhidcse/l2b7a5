"use client";

import { useEffect, useState, useTransition, useCallback } from "react";
import Link from "next/link";
import { getCustomerBookings } from "@/service/booking";
import { BookingStatus, IBooking } from "@/lib/types";
import { createPaymentSession } from "@/service/payment";

export default function BookingHistoryPage() {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  // Default loading to true so we don't call setLoading(true) synchronously in useEffect
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Pure async fetcher with NO synchronous state setters at entry
  const fetchBookings = useCallback(async () => {
    try {
      const result = await getCustomerBookings();

      if (!result.success) {
        throw new Error(result.message || "Failed to load bookings");
      }

      // Flexibly handle array or nested object payload
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

  // Effect handles fetching with cleanup guard to prevent memory leaks
  useEffect(() => {
    let isMounted = true;

    async function loadInitialData() {
      try {
        const result = await getCustomerBookings();

        if (!isMounted) return;

        if (!result.success) {
          throw new Error(result.message || "Failed to load bookings");
        }

        const dataList = Array.isArray(result)
          ? result
          : result.data || result.bookings || [];

        setBookings(dataList);
        setError(null);
      } catch (err: unknown) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Something went wrong.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadInitialData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Event handler triggers retry (safe to update loading state directly in event handlers)
  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchBookings();
  };

 const handlePayNow = async (bookingId: string) => {
  try {
    // 1. Call server action
    const res = await createPaymentSession(bookingId);

    // 2. Check returned object properties directly
    if (!res.success && res.message) {
      throw new Error(res.message);
    }

    // 3. Flexibly extract Stripe checkout URL
    const checkoutUrl = res.url || res.data?.url;

    if (checkoutUrl) {
      window.location.assign(checkoutUrl);
    } else {
      throw new Error("No payment URL was returned by the server.");
    }
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Failed to start payment.";
    alert(errorMessage);
  }
};

  const handleCancelBooking = async (bookingId: string) => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;

    startTransition(async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/bookings/cancel/${bookingId}`,
          {
            method: "PATCH",
            credentials: "include",
          }
        );

        if (!res.ok) throw new Error("Failed to cancel booking.");

        setBookings((prev) =>
          prev.map((b) =>
            b.id === bookingId ? { ...b, status: "CANCELLED" } : b
          )
        );
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Unable to cancel booking.";
        alert(errorMessage);
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
        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
          styles[status] || "bg-gray-100 text-gray-800 border-gray-300"
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
          const canCancel =
            booking.status === "REQUESTED" || booking.status === "PAID";

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
                <p className="text-xs text-slate-500">
                  📅 {booking.startAt}{" "}
                </p>
                <p className="text-base font-bold text-slate-900">
                  ${booking.price?.toFixed(2) ?? "0.00"}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {booking.status === "ACCEPTED" && (
                  <button
                    onClick={() => handlePayNow(booking.id)}
                    className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                  >
                    Pay Now
                  </button>
                )}

                {canCancel && (
                  <button
                    disabled={isPending}
                    onClick={() => handleCancelBooking(booking.id)}
                    className="rounded-lg bg-rose-50 border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-100 disabled:opacity-50 transition-colors"
                  >
                    Cancel Booking
                  </button>
                )}

                {booking.status === "COMPLETED" && (
                  <Link
                    // href={`/customer-dashboard/reviews/${booking.id}`}
                    href={`/customer-dashboard/reviews/${booking.id}`}
                    className="rounded-lg bg-blue-50 border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100 transition-colors"
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