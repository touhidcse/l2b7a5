"use server"

import { IUser } from "@/lib/types";
import { cookies } from "next/headers"

export const getMe = async ()=>{
    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")?.value || null;

    if(!accessToken){
        return{
            success:false,
            message: "User not logged in",
        }
    
    }
    
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`,{
        headers:{

            Cookie: `accessToken=${accessToken}`
        },
        cache: "no-store"
    })

    const result = await res.json()
    console.log("Result from getMe:", result);
    return result.data as IUser;
    
  
}
