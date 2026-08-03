'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Home } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function PaymentSuccessPage() {
    useEffect(() => {
        toast.success('Payment completed successfully!');
    }, []);

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <Card className="max-w-md w-full p-8 text-center">
                <div className="flex justify-center mb-6">
                    <CheckCircle2 className="w-20 h-20 text-green-500" />
                </div>

                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Payment Successful! 🎉
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Your payment has been processed successfully. Your booking is now confirmed.
                </p>

                <div className="space-y-3">
                    <Link href="/customer-dashboard">
                        <Button className="w-full">
                            <Home className="w-4 h-4 mr-2" />
                            Go to Dashboard
                        </Button>
                    </Link>
                    <Link href="/bookings">
                        <Button variant="outline" className="w-full">
                            View My Bookings
                        </Button>
                    </Link>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                    A confirmation email has been sent to your registered email address.
                </p>
            </Card>
        </div>
    );
}