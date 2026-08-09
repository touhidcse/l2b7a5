import { getBookingStats, getAdminCategories, getUsers } from "@/service/adminActions";
import AdminStatsOverview from "../_components/admin/AdminStatsOverview";
import CategoryForm from "../_components/admin/CategoryForm";
import UserManagementTable from "../_components/admin/UserManagementTable";
import SharedPagination from "@/app/(publicGroup)/_components/shared/SharedPagination";
import { SharedSearchBar } from "@/app/(publicGroup)/_components/shared/SharedSearchBar";

interface PageProps {
  searchParams: Promise<{
    searchTerm?: string;
    page?: string;
  }>;
}

export default async function AdminDashboardPage() {
 

  // Parallel server fetches for optimal page loading speed
  const [statsRes, categoriesRes] = await Promise.all([
    getBookingStats(),
    getAdminCategories(),

  ]);

  const stats = statsRes.data;
  const categories = categoriesRes.data || [];
 

  return (
    <div className="space-y-8 p-6">
      {/* 1. Global Platform Overview Stats */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-800">Platform Overview</h2>
        {stats ? (
          <AdminStatsOverview stats={stats} />
        ) : (
          <p className="text-sm text-slate-500">Failed to load platform statistics.</p>
        )}
      </section>

      {/* 2. Category Management Section */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div>
          <CategoryForm />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 lg:col-span-2">
          <h3 className="mb-4 text-base font-bold text-slate-800">Service Categories</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3"
              >
                <p className="font-semibold text-slate-800">{cat.type}</p>
                <p className="text-xs text-slate-500">
                  {cat.services?.length || 0} active services
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}