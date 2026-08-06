// src/app/(dashboard)/dashboard/customer/layout.tsx
import Link from "next/link";
import React from "react";

export default function CustomerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Customer Dashboard</h1>
            <p className="text-sm text-slate-500">Manage your service bookings, payments, and reviews.</p>
          </div>
          <nav className="flex flex-wrap gap-2 rounded-lg bg-slate-100 p-1 text-sm font-medium">
            <Link
              href="/customer-dashboard/"
              className="rounded-md px-4 py-2 text-slate-700 hover:bg-white hover:text-slate-900 transition-colors"
            >
              Bookings
            </Link>
            <Link
              href="/customer-dashboard/payments"
              className="rounded-md px-4 py-2 text-slate-700 hover:bg-white hover:text-slate-900 transition-colors"
            >
              Payments
            </Link>
            <Link
              href="/customer-dashboard/reviews"
              className="rounded-md px-4 py-2 text-slate-700 hover:bg-white hover:text-slate-900 transition-colors"
            >
              Reviews
            </Link>
          </nav>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}