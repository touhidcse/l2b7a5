'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function PaymentCancelPage() {
    useEffect(() => {
        toast.error('Payment was cancelled');
    }, []);

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <Card className="max-w-md w-full p-8 text-center">
                <div className="flex justify-center mb-6">
                    <XCircle className="w-20 h-20 text-red-500" />
                </div>

                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Payment Cancelled
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Your payment was cancelled. You can try again whenever you&apos;re ready.
                </p>

                <div className="space-y-3">
                    <Link href="/customer-dashboard">
                        <Button className="w-full">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Return to Dashboard
                        </Button>
                    </Link>
                    <Link href="/bookings">
                        <Button variant="outline" className="w-full">
                            View My Bookings
                        </Button>
                    </Link>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                    If you encountered any issues, please contact support.
                </p>
            </Card>
        </div>
    );
}