'use client';

import { Card } from '@/components/ui/card';
import { IDashboardStats } from '@/lib/types';
import { 
    Calendar, 
    CheckCircle, 
    Clock, 
    XCircle, 
    DollarSign,
    AlertCircle,
    TrendingUp
} from 'lucide-react';

interface DashboardStatsProps {
    stats: IDashboardStats;
    role: 'CUSTOMER' | 'TECHNICIAN' | 'ADMIN';
}

export function DashboardStats({ stats, role }: DashboardStatsProps) {
    const isCustomer = role === 'CUSTOMER';
    const isTechnician = role === 'TECHNICIAN';

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <Card className="p-4 text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">Total</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    {stats.totalBookings}
                </p>
                <p className="text-xs text-slate-400">Bookings</p>
            </Card>

            <Card className="p-4 text-center border-green-200 dark:border-green-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">Completed</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {stats.completedBookings}
                </p>
                <p className="text-xs text-slate-400">Bookings</p>
            </Card>

            <Card className="p-4 text-center border-yellow-200 dark:border-yellow-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">Pending</p>
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                    {stats.pendingBookings}
                </p>
                <p className="text-xs text-slate-400">Bookings</p>
            </Card>

            <Card className="p-4 text-center border-red-200 dark:border-red-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">Cancelled</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {stats.cancelledBookings}
                </p>
                <p className="text-xs text-slate-400">Bookings</p>
            </Card>

            {(isCustomer || isTechnician) && (
                <Card className="p-4 text-center border-indigo-200 dark:border-indigo-800">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {isCustomer ? 'Spent' : 'Earnings'}
                    </p>
                    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        ${(isCustomer ? stats.totalSpent : stats.totalEarnings || 0).toFixed(2)}
                    </p>
                    <p className="text-xs text-slate-400">Total</p>
                </Card>
            )}

            {stats.completionRate !== undefined && (
                <Card className="p-4 text-center border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Completion Rate</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {stats.completionRate}%
                    </p>
                    <p className="text-xs text-slate-400">Rate</p>
                </Card>
            )}
        </div>
    );
}