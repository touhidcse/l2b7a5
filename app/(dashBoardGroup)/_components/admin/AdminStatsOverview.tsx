import { BookingStats } from "@/lib/types";

interface Props {
  stats: BookingStats;
}

export default function AdminStatsOverview({ stats }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase text-slate-500">Total Bookings</p>
        <h4 className="mt-2 text-2xl font-bold text-slate-800">{stats.totalBookings}</h4>
      </div>

      <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase text-slate-500">Total Revenue</p>
        <h4 className="mt-2 text-2xl font-bold text-emerald-600">
          ৳{stats.totalSpent.toLocaleString()}
        </h4>
      </div>

      <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase text-slate-500">Completion Rate</p>
        <h4 className="mt-2 text-2xl font-bold text-indigo-600">{stats.completionRate}%</h4>
      </div>

      <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase text-slate-500">Active</p>
        <h4 className="mt-2 text-2xl font-bold text-amber-500">{stats.activeBookings}</h4>
      </div>
    </div>
  );
}