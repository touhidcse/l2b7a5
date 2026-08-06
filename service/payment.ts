"use server"

import { IPayment } from "@/lib/types";
import { cookies } from "next/headers";

export const createPaymentSession = async (bookingId: string) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return {
            success: false,
            message: "Please login first",
        };
    }

    try {
        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/payments/create`,
            {
                method: "POST", // Standard HTTP method for creating payment sessions
                headers: {
                    "Content-Type": "application/json",
                    Cookie: `accessToken=${accessToken}`,
                },
                body: JSON.stringify({ bookingId }), // Pass bookingId to backend
                cache: "no-store",
            }
        );

        const result = await res.json();

        console.log("Payment Session Response:", result);

        if (!res.ok) {
            return {
                success: false,
                message: result.message || "Failed to initiate payment.",
            };
        }

        return result;
    } catch (err: unknown) {
        return {
            success: false,
            message: err instanceof Error ? err.message : "Failed to create payment session.",
        };
    }
};
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

    console.log("Booking API:", result);
    // or
    console.log("Result data 0", JSON.stringify(result.data[0], null, 2));

    return result;


};