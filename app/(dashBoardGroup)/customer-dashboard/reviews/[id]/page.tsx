"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { LeaveReview } from "@/service/review";
import { toast } from "sonner";

const reviewSchema = z.object({
    bookingId: z.string().min(1, "Please select a booking to review."),
    rating: z.number({ message: "Please select a valid rating." })
        .min(1, "Rating must be at least 1 star.")
        .max(5, "Maximum rating is 5 stars."),
    comment: z.string().min(10, "Review comment must be at least 10 characters long."),
});

type ReviewFormData = z.infer<typeof reviewSchema>;


export default function ReviewSubmissionPage() {
    const searchParams = useSearchParams();
    const defaultBookingId = searchParams.get("bookingId") || "";

    const [serverSuccess, setServerSuccess] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ReviewFormData>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            bookingId: defaultBookingId,
            rating: 5,
            comment: "",
        },
    });

    const onSubmit = async (data: ReviewFormData) => {
        setServerError(null);
        setServerSuccess(false);

        try {  
            const result = await LeaveReview(data)
            
            if (!result.ok) throw new Error(result.message || "Failed to submit review.");

            toast.success("Review Given Successfully. Thank you for your feedback")
            
            setServerSuccess(true);
            reset({ bookingId: "", rating: 5, comment: "" });
        } catch (err: unknown) {
            if (err instanceof Error) {
                setServerError(err.message);
            } else {
                setServerError("An unexpected error occurred.");
            }
        }
    };

    return (
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800">Leave a Review</h2>
            <p className="mb-6 text-sm text-slate-500">Share your experience with the technician after job completion.</p>

            {serverSuccess && (
                <div className="mb-4 rounded-lg bg-emerald-50 p-4 text-sm font-medium text-emerald-800">
                    Thank you! Your review has been successfully submitted.
                </div>
            )}

            {serverError && (
                <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm font-medium text-red-800">
                    {serverError}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700">Booking ID</label>
                    <input
                        {...register("bookingId")}
                        placeholder="Enter or select Booking ID"
                        className="mt-1 w-full rounded-lg border border-slate-300 p-2.5 text-sm focus:border-blue-500 focus:outline-none"
                    />
                    {errors.bookingId && <p className="mt-1 text-xs text-red-600">{errors.bookingId.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700">Rating (1 to 5 Stars)</label>

                    <select
                        {...register("rating", { valueAsNumber: true })}
                        className="mt-1 w-full rounded-lg border border-slate-300 p-2.5 text-sm focus:border-blue-500 focus:outline-none"
                    >
                        <option value={5}>⭐⭐⭐⭐⭐ (5/5) - Excellent</option>
                        <option value={4}>⭐⭐⭐⭐ (4/5) - Very Good</option>
                        <option value={3}>⭐⭐⭐ (3/5) - Average</option>
                        <option value={2}>⭐⭐ (2/5) - Poor</option>
                        <option value={1}>⭐ (1/5) - Terrible</option>
                    </select>
                    {errors.rating && <p className="mt-1 text-xs text-red-600">{errors.rating.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700">Feedback / Review</label>
                    <textarea
                        {...register("comment")}
                        rows={4}
                        placeholder="Write details about the technician's service..."
                        className="mt-1 w-full rounded-lg border border-slate-300 p-2.5 text-sm focus:border-blue-500 focus:outline-none"
                    />
                    {errors.comment && <p className="mt-1 text-xs text-red-600">{errors.comment.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                    {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>
            </form>
        </div>
    );
}