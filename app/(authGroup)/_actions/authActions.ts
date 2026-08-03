"use server"

import { cookies } from "next/headers"
import jwt, { JwtPayload } from "jsonwebtoken"


export const loginAction = async (
    redirectTo: string,
    formData: FormData
) => {

    const email = formData.get("email");
    const password = formData.get("password");


    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }
    );


    const result = await res.json();


    if (!result.success) {
        return {
            success: false,
            message: result.message || "Login failed"
        };
    }



    const cookieStore = await cookies();


    cookieStore.set(
        "accessToken",
        result.data.accessToken,
        {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            sameSite: "lax"
        }
    );


    cookieStore.set(
        "refreshToken",
        result.data.refreshToken,
        {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "lax"
        }
    );



    const decodedToken = jwt.decode(
        result.data.accessToken
    ) as JwtPayload;



    let path = "/";


    if (redirectTo && redirectTo.startsWith("/")) {

        path = redirectTo;

    } 
    else if (decodedToken.role === "CUSTOMER") {

        path = "/customer-dashboard";

    } 
    else if (decodedToken.role === "ADMIN") {

        path = "/admin-dashboard";

    } 
    else if (decodedToken.role === "TECHNICIAN") {

        path = "/technician-dashboard";

    }



    return {
        success: true,
        message: "Login successful",
        redirectTo: path,
    };

};





export const registrationAction = async (
    redirectTo: string,
    formData: FormData
) => {


    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;



    try {


        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/users/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role
                })
            }
        );



        const result = await res.json();



        if (!result.success) {

            return {
                success: false,
                message:
                    result.message || "Registration failed"
            };

        }




        const cookieStore = await cookies();



        cookieStore.set(
            "accessToken",
            result.data.accessToken,
            {
                httpOnly: true,
                maxAge: 60 * 60 * 24,
                sameSite: "lax"
            }
        );



        cookieStore.set(
            "refreshToken",
            result.data.refreshToken,
            {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: "lax"
            }
        );



        const decoded = jwt.decode(
            result.data.accessToken
        ) as JwtPayload;



        let path = "/";



        if (redirectTo && redirectTo.startsWith("/")) {

            path = redirectTo;

        }
        else if (decoded.role === "CUSTOMER") {

            path = "/customer-dashboard";

        }
        else if (decoded.role === "ADMIN") {

            path = "/admin-dashboard";

        }
        else if (decoded.role === "TECHNICIAN") {

            path = "/technician-dashboard";

        }



        return {
            success: true,
            message: "Registration successful",
            redirectTo: path,
        };



    } catch (error) {


        return {
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
        };

    }

};