// src/app/payment/success/page.tsx
import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-md">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
          ✓
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Payment Successful!</h1>
        <p className="mt-2 text-sm text-slate-600">
          Your payment has been received and verified. The technician has been notified to proceed with your booking.
        </p>
        <Link
          href="/customer-dashboard/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}