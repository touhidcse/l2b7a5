'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    CheckCircle, 
    XCircle, 
    Clock, 
    Wrench, 
    User,
    Calendar,
    DollarSign
} from 'lucide-react';
import { IBooking, STATUS_COLORS, BookingStatus } from '@/lib/types';

interface TechnicianBookingTableProps {
    bookings: IBooking[];
    onUpdateStatus: (bookingId: string, status: BookingStatus) => void;
}

export function TechnicianBookingTable({ bookings, onUpdateStatus }: TechnicianBookingTableProps) {
    const getAvailableActions = (status: BookingStatus): { label: string; value: BookingStatus; color: string }[] => {
        const actions: Record<BookingStatus, { label: string; value: BookingStatus; color: string }[]> = {
            'REQUESTED': [
                { label: 'Accept', value: 'ACCEPTED', color: 'bg-green-600 hover:bg-green-700' },
                { label: 'Decline', value: 'DECLINED', color: 'bg-red-600 hover:bg-red-700' },
            ],
            'ACCEPTED': [
                { label: 'Start Job', value: 'IN_PROGRESS', color: 'bg-blue-600 hover:bg-blue-700' },
            ],
            'PAID': [
                { label: 'Start Job', value: 'IN_PROGRESS', color: 'bg-blue-600 hover:bg-blue-700' },
            ],
            'IN_PROGRESS': [
                { label: 'Complete Job', value: 'COMPLETED', color: 'bg-green-600 hover:bg-green-700' },
            ],
            'COMPLETED': [],
            'DECLINED': [],
            'CANCELLED': [],
        };
        return actions[status] || [];
    };

    if (bookings.length === 0) {
        return (
            <Card className="p-8 text-center">
                <div className="flex flex-col items-center">
                    <Clock className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-3" />
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
            {bookings.map((booking) => {
                const actions = getAvailableActions(booking.status);

                return (
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
                                        {booking.customer?.name || 'Customer'}
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
                                {booking.payment && (
                                    <div className="text-xs text-slate-500 mt-1">
                                        Payment: {booking.payment.status}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                {actions.map((action) => (
                                    <Button
                                        key={action.value}
                                        onClick={() => onUpdateStatus(booking.id, action.value)}
                                        size="sm"
                                        className={action.color + ' text-white'}
                                    >
                                        {action.label}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}