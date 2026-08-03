// "use server";

// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import jwt from "jsonwebtoken";

// export type ActionState = {
//     success: boolean;
//     message: string;
//     errors?: Record<string, string[]>;
//     data?: unknown;
//     redirectTo?: string;
// };

// const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:5000";

// export async function loginAction(
//     redirectTo: string,
//     prevState: ActionState | null,
//     formData: FormData
// ): Promise<ActionState> {
//     const email = formData.get("email") as string;
//     const password = formData.get("password") as string;

//     if (!email || !password) {
//         return {
//             success: false,
//             message: "Email and password are required",
//         };
//     }

//     try {
//         const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email, password }),
//         });

//         const result = await res.json();

//         if (!result.success) {
//             return {
//                 success: false,
//                 message: result.message || "Login failed",
//             };
//         }

//         const cookieStore = await cookies();
//         cookieStore.set("accessToken", result.data.accessToken, {
//             httpOnly: true,
//             maxAge: 60 * 60 * 24,
//             sameSite: "lax",
//         });
//         cookieStore.set("refreshToken", result.data.refreshToken, {
//             httpOnly: true,
//             maxAge: 60 * 60 * 24 * 7,
//             sameSite: "lax",
//         });

//         const decoded = jwt.decode(result.data.accessToken) as { role: string };
//         const roleMap: Record<string, string> = {
//             CUSTOMER: "/customer-dashboard",
//             ADMIN: "/admin-dashboard",
//             TECHNICIAN: "/technician-dashboard",
//         };

//         const path = redirectTo?.startsWith("/") ? redirectTo : roleMap[decoded?.role] || "/";

//         return {
//             success: true,
//             message: "Login successful",
//             redirectTo: path,
//             data: result.data,
//         };
//     } catch (error) {
//         return {
//             success: false,
//             message: error instanceof Error ? error.message : "Something went wrong",
//         };
//     }
// }

// export async function registrationAction(
//     redirectTo: string,
//     prevState: ActionState | null,
//     formData: FormData
// ): Promise<ActionState> {
//     const name = formData.get("name") as string;
//     const email = formData.get("email") as string;
//     const password = formData.get("password") as string;
//     const confirmPassword = formData.get("confirmPassword") as string;
//     const role = formData.get("role") as string;

//     if (!name || !email || !password || !confirmPassword || !role) {
//         return {
//             success: false,
//             message: "All fields are required",
//         };
//     }

//     if (password !== confirmPassword) {
//         return {
//             success: false,
//             message: "Passwords don't match",
//         };
//     }

//     try {
//         const res = await fetch(`${BACKEND_URL}/api/users/register`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name, email, password, role }),
//         });

//         const result = await res.json();

//         if (!result.success) {
//             return {
//                 success: false,
//                 message: result.message || "Registration failed",
//             };
//         }

//         const cookieStore = await cookies();
//         cookieStore.set("accessToken", result.data.accessToken, {
//             httpOnly: true,
//             maxAge: 60 * 60 * 24,
//             sameSite: "lax",
//         });
//         cookieStore.set("refreshToken", result.data.refreshToken, {
//             httpOnly: true,
//             maxAge: 60 * 60 * 24 * 7,
//             sameSite: "lax",
//         });

//         const decoded = jwt.decode(result.data.accessToken) as { role: string };
//         const roleMap: Record<string, string> = {
//             CUSTOMER: "/customer-dashboard",
//             ADMIN: "/admin-dashboard",
//             TECHNICIAN: "/technician-dashboard",
//         };

//         const path = redirectTo?.startsWith("/") ? redirectTo : roleMap[decoded?.role] || "/";

//         return {
//             success: true,
//             message: "Registration successful",
//             redirectTo: path,
//             data: result.data,
//         };
//     } catch (error) {
//         return {
//             success: false,
//             message: error instanceof Error ? error.message : "Something went wrong",
//         };
//     }
// }
"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import jwt, { JwtPayload } from "jsonwebtoken"


export const loginAction = async (
    redirectTo:string,
    formData:FormData
) => {


    const email = formData.get("email");
    const password = formData.get("password");


    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/auth/login`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }
    );


    const result = await res.json();



    if(result.success){

        const cookieStore = await cookies();


        cookieStore.set(
            "accessToken",
            result.data.accessToken,
            {
                httpOnly:true,
                maxAge:60*60*24,
                sameSite:"lax"
            }
        );


        cookieStore.set(
            "refreshToken",
            result.data.refreshToken,
            {
                httpOnly:true,
                maxAge:60*60*24*7,
                sameSite:"lax"
            }
        );



        const decodedToken =
        jwt.decode(result.data.accessToken) as JwtPayload;



        if(redirectTo){
            redirect(redirectTo);
        }


        if(decodedToken.role==="CUSTOMER"){
            redirect("/customer-dashboard");
        }

        if(decodedToken.role==="ADMIN"){
            redirect("/admin-dashboard");
        }

        if(decodedToken.role==="TECHNICIAN"){
            redirect("/technician-dashboard");
        }

    }


    return result;

}


export async function registrationAction(
    redirectTo: string,
    formData: FormData
) {

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;



    try {

        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/users/register`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    password,
                    role
                })
            }
        );


        const result = await res.json();



        if(!result.success){

            return {
                success:false,
                message:
                result.message || "Registration failed"
            };

        }



        const cookieStore = await cookies();



        cookieStore.set(
            "accessToken",
            result.data.accessToken,
            {
                httpOnly:true,
                maxAge:60*60*24,
                sameSite:"lax"
            }
        );



        cookieStore.set(
            "refreshToken",
            result.data.refreshToken,
            {
                httpOnly:true,
                maxAge:60*60*24*7,
                sameSite:"lax"
            }
        );



        const decoded =
        jwt.decode(result.data.accessToken) as {
            role:string
        };



        const roleRedirect = {

            CUSTOMER:"/customer-dashboard",

            ADMIN:"/admin-dashboard",

            TECHNICIAN:"/technician-dashboard"

        };



        const path =
        redirectTo &&
        redirectTo.startsWith("/")
        ?
        redirectTo
        :
        roleRedirect[decoded.role as keyof typeof roleRedirect];



        redirect(path || "/");



    }
    catch(error){

        return {

            success:false,

            message:
            error instanceof Error
            ?
            error.message
            :
            "Something went wrong"

        };

    }

}