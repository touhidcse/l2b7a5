"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { ActionResponse, BookingStats, Category, UserItem, UserListMeta } from "@/lib/types";
import { CategoryFormOutput } from "@/lib/validations/category";

// Helper function to get Auth Headers via Cookies
const getAuthHeaders = async (): Promise<HeadersInit> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value || "";
  return {
    "Content-Type": "application/json",
    Cookie: `accessToken=${token}`,
  };
};

// 1. Fetch Global Booking Statistics
export async function getBookingStats(): Promise<ActionResponse<BookingStats>> {
  const headers = await getAuthHeaders();
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/bookings/stats`, {
    headers,
    cache: "no-store",
  });

  if (!res.ok) {
    return { success: false, message: "Failed to fetch booking statistics" };
  }

  const json = await res.json();
  return { success: json.success, message: json.message, data: json.data };
}

// 2. Fetch All Categories
export async function getAdminCategories(): Promise<ActionResponse<Category[]>> {
  const headers = await getAuthHeaders();
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/categories`, {
    headers,
    next: { tags: ["categories"] },
  });

  if (!res.ok) {
    return { success: false, message: "Failed to fetch categories" };
  }

  const json = await res.json();
  return {
    success: json.success,
    message: json.message,
    data: json.data?.allCategory || json.data || [],
  };
}

// 3. Create Category
export async function createCategory(
  payload: CategoryFormOutput
): Promise<ActionResponse<Category>> {
  const headers = await getAuthHeaders();
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/categories`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  const json = await res.json();

  if (!res.ok || !json.success) {
    return { success: false, message: json.message || "Failed to create category" };
  }

  revalidatePath("/admin-dashboard");
  return { success: true, message: json.message, data: json.data };
}

// 4. Fetch Users with Search & Pagination

export async function getUsers({ query, }: {
  query?: {
    searchTerm?: string;
    role?: string;
    isBan?: string;
    page?: string;
    limit?: string;
  };
}): Promise<
  ActionResponse<{
    users: UserItem[];
    meta: UserListMeta;
  }>
> {
  const headers = await getAuthHeaders();

  const params = new URLSearchParams();

  if (query?.searchTerm) {
    params.set("searchTerm", query.searchTerm);
  }

  if (query?.role && query.role !== "all") {
    params.set("role", query.role);
  }

  if (query?.isBan && query.isBan !== "all") {
    params.set("isBan", query.isBan);
  }

  params.set("page", query?.page || "1");
  params.set("limit", query?.limit || "10");

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/users?${params.toString()}`,
    {
      headers,
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return {
      success: false,
      message: "Failed to fetch users",
    };
  }

  const json = await res.json();

  return {
    success: json.success,
    message: json.message,
    data: {
      users: json.data?.users || json.data || [],
      meta: json.meta || json.data?.meta || {
        page: Number(query?.page || 1),
        limit: Number(query?.limit || 10),
        total: 0,
        totalPage: 1,
      },
    },
  };
}

// 5. Ban / Unban User
export async function toggleUserBanStatus(
  userId: string,
  isBan: boolean
): Promise<ActionResponse> {
  const headers = await getAuthHeaders();
  // const endpoint = isBan ? "unban" : "ban";
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/users/${userId}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ isBan: !isBan }),
  });

  const json = await res.json();

  if (!res.ok || !json.success) {
    return {
      success: false,
      message: json.message || `Failed to ${isBan ? "unban" : "ban"} user`,
    };
  }

  revalidatePath("/admin-dashboard");
  return {
    success: true,
    message: isBan ? "User unbanned successfully" : "User banned successfully",
  };
}