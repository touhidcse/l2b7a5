
import { IService, ITechnician } from "@/lib/types";
import { getServices } from "../../_actions/getService";

import SharedPagination from "../shared/SharedPagination";
import { getAllTechniciansWithFilter } from "../../_actions/getTechnicianWithFilter";
import { TechnicianCard } from "./TechnitianCard";



export async function TechnicianList({
    searchParams,
}: {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const query = await searchParams;
    const result = await getAllTechniciansWithFilter({ query });

    const technicians = result.data;
    const meta = result.meta;

    if (!result.success || !result.data?.length) {
        return (
            <p className="py-12 text-center text-muted-foreground">
                No Technician found.
            </p>
        );
    }

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {technicians.map((technician: ITechnician) => (
                    <TechnicianCard key={technician.id} technician={technician} />
                ))}
            </div>

            <SharedPagination
                currentPage={meta.page}
                totalPages={meta.totalPage}
            />
        </div>
    );
}