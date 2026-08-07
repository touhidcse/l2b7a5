"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { BookingStatus, IAvailability, IBooking } from "@/lib/types";

export interface IApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

const getAuthHeaders = async (): Promise<HeadersInit> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value || "";
  return {
    "Content-Type": "application/json",
    Cookie: `accessToken=${token}`,
  };
};

export const updateTechnicianProfile = async (
  payload: { bio: string; experience: number; profilePhoto: string; location: string }
): Promise<IApiResponse> => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/technician/profile`, {
    method: "PUT",
    headers,
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (res.ok) revalidatePath("/technician");
  return {
    success: res.ok,
    message: data.message || (res.ok ? "Profile updated successfully" : "Failed to update profile"),
    data: data.data,
  };
};

export const saveTechnicianAvailability = async (
  availabilities: Array<{ day: string; startTime: string; endTime: string; isAvailable: boolean }>
): Promise<IApiResponse> => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/technician/availability`, {
    method: "POST",
    headers,
    body: JSON.stringify({ availabilities }),
  });

  const data = await res.json();
  if (res.ok) revalidatePath("/technician");
  return {
    success: res.ok,
    message: data.message || (res.ok ? "Availability saved" : "Failed to save availability"),
    data: data.data,
  };
};

export const getTechnicianBookings = async (): Promise<IApiResponse<IBooking[]>> => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/technician/bookings/`, {
    method: "GET",
    headers,
    cache: "no-store",
  });

  const data = await res.json();
  return {
    success: res.ok,
    message: data.message || "Bookings retrieved",
    data: Array.isArray(data) ? data : data.data || [],
  };
};

export const updateBookingStatus = async (
  bookingId: string,
  status: BookingStatus
): Promise<IApiResponse> => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/technician/bookings/${bookingId}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ status }),
  });

  const data = await res.json();
  if (res.ok) revalidatePath("/technician");
  return {
    success: res.ok,
    message: data.message || (res.ok ? `Booking marked as ${status}` : "Status update failed"),
    data: data.data,
  };
};