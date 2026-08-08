import { BookOpen, CreditCard, Star } from "lucide-react";
import { ITechnician } from "@/lib/types";
import { ProfileHeader } from "../../_components/profile/profileHeader";
import { BookingItemFull, PaymentItem, ProfileSection, ReviewItem } from "../../_components/profile/profile-section";
import { getTechnicianProfileWithReviews } from "@/service/technician";
import BookingSection from "../../_components/booking/BookingSection";
import { TechnicianAbout } from "../../_components/technician/TechnicianAbout";

export default async function TechnicianProfilePage({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;

    // fetch technician
    const result = await getTechnicianProfileWithReviews(id);
    const technician = result.data as ITechnician

    if (!result.success || !result.data) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Technician Not Found
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    The technician you are looking for does not exist or has been removed.
                </p>
            </div>
        )
    }

    const bio = technician.bio;
    const bookings = technician.bookings ?? [];

    // Total completed jobs
    const completedBookings = bookings.filter( booking => booking.status === "COMPLETED");

    // Total earning
    const totalEarning = completedBookings.reduce((sum, booking) => sum + (booking.price ?? 0),0);

    // Reviews received by technician (can be empty)
    const reviews = technician.reviews ?? [];

    // Total reviews (can be 0)
    const totalReviews = reviews.length;

    // Services and availability - Always fetch these
    const services = technician.services ?? [];
    const availability = technician.availability ?? [];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 sm:py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                <ProfileHeader user={technician.user}/>
                 {/* Bio Section */}
                 <TechnicianAbout technician={technician}/>
                 
                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Bookings</p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">
                            {bookings.length}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Earnings</p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">
                            ${totalEarning.toFixed(2)}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Reviews</p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">
                            {totalReviews}
                        </p>
                    </div>
                </div>

                {/* Bookings & Payments Section */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Bookings Section */}
                    <ProfileSection
                        title="Bookings"
                        icon={<BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
                        count={bookings.length}
                        isEmpty={bookings.length === 0}
                    >
                        <div className="space-y-2">
                            {bookings.map((booking) => (
                                <BookingItemFull key={booking.id} booking={booking} />
                            ))}
                        </div>
                    </ProfileSection>

                    {/* Earnings Section */}
                    <ProfileSection
                        title="Earnings"
                        icon={<CreditCard className="w-5 h-5 text-green-600 dark:text-green-400" />}
                        count={completedBookings.length}
                        isEmpty={completedBookings.length === 0}
                    >
                        <div className="space-y-3">
                            {completedBookings.map((booking)=>(
                                <div key={booking.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-white">
                                            {booking.service?.title || "Service"}
                                        </p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            {new Date(booking.bookingDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <span className="font-semibold text-green-600 dark:text-green-400">
                                        ${booking.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </ProfileSection>
                </div>

                {/* Reviews Section - Only show if there are reviews */}
                {reviews.length > 0 && (
                    <div className="mt-6">
                        <ProfileSection
                            title="Reviews"
                            icon={<Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />}
                            count={reviews.length}
                            isEmpty={false}
                        >
                            <div className="space-y-2">
                                {reviews.map((review) => (
                                    <ReviewItem
                                        key={review.id}
                                        id={review.id}
                                        rating={review.rating}
                                        date={review.reviewDate}
                                        comment={review.comment}
                                    />
                                ))}
                            </div>
                        </ProfileSection>
                    </div>
                )}

                {/* Booking Section - Always show this */}
                <BookingSection 
                    technicianId={technician.id}
                    services={services}
                    availability={availability}
                />

            </div>
        </main>
    );
}