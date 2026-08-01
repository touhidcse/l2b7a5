'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, CreditCard, Star, AlertCircle } from 'lucide-react'
import { BookingItemProps, IBooking, NavbarProps, PaymentItemProps, ReviewItemProps, SectionProps } from '@/lib/types'

export function ProfileSection({
  title,
  icon,
  count,
  children,
  isEmpty = false,
}: SectionProps) {
  return (
    <Card className="p-6 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {count} {count === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <AlertCircle className="w-10 h-10 text-slate-400 dark:text-slate-600 mb-2" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No {title.toLowerCase()} yet
          </p>
        </div>
      ) : (
        children
      )}
    </Card>
  )
}


export function BookingItem({ booking}: BookingItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg mb-2 last:mb-0">
      <div className="flex-1">
        {/* <p className="font-large text-slate-900 dark:text-white">
          {serviceCategory || `Booking #${id.slice(0, 8)}`}
        </p> */}
        <p className="font-medium text-slate-900 dark:text-white">
          {booking.status|| `Booking #${booking.slice(0, 8)}`}
        </p>
        {booking.bookingDate && (
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {new Date(booking.bookingDate).toLocaleDateString()}
          </p>
        )}
      </div>
      {booking.status && (
        <Badge
          variant={
            booking.status === 'completed'
              ? 'default'
              : booking.status === 'pending'
                ? 'secondary'
                : 'destructive'
          }
          className="text-xs"
        >
          {booking.status}
        </Badge>
      )}
    </div>
  )
}


export function PaymentItem({ id, price, date, method }: PaymentItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg mb-2 last:mb-0">
      <div className="flex-1">
        <p className="font-medium text-slate-900 dark:text-white">
          {method || 'Payment'}
        </p>
        {date && (
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {new Date(date).toLocaleDateString()}
          </p>
        )}
      </div>
      {price && (
        <Badge variant="outline" className="font-semibold">
          ${price.toFixed(2)}
        </Badge>
      )}
    </div>
  )
}

export function ReviewItem({ id, rating, date, comment }: ReviewItemProps) {
  return (
    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg mb-2 last:mb-0">
      <div className="flex items-start justify-between mb-2">
        <p className="font-medium text-slate-900 dark:text-white">
          {'Review'}
        </p>
        {rating && (
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-slate-300 dark:text-slate-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      {date && (
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
          {new Date(date).toLocaleDateString()}
        </p>
      )}
      {comment && (
        <p className="text-sm text-slate-700 dark:text-slate-300">{comment}</p>
      )}
    </div>
  )
}
