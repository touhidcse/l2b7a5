
import { IService } from "@/lib/types";
import { getServices } from "../../_actions/getService";
import { ServiceCard } from "./ServiceCard";
import SharedPagination from "../shared/SharedPagination";



export async function ServiceList({
    searchParams,
}: {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const query = await searchParams;
    const result = await getServices({ query });

    const services = result.data;
    const meta = result.meta;

    if (!result.success || !result.data?.length) {
        return (
            <p className="py-12 text-center text-muted-foreground">
                No Service found.
            </p>
        );
    }

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service: IService) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>

            <SharedPagination
                currentPage={meta.page}
                totalPages={meta.totalPages}
            />
        </div>
    );
}