
"use server"
import { redirect } from 'next/navigation'
import { cookies } from "next/headers"

interface LeaveReviewPayload {
    bookingId: string;
    rating: number;
    comment: string;
}

export const LeaveReview = async ({
    bookingId,
    rating,
    comment
}: LeaveReviewPayload) => {

    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")?.value || null;

    if (!accessToken) {
        return {
            success: false,
            message: "Pls, login to book this service!",
        }

    }

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
                comment
            }),
            cache: "no-store"
            // cache: "force-cache",
            // next: {
            //     revalidate: 60 * 60 * 24,
            //     tags: ["customer-dashboard"]
            // }
        }
    );

    const result = await res.json();
    if (res) {
        redirect('/customer-dashboard')
    }
    return result;
};