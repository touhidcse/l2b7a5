
"use server";

import { cookies } from "next/headers";

interface LeaveReviewPayload {
  bookingId: string;
  rating: number;
  comment: string;
}

export const LeaveReview = async ({
  bookingId,
  rating,
  comment,
}: LeaveReviewPayload) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "Please log in to leave a review!",
    };
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/reviews/${bookingId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: `accessToken=${accessToken}`,
        },
        body: JSON.stringify({
          bookingId,
          rating,
          comment,
        }),
        cache: "no-store",
      }
    );

    const result = await res.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Failed to connect to the server.",
    };
  }
};