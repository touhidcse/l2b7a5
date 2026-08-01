import { BookOpen, CreditCard, Star } from "lucide-react";
import { ProfileHeader } from "../_components/profile/profileHeader";
import {
  BookingItem,
  PaymentItem,
  ProfileSection,
  ReviewItem,
} from "../_components/profile/profile-section";
import { getMe } from "@/service/getMe";
import { IUser } from "@/lib/types";


const result = await getMe();
const user = result as IUser;


export default function Page() {

  const bookings = user.data.bookings;


  const payments = bookings
    .filter((booking) => booking.payment !== null)
    .map((booking) => booking.payment!);


  const reviews = bookings
    .filter((booking) => booking.review !== null)
    .map((booking) => booking.review!);


  const paymentDate = user.data.bookings
    .filter((booking) => booking.payment !== null)
    .map((booking) => booking.payment!);


  const totalPayment = payments.reduce(
    (sum, payment) => sum + (payment.price || 0),
    0
  );

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 sm:py-12">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <ProfileHeader user={user} />

        {/* Stats */}

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
            <p>Total Bookings</p>

            <p className="text-3xl font-bold">
              {bookings.length}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-4">

            <p>Total Payments</p>

            <p className="text-3xl font-bold">
              ${totalPayment.toFixed(2)}
            </p>

          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-4">

            <p>Total Reviews</p>

            <p className="text-3xl font-bold">
              {reviews.length}
            </p>

          </div>

        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Booking Section */}

          <ProfileSection
            title="Bookings"
            icon={<BookOpen className="w-5 h-5" />}
            count={bookings.length}
            isEmpty={bookings.length === 0}
          >
            <div className="space-y-2">

              {
                bookings.map((booking) => (

                  <BookingItem key={booking.id} booking={booking} />

                ))
              }


            </div>


          </ProfileSection>





          {/* Payment Section */}


          <ProfileSection

            title="Payments"

            icon={<CreditCard className="w-5 h-5" />}

            count={payments.length}

            isEmpty={payments.length === 0}

          >


            <div className="space-y-2">

              {
                paymentDate.map((payment) => (

                  <PaymentItem

                    key={payment.id}

                    id={payment.id}

                    price={payment.price}

                    date={payment.paidAt ?? ""}

                    method={payment.method}

                  />

                ))
              }


            </div>


          </ProfileSection>



        </div>






        {/* Reviews */}


        <div className="mt-6">

          <ProfileSection

            title="Reviews"

            icon={<Star className="w-5 h-5" />}

            count={reviews.length}

            isEmpty={reviews.length === 0}

          >


            <div className="space-y-2">


              {
                reviews.map((review) => (

                  <ReviewItem

                    key={review.id}

                    id={review.id}

                    rating={review.rating}

                    date={review.reviewDate}

                    comment={review.comment}

                  />

                ))
              }


            </div>


          </ProfileSection>


        </div>


      </div>

    </main>
  );
}