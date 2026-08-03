'use client';

import { Badge } from '@/components/ui/badge';
import { IBooking } from '@/lib/types';

interface BookingStatusBadgeProps {
    status: IBooking['status'];
    className?: string;
}

const statusConfig: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info' | 'purple'; className: string }> = {
    REQUESTED: {
        label: 'Requested',
        variant: 'warning',
        className: 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30',
    },
    ACCEPTED: {
        label: 'Accepted',
        variant: 'info',
        className: 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30',
    },
    DECLINED: {
        label: 'Declined',
        variant: 'destructive',
        className: 'bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30',
    },
    PAID: {
        label: 'Paid',
        variant: 'purple',
        className: 'bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/30',
    },
    IN_PROGRESS: {
        label: 'In Progress',
        variant: 'success',
        className: 'bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30',
    },
    COMPLETED: {
        label: 'Completed',
        variant: 'secondary',
        className: 'bg-gray-500/15 text-gray-700 dark:text-gray-400 border-gray-500/30',
    },
    CANCELLED: {
        label: 'Cancelled',
        variant: 'destructive',
        className: 'bg-red-700/15 text-red-800 dark:text-red-500 border-red-700/30',
    },
};

export function BookingStatusBadge({ status, className = '' }: BookingStatusBadgeProps) {
    const config = statusConfig[status] || statusConfig.REQUESTED;

    return (
        <Badge className={`${config.className} ${className}`}>
            {config.label}
        </Badge>
    );
}