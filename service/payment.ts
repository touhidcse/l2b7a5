"use server"


import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//My first choice
// export const createPaymentSession = async (bookingId: string) => {
//     const cookieStore = await cookies();
//     const accessToken = cookieStore.get("accessToken")?.value;

//     if (!accessToken) {
//         return {
//             success: false,
//             message: "Please login first",
//         };
//     }

    
//         const res = await fetch(
//             `${process.env.BACKEND_API_URL}/api/payments/create`,
//             {
//                 method: "POST", // Standard HTTP method for creating payment sessions
//                 headers: {
//                     "Content-Type": "application/json",
//                     Cookie: `accessToken=${accessToken}`,
//                 },
//                 body: JSON.stringify({ bookingId }), // Pass bookingId to backend
//                 cache: "no-store",
//             }
//         );

//          const result = await res.json();
    
//         if(result.success && result.data.checkoutUrl){
//             redirect(result.data.checkoutUrl)
//         }
//         console.log(result,"From _payments.ts ");
//         return result
// };

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