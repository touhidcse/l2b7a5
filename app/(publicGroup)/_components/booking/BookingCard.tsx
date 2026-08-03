'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IBooking } from '@/lib/types';
import { BookingStatusBadge } from './BookingStatusBadge';
import { Calendar, Clock, MapPin, User, DollarSign, CreditCard, Star } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

interface BookingCardProps {
    booking: IBooking;
    onCancel?: (bookingId: string) => void;
    onPay?: (bookingId: string) => void;
    onReview?: (bookingId: string) => void;
    showActions?: boolean;
}

export function BookingCard({ booking, onCancel, onPay, onReview, showActions = true }: BookingCardProps) {
    const canCancel = booking.status === 'REQUESTED' || booking.status === 'ACCEPTED' || booking.status === 'PAID';
    const canPay = booking.status === 'ACCEPTED';
    const canReview = booking.status === 'COMPLETED' && !booking.review;

    return (
        <Card className="p-5 hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                {/* Left - Service Info */}
                <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                                {booking.service?.title || 'Service'}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {booking.service?.category?.type || 'Category'}
                            </p>
                        </div>
                        <BookingStatusBadge status={booking.status} />
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                            <User className="w-4 h-4 text-indigo-500" />
                            <span>{booking.technician?.user?.name || 'Technician'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                            <DollarSign className="w-4 h-4 text-green-500" />
                            <span className="font-medium">${booking.price.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span>{format(new Date(booking.bookingDate), 'MMM dd, yyyy')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                            <Clock className="w-4 h-4 text-orange-500" />
                            <span>
                                {format(new Date(booking.startAt), 'h:mm a')} - {format(new Date(booking.endAt), 'h:mm a')}
                            </span>
                        </div>
                    </div>

                    {/* Payment Info */}
                    {booking.payment && (
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                            <CreditCard className="w-4 h-4 text-purple-500" />
                            <span>
                                Payment: {booking.payment.method} - {booking.payment.status}
                                {booking.payment.paidAt && ` (${format(new Date(booking.payment.paidAt), 'MMM dd, yyyy')})`}
                            </span>
                        </div>
                    )}

                    {/* Review */}
                    {booking.review && (
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span>Rated {booking.review.rating}/5 - {booking.review.comment}</span>
                        </div>
                    )}
                </div>

                {/* Right - Actions */}
                {showActions && (
                    <div className="flex flex-wrap gap-2 sm:flex-col sm:min-w-[120px]">
                        {/* Pay Button */}
                        {canPay && onPay && (
                            <Button
                                onClick={() => onPay(booking.id)}
                                className="bg-green-600 hover:bg-green-700 text-white"
                                size="sm"
                            >
                                <CreditCard className="w-4 h-4 mr-1" />
                                Pay Now
                            </Button>
                        )}

                        {/* Cancel Button */}
                        {canCancel && onCancel && (
                            <Button
                                onClick={() => onCancel(booking.id)}
                                variant="destructive"
                                size="sm"
                            >
                                Cancel
                            </Button>
                        )}

                        {/* Review Button */}
                        {canReview && onReview && (
                            <Button
                                onClick={() => onReview(booking.id)}
                                variant="outline"
                                size="sm"
                                className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                            >
                                <Star className="w-4 h-4 mr-1" />
                                Leave Review
                            </Button>
                        )}

                        {/* View Details Link */}
                        <Link href={`/bookings/${booking.id}`} passHref>
                            <Button variant="ghost" size="sm" className="w-full">
                                View Details
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </Card>
    );
}