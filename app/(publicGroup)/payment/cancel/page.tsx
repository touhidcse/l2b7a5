import Link from "next/link";

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-md">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl text-amber-600">
          ✕
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Payment Cancelled</h1>
        <p className="mt-2 text-sm text-slate-600">
          You cancelled the checkout process. No charges were made to your account. You can re-try payment anytime from your booking list.
        </p>
        <Link
          href="/customer-dashboard/"
          className="mt-6 inline-block rounded-lg bg-slate-800 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-900 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}