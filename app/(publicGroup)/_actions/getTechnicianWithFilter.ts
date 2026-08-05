"use server"

export const getAllTechniciansWithFilter = async ({
    query,
}: {
    query?: { [key: string]: string | string[] | undefined };
}) => {

    const params = new URLSearchParams();
   
    if (query && query.searchTerm) {
        params.set("searchTerm", query.searchTerm as string)
    }
    if (query?.type) {
        params.set("type", query.type as string);
    }

    if (query?.location) {
        params.set("location", query.location as string);
    }

    if (query?.rating) {
        params.set("rating", query.rating as string);
    }

    if (query?.page) {
        params.set("page", query.page as string);
    }

    params.set(
        "limit",
        query?.limit ? query.limit as string : "9"
    );

  

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/technicians?${params.toString()}`,
        {
            cache: "no-store"
            // cache: "force-cache",
            // next: {
            //     revalidate: 60 * 60 * 6,
            //     tags: ["services"],
            // },
        }
    );


    return res.json();
};