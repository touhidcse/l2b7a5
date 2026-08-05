'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Eye, 
    CreditCard, 
    XCircle, 
    Star, 
    Wrench, 
    User,
    Calendar,
    DollarSign
} from 'lucide-react';
import { IBooking, STATUS_COLORS, BookingStatus } from '@/lib/types';

interface BookingTableProps {
    bookings: IBooking[];
    onCancel?: (bookingId: string) => void;
    onPay?: (bookingId: string) => void;
    onReview?: (bookingId: string) => void;
    showActions?: boolean;
}

export function BookingTable({ bookings, onCancel, onPay, onReview, showActions = true }: BookingTableProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const canCancel = (status: BookingStatus) => {
        return !['IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'DECLINED'].includes(status);
    };

    const canPay = (status: BookingStatus, hasPayment: boolean) => {
        return status === 'ACCEPTED' && !hasPayment;
    };

    const canReview = (status: BookingStatus, hasReview: boolean) => {
        return status === 'COMPLETED' && !hasReview;
    };

    if (bookings.length === 0) {
        return (
            <Card className="p-8 text-center">
                <div className="flex flex-col items-center">
                    <Calendar className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-3" />
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">No Bookings</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        You do not have any bookings yet.
                    </p>
                </div>
            </Card>
        );
    }

    return (
        <div className="space-y-3">
            {bookings.map((booking) => (
                <Card key={booking.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                                <Wrench className="w-4 h-4 text-slate-400" />
                                <span className="font-medium text-slate-900 dark:text-white">
                                    {booking.service?.title || 'Service'}
                                </span>
                                <Badge className={STATUS_COLORS[booking.status]}>
                                    {booking.status}
                                </Badge>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mt-1">
                                <span className="flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    {booking.technician?.user?.name || 'Technician'}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(booking.bookingDate).toLocaleDateString()}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <DollarSign className="w-3 h-3" />
                                    ${booking.price.toFixed(2)}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {showActions && (
                                <>
                                    {canPay(booking.status, !!booking.payment) && onPay && (
                                        <Button
                                            onClick={() => onPay(booking.id)}
                                            size="sm"
                                            className="bg-green-600 hover:bg-green-700 text-white"
                                        >
                                            <CreditCard className="w-3 h-3 mr-1" />
                                            Pay
                                        </Button>
                                    )}
                                    {canCancel(booking.status) && onCancel && (
                                        <Button
                                            onClick={() => onCancel(booking.id)}
                                            variant="destructive"
                                            size="sm"
                                        >
                                            <XCircle className="w-3 h-3 mr-1" />
                                            Cancel
                                        </Button>
                                    )}
                                    {canReview(booking.status, !!booking.review) && onReview && (
                                        <Button
                                            onClick={() => onReview(booking.id)}
                                            variant="outline"
                                            size="sm"
                                            className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                                        >
                                            <Star className="w-3 h-3 mr-1" />
                                            Review
                                        </Button>
                                    )}
                                </>
                            )}
                            <Link href={`/bookings/${booking.id}`}>
                                <Button variant="ghost" size="sm">
                                    <Eye className="w-3 h-3 mr-1" />
                                    View
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Expanded Details */}
                    {expandedId === booking.id && (
                        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                <div>
                                    <span className="text-slate-500">Service:</span>
                                    <span className="ml-2 text-slate-900 dark:text-white">
                                        {booking.service?.title}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-500">Category:</span>
                                    <span className="ml-2 text-slate-900 dark:text-white">
                                        {booking.service?.category?.type || 'N/A'}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-500">Technician:</span>
                                    <span className="ml-2 text-slate-900 dark:text-white">
                                        {booking.technician?.user?.name}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-500">Location:</span>
                                    <span className="ml-2 text-slate-900 dark:text-white">
                                        {booking.technician?.location || 'N/A'}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-500">Start:</span>
                                    <span className="ml-2 text-slate-900 dark:text-white">
                                        {new Date(booking.startAt).toLocaleString()}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-500">End:</span>
                                    <span className="ml-2 text-slate-900 dark:text-white">
                                        {new Date(booking.endAt).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </Card>
            ))}
        </div>
    );
}