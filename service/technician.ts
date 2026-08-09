"use server"

export const getTechnicianProfileWithReviews= async (id:string)=>{

    
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/technicians/${id}`,{
         cache: "force-cache",
            next: {
                revalidate: 60 * 60 * 24,
                tags: ["technicians"]
            }

    })

    const result = await res.json()
    return result;
  
}
