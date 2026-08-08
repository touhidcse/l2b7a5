
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

    return result;
};


export const cancelBooking = async (bookingId: string) => {

    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")?.value || null;

    if (!accessToken) {
        return {
            success: false,
            message: "Pls, login to cancel this booking!",
        }

    }

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/bookings/cancel/${bookingId}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Cookie: `accessToken=${accessToken}`,
            },
            body: JSON.stringify({bookingId}),
        }
    );

    const result = await res.json();

    console.log("Cancel Booking API Response:", result);

    return result;
};


export const getCustomerBookings = async () => {
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
        `${process.env.BACKEND_API_URL}/api/bookings`,
        {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            cache: "no-store"
        }
    );


    const result = await res.json();

    console.log("Booking API GetcustomerBooking from booking.ts:", result);

    return result;


};