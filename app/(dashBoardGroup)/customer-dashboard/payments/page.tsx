"use client";

import { useEffect, useState } from "react";
import { getPaymentHistory } from "@/service/payment";
import { IPayment, PaymentStatus } from "@/lib/types";
import SharedPagination from "@/app/(publicGroup)/_components/shared/SharedPagination";


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
      COMPLETED: "bg-emerald-100 text-emerald-800 border-emerald-300",
      SUCCESS: "bg-emerald-100 text-emerald-800 border-emerald-300",
      PAID: "bg-emerald-100 text-emerald-800 border-emerald-300",
      REFUNDED: "bg-amber-100 text-amber-800 border-amber-300",
      FAILED: "bg-rose-100 text-rose-800 border-rose-300",
      PENDING: "bg-blue-100 text-blue-800 border-blue-300",
    };

    return (
      <span
        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
          styles[status] || "bg-gray-100 text-gray-800 border-gray-300"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-slate-800">Payment History</h2>

      {loading ? (
        <div className="py-12 text-center text-slate-400">
          Loading payment records...
        </div>
      ) : payments.length === 0 ? (
        <div className="py-8 text-center text-slate-500">
          No payment history found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3">Transaction ID</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Technician</th>
                <th className="px-4 py-3">Method</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payments.map((pmt) => (
                <tr key={pmt.id} className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-mono text-xs text-slate-500">
                    {pmt.stripePaymentId || pmt.id?.slice(0, 8) || "N/A"}
                  </td>
                  <td className="px-4 py-3 font-medium text-slate-800">
                    {pmt.booking?.service?.title || "Service"}
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {pmt.booking?.technician?.user?.name || "N/A"}
                  </td>
                  <td className="px-4 py-3 text-xs uppercase font-medium text-slate-500">
                    {pmt.method || "STRIPE"}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    ${pmt.price?.toFixed(2) ?? "0.00"}
                  </td>
                  <td className="px-4 py-3">
                    {pmt.paidAt
                      ? new Date(pmt.paidAt).toLocaleDateString()
                      : "Pending"}
                  </td>
                  <td className="px-4 py-3">{getStatusBadge(pmt.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}