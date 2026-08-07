
"use server"
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
        }
    );

    const result = await res.json();

    console.log("Booking API Response:", result);
    console.log(res.status);
    console.log(res.ok);

    return result;
};