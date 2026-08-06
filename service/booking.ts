
"use server"
import { cookies } from "next/headers"

interface CreateBookingPayload {
    technicianId: string;
    serviceId: string;
    startAt: string;
    endAt: string;
}

export const createBooking = async ({
    technicianId,
    serviceId,
    startAt,
    endAt,
}: CreateBookingPayload) => {

    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")?.value || null;

    if (!accessToken) {
        return {
            success: false,
            message: "Pls, login to book this service!",
        }

    }

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/bookings`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Cookie: `accessToken=${accessToken}`,
            },
            body: JSON.stringify({
                technicianId,
                serviceId,
                startAt,
                endAt,
            }),
        }
    );

    const result = await res.json();

    console.log("Booking API Response:", result);
    console.log(res.status);
    console.log(res.ok);

    return result;
};
