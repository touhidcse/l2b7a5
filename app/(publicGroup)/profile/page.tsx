import { BookOpen, CreditCard, Star } from 'lucide-react'
import { ProfileHeader } from '../_components/profile/profileHeader'
import { BookingItem, PaymentItem, ProfileSection, ReviewItem } from '../_components/profile/profile-section'

// Sample profile data
const profile = {
  id: 'f12c8a9f-ac6a-4d84-8f0a-051744e211bf',
  email: 'level61@programming-hero.com',
  name: 'Iqbal',
  role: 'CUSTOMER' as const,
  phone: null,
  address: null,
  createdAt: '2026-07-19T07:10:31.575Z',
  updatedAt: '2026-07-19T07:11:17.257Z',
  isBan: false,
  bookings: [
    {
      id: 'booking-1',
      serviceName: 'Home Cleaning',
      date: '2026-07-25T10:00:00Z',
      status: 'completed',
    },
    {
      id: 'booking-2',
      serviceName: 'Plumbing Repair',
      date: '2026-07-28T14:00:00Z',
      status: 'pending',
    },
    {
      id: 'booking-3',
      serviceName: 'Electrical Inspection',
      date: '2026-08-02T09:00:00Z',
      status: 'upcoming',
    },
  ],
  payments: [
    {
      id: 'payment-1',
      amount: 150,
      date: '2026-07-20T10:00:00Z',
      method: 'Credit Card',
    },
    {
      id: 'payment-2',
      amount: 200,
      date: '2026-07-25T14:00:00Z',
      method: 'Debit Card',
    },
  ],
  reviews: [
    {
      id: 'review-1',
      title: 'Excellent Service',
      rating: 5,
      date: '2026-07-21T10:00:00Z',
      comment: 'The cleaner was professional and thorough. Highly recommended!',
    },
    {
      id: 'review-2',
      title: 'Great Experience',
      rating: 4,
      date: '2026-07-26T10:00:00Z',
      comment: 'Good work, arrived on time.',
    },
  ],
  technicianProfile: null,
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <ProfileHeader
          name={profile.name}
          email={profile.email}
          role={profile.role}
          phone={profile.phone}
          address={profile.address}
          createdAt={profile.createdAt}
          isBan={profile.isBan}
        />

        {/* Stats and Details Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Bookings</p>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {profile.bookings?.length || 0}
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Payments</p>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              ${profile.payments?.reduce((sum, p) => sum + (p.amount || 0), 0).toFixed(2) || '0.00'}
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Reviews</p>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {profile.reviews?.length || 0}
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bookings Section */}
          <ProfileSection
            title="Bookings"
            icon={<BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
            count={profile.bookings?.length || 0}
            isEmpty={!profile.bookings || profile.bookings.length === 0}
          >
            <div className="space-y-2">
              {profile.bookings?.map((booking) => (
                <BookingItem
                  key={booking.id}
                  id={booking.id}
                  serviceName={booking.serviceName}
                  date={booking.date}
                  status={booking.status}
                />
              ))}
            </div>
          </ProfileSection>

          {/* Payments Section */}
          <ProfileSection
            title="Payments"
            icon={<CreditCard className="w-5 h-5 text-green-600 dark:text-green-400" />}
            count={profile.payments?.length || 0}
            isEmpty={!profile.payments || profile.payments.length === 0}
          >
            <div className="space-y-2">
              {profile.payments?.map((payment) => (
                <PaymentItem
                  key={payment.id}
                  id={payment.id}
                  amount={payment.amount}
                  date={payment.date}
                  method={payment.method}
                />
              ))}
            </div>
          </ProfileSection>
        </div>

        {/* Reviews Section - Full Width */}
        <div className="mt-6">
          <ProfileSection
            title="Reviews"
            icon={<Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />}
            count={profile.reviews?.length || 0}
            isEmpty={!profile.reviews || profile.reviews.length === 0}
          >
            <div className="space-y-2">
              {profile.reviews?.map((review) => (
                <ReviewItem
                  key={review.id}
                  id={review.id}
                  title={review.title}
                  rating={review.rating}
                  date={review.date}
                  comment={review.comment}
                />
              ))}
            </div>
          </ProfileSection>
        </div>
      </div>
    </main>
  )
}
