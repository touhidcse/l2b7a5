'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { CreditCard, Loader2 } from 'lucide-react';
import { getErrorMessage, ApiResponse } from '@/lib/errorUtils';

interface PaymentButtonProps {
    bookingId: string;
    className?: string;
    variant?: 'default' | 'outline' | 'destructive' | 'ghost' | 'secondary';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    children?: React.ReactNode;
}

interface PaymentData {
    checkoutUrl?: string;
    sessionId?: string;
    payment?: {
        id: string;
        status: string;
    };
}

export function PaymentButton({
    bookingId,
    className = '',
    variant = 'default',
    size = 'default',
    children
}: PaymentButtonProps) {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        try {
            setLoading(true);

            const baseUrl = window.location.origin;
            const successUrl = `${baseUrl}/payment/success`;
            const cancelUrl = `${baseUrl}/payment/cancel`;

            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/payments/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    bookingId,
                    successUrl,
                    cancelUrl,
                }),
            });

            const result: ApiResponse<PaymentData> = await response.json();

            if (result.success && result.data?.checkoutUrl) {
                window.location.href = result.data.checkoutUrl;
            } else {
                toast.error(result.message || 'Failed to initiate payment');
            }
        } catch (error: unknown) {
            console.error('Payment error:', error);
            const errorMessage = getErrorMessage(error);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            onClick={handlePayment}
            disabled={loading}
            variant={variant}
            size={size}
            className={className}
        >
            {loading ? (
                <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                </>
            ) : (
                <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    {children || 'Pay Now'}
                </>
            )}
        </Button>
    );
}