import { Suspense } from "react";
import { SharedSearchBar } from "../_components/shared/SharedSearchBar";
import { TechnicianSkeleton } from "../_components/technician/TechnicianSkeleton";
import { TechnicianList } from "../_components/technician/TechnicianList";


export default async function TechnicansPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Technicians</h1>
          <p className="text-sm text-muted-foreground">
            Browse our Prominent Technician.
          </p>
        </div>
        <SharedSearchBar/>
      </div>

      <Suspense fallback={<TechnicianSkeleton />}>
        <TechnicianList searchParams={searchParams}/>
      </Suspense>
    </div>
  );
};
