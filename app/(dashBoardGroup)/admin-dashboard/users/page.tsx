import { getUsers } from "@/service/adminActions";
import SharedPagination from "@/app/(publicGroup)/_components/shared/SharedPagination";
import { SharedSearchBar } from "@/app/(publicGroup)/_components/shared/SharedSearchBar";
import UserManagementTable from "../../_components/admin/UserManagementTable";

interface PageProps {
    searchParams: Promise<{
        searchTerm?: string;
        page?: string;
    }>;
}

export default async function AdminDashboardUsersPage({
  searchParams,
}: PageProps) {
  const query = await searchParams;

  const result = await getUsers({ query });

  // users is inside result.data
  const users = result.data?.users ?? [];

  // meta is also inside result.data
  const meta = result.data?.meta ?? {
    page: 1,
    limit: 10,
    total: 0,
    totalPage: 1,
  };

  return (
    <div>
      {/* User Management Section */}
      <section className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              User Management
            </h2>

            <p className="text-xs text-slate-500">
              Search by name or address.
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
          <SharedPagination
            currentPage={meta.page}
            totalPages={meta.totalPage}
          />
        </div>
      </section>
    </div>
  );
}
