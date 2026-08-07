"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { UserItem } from "@/lib/types";
import { toggleUserBanStatus } from "@/service/adminActions";

interface Props {
  users: UserItem[];
}

export default function UserManagementTable({ users }: Props) {
  const [isPending, startTransition] = useTransition();

  const handleToggleBan = (userId: string, currentBanStatus: boolean) => {
    startTransition(() => {
      toggleUserBanStatus(userId, currentBanStatus).then((res) => {
        if (res.success) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      });
    });
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm text-slate-600">
        <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-700">
          <tr>
            <th className="px-4 py-3">User</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Address</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-slate-50/50">
              <td className="px-4 py-3 font-medium text-slate-900">
                {user.name}
                <span className="block text-xs font-normal text-slate-400">{user.email}</span>
              </td>
              <td className="px-4 py-3">{user.role}</td>
              <td className="px-4 py-3">{user.address || "N/A"}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${
                    user.isBan
                      ? "bg-rose-100 text-rose-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {user.isBan ? "Banned" : "Active"}
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <button
                  disabled={isPending}
                  onClick={() => handleToggleBan(user.id, user.isBan)}
                  className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
                    user.isBan
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-rose-600 text-white hover:bg-rose-700"
                  } disabled:opacity-50`}
                >
                  {user.isBan ? "Unban" : "Ban"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}