import { BookOpen, CreditCard, Star } from "lucide-react";
import { getMe } from "@/service/getMe";
import { IUser } from "@/lib/types";
import { ProfileHeader } from "../../_components/shared/profileHeader";
import { BookingItemFull, PaymentItem, ProfileSection, ReviewItem } from "../../_components/shared/profile-section";

export default async function Page() {
    const result = await getMe();
    const user = result as IUser;

    const bookings = user.bookings || [];

    const payments = bookings
        .filter((booking) => booking.payment !== null)
        .map((booking) => booking.payment!);

    const reviews = bookings
        .filter((booking) => booking.review !== null)
        .map((booking) => booking.review!);

    const totalPayment = payments.reduce(
        (sum, payment) => sum + (payment.price || 0),
        0
    );

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 sm:py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Bookings</p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">
                            {bookings.length}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Payments</p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">
                            ${totalPayment.toFixed(2)}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Reviews</p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">
                            {reviews.length}
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

                    {/* Payments Section */}
                    <ProfileSection
                        title="Payments"
                        icon={<CreditCard className="w-5 h-5 text-green-600 dark:text-green-400" />}
                        count={payments.length}
                        isEmpty={payments.length === 0}
                    >
                        <div className="space-y-2">
                            {payments.map((payment) => (
                                <PaymentItem
                                    key={payment.id}
                                    id={payment.id}
                                    price={payment.price}
                                    date={payment.paidAt ?? ""}
                                    method={payment.method}
                                />
                            ))}
                        </div>
                    </ProfileSection>
                </div>

                {/* Reviews Section */}
                <div className="mt-6">
                    <ProfileSection
                        title="Reviews"
                        icon={<Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />}
                        count={reviews.length}
                        isEmpty={reviews.length === 0}
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

            </div>
        </main>
    );
}