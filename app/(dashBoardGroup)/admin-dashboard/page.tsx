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

export default async function AdminDashboardPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const searchTerm = resolvedSearchParams?.searchTerm || "";
  const page = Number(resolvedSearchParams?.page) || 1;

  // Parallel server fetches for optimal page loading speed
  const [statsRes, categoriesRes, usersRes] = await Promise.all([
    getBookingStats(),
    getAdminCategories(),
    getUsers(searchTerm, page, 10),
  ]);

  const stats = statsRes.data;
  const categories = categoriesRes.data || [];
  const users = usersRes.data?.users || [];
  const meta = usersRes.data?.meta || { page: 1, limit: 10, total: 0 };

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

      {/* 3. User Management Section with Search & Pagination */}
      <section className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">User Management</h2>
            <p className="text-xs text-slate-500">
              Search by name, role, address, or status.
            </p>
          </div>

          <div className="w-full sm:w-72">
            <SharedSearchBar />
          </div>
        </div>

        {/* User Data Table */}
        <UserManagementTable users={users} />

        {/* Reusable Pagination */}
        <div className="mt-4 flex justify-end">
          <SharedPagination totalPages={Math.ceil(meta.total / meta.limit)} currentPage={meta.page} />
        </div>
      </section>
    </div>
  );
}