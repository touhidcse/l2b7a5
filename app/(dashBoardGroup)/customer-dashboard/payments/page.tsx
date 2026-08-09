"use client";

import { useEffect, useState } from "react";
import { getPaymentHistory } from "@/service/payment";
import { IPayment, PaymentStatus } from "@/lib/types";

export default function PaymentHistoryPage() {
  const [payments, setPayments] = useState<IPayment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchPayments = async () => {
      try {
        const res = await getPaymentHistory();

        if (!isMounted) return;

        if (res.success || Array.isArray(res)) {
          const list: IPayment[] = Array.isArray(res)
            ? res
            : res.data || res.payments || [];

          setPayments(list);
        }
      } catch (err) {
        console.error("Failed to load payments", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPayments();

    return () => {
      isMounted = false;
    };
  }, []);

  const getStatusBadge = (status: PaymentStatus | string) => {
    const styles: Record<string, string> = {
      COMPLETED:
        "bg-emerald-100 text-emerald-800 border-emerald-300",
      SUCCESS:
        "bg-emerald-100 text-emerald-800 border-emerald-300",
      PAID:
        "bg-emerald-100 text-emerald-800 border-emerald-300",
      REFUNDED:
        "bg-amber-100 text-amber-800 border-amber-300",
      FAILED:
        "bg-rose-100 text-rose-800 border-rose-300",
      PENDING:
        "bg-blue-100 text-blue-800 border-blue-300",
    };

    return (
      <span
        className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
          styles[status] ||
          "border-gray-300 bg-gray-100 text-gray-800"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <section className="w-full min-w-0">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
          Payment History
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          View your previous payment transactions.
        </p>
      </div>

      {/* Card */}
      <div className="w-full min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {loading ? (
          <div className="px-4 py-12 text-center text-sm text-slate-400">
            Loading payment records...
          </div>
        ) : payments.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-slate-500">
            No payment history found.
          </div>
        ) : (
          /*
           * IMPORTANT:
           * Only this container should scroll horizontally.
           */
          <div className="w-full max-w-full overflow-x-auto">
            <table className="w-full min-w-[850px] text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500">
                <tr>
                  <th className="whitespace-nowrap px-4 py-3">
                    Transaction ID
                  </th>

                  <th className="whitespace-nowrap px-4 py-3">
                    Service
                  </th>

                  <th className="whitespace-nowrap px-4 py-3">
                    Technician
                  </th>

                  <th className="whitespace-nowrap px-4 py-3">
                    Method
                  </th>

                  <th className="whitespace-nowrap px-4 py-3">
                    Amount
                  </th>

                  <th className="whitespace-nowrap px-4 py-3">
                    Date
                  </th>

                  <th className="whitespace-nowrap px-4 py-3">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {payments.map((pmt) => (
                  <tr
                    key={pmt.id}
                    className="transition-colors hover:bg-slate-50/50"
                  >
                    {/* Transaction ID */}
                    <td className="max-w-[180px] px-4 py-3 font-mono text-xs text-slate-500">
                      <span
                        className="block truncate"
                        title={
                          pmt.stripePaymentId || pmt.id
                        }
                      >
                        {pmt.stripePaymentId ||
                          pmt.id?.slice(0, 8) ||
                          "N/A"}
                      </span>
                    </td>

                    {/* Service */}
                    <td className="max-w-[220px] px-4 py-3 font-medium text-slate-800">
                      <span
                        className="block truncate"
                        title={
                          pmt.booking?.service?.title ||
                          "Service"
                        }
                      >
                        {pmt.booking?.service?.title ||
                          "Service"}
                      </span>
                    </td>

                    {/* Technician */}
                    <td className="max-w-[180px] px-4 py-3 text-slate-600">
                      <span
                        className="block truncate"
                        title={
                          pmt.booking?.technician?.user?.name ||
                          "N/A"
                        }
                      >
                        {pmt.booking?.technician?.user?.name ||
                          "N/A"}
                      </span>
                    </td>

                    {/* Method */}
                    <td className="whitespace-nowrap px-4 py-3 text-xs font-medium uppercase text-slate-500">
                      {pmt.method || "STRIPE"}
                    </td>

                    {/* Amount */}
                    <td className="whitespace-nowrap px-4 py-3 font-bold text-slate-900">
                      ${pmt.price?.toFixed(2) ?? "0.00"}
                    </td>

                    {/* Date */}
                    <td className="whitespace-nowrap px-4 py-3">
                      {pmt.paidAt
                        ? new Date(
                            pmt.paidAt
                          ).toLocaleDateString()
                        : "Pending"}
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3">
                      {getStatusBadge(pmt.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}