"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Create Stripe Payment session

export const createPaymentSession = async (bookingId: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify({ bookingId }),
      cache: "no-store",
    }
  );

  const result = await res.json();

  const checkoutUrl = result.url || result.data?.checkoutUrl || result.data?.url;

  if (result.success && checkoutUrl) {
    // Throws NEXT_REDIRECT exception intentionally
    redirect(checkoutUrl);
  }

  return result;
};

// get user payment history

export const getPaymentHistory = async () => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return {
            success: false,
            message: "Please login first",
            data: []
        };
    }

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/payments`,
        {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            cache: "no-store"
        }
    );


    const result = await res.json();

    return result;


};