// import { Suspense } from 'react';
// import { TechnicianCard } from '../_components/technicians/TechnicianCard';
// import { TechnicianFilters } from '../_components/technicians/TechnicianFilters';
// import { TechnicianGridSkeleton } from '../_components/technicians/TechnicianSkeleton';

// async function getTechnicians(filters: any) {
//     const params = new URLSearchParams();
//     if (filters?.search) params.append('search', filters.search);
//     if (filters?.category) params.append('category', filters.category);
//     if (filters?.location) params.append('location', filters.location);
//     if (filters?.minRating) params.append('minRating', String(filters.minRating));
//     if (filters?.page) params.append('page', String(filters.page));
//     if (filters?.limit) params.append('limit', String(filters.limit));

//     const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:5000';
//     const response = await fetch(`${baseUrl}/api/technicians?${params.toString()}`, {
//         cache: 'no-store',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     if (!response.ok) {
//         throw new Error('Failed to fetch technicians');
//     }

//     return response.json();
// }

// async function TechnicianList({ searchParams }: { searchParams: any }) {
//     const params = await searchParams;
//     const result = await getTechnicians({
//         search: params?.search,
//         category: params?.category,
//         location: params?.location,
//         minRating: params?.minRating ? Number(params.minRating) : undefined,
//         page: params?.page ? Number(params.page) : 1,
//         limit: 10,
//     });

//     const technicians = result?.data || [];
//     const meta = result?.meta;

//     return (
//         <div className="space-y-4">
//             {technicians.length === 0 ? (
//                 <div className="text-center py-12">
//                     <h3 className="text-lg font-medium text-slate-900 dark:text-white">No technicians found</h3>
//                     <p className="text-slate-500 dark:text-slate-400 mt-1">Try adjusting your filters</p>
//                 </div>
//             ) : (
//                 technicians.map((technician: any) => (
//                     <TechnicianCard key={technician.id} technician={technician} />
//                 ))
//             )}
//         </div>
//     );
// }

// export default async function TechniciansPage({ searchParams }: { searchParams: any }) {
//     const params = await searchParams;

//     // Get categories for filter
//     const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:5000';
//     const categoriesResponse = await fetch(`${baseUrl}/api/categories`, {
//         cache: 'no-store',
//     });
//     const categoriesData = await categoriesResponse.json();
//     const categories = categoriesData?.data?.allCategory?.map((c: any) => c.type) || [];
//     const locations = ['Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Sylhet', 'Barishal', 'Rangpur', 'Mymensingh', 'Comilla'];

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <div className="mb-8">
//                 <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Find Technicians</h1>
//                 <p className="text-slate-500 dark:text-slate-400 mt-1">
//                     Browse and book verified home service professionals
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//                 <div className="lg:col-span-1">
//                     <TechnicianFilters
//                         onFilterChange={(filters) => {
//                             // Client-side navigation would go here
//                             console.log('Filters changed:', filters);
//                         }}
//                         initialFilters={params}
//                         categories={categories}
//                         locations={locations}
//                     />
//                 </div>

//                 <div className="lg:col-span-3">
//                     <Suspense fallback={<TechnicianGridSkeleton />}>
//                         <TechnicianList searchParams={searchParams} />
//                     </Suspense>
//                 </div>
//             </div>
//         </div>
//     );
// }