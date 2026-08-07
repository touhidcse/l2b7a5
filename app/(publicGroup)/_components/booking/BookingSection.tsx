"use client";

import { useState } from "react";
import { Calendar, Clock, AlertCircle, CheckCircle2, Info } from "lucide-react";
import { IService, IAvailability } from "@/lib/types";
import { createBooking } from "@/service/booking";
import { toast } from "sonner";
// import toast from "react-hot-toast";


interface BookingSectionProps {
    technicianId: string;
    services: IService[];
    availability: IAvailability[];
}

interface TimeSlot {
    startTime: string;
    endTime: string;
    label: string;
}

export default function BookingSection({
    technicianId,
    services,
    availability,
}: BookingSectionProps) {
    const [selectedService, setSelectedService] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Validate availability - Technician must have at least one available slot
    const hasAvailability = availability && availability.length > 0;
    const hasServices = services && services.length > 0;

    // Get only available days
    const availableDays = availability.filter(a => a.isAvailable);

    // Generate next 14 days
    const getAvailableDates = () => {
        const dates: { date: string; label: string; dayName: string }[] = [];
        const today = new Date();

        for (let i = 1; i <= 14; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);

            const dayNames = [
                "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY",
                "THURSDAY", "FRIDAY", "SATURDAY"
            ];

            const dayName = dayNames[date.getDay()];
            const dateStr = date.toISOString().split("T")[0];

            // Check if technician is available on this day
            const dayAvailability = availableDays.find(
                (a) => a.day === dayName
            );

            if (dayAvailability) {
                dates.push({
                    date: dateStr,
                    label: date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                    }),
                    dayName,
                });
            }
        }

        return dates;
    };

    // Generate time slots based on availability
    const generateTimeSlots = (date: string, dayName: string): TimeSlot[] => {
        const dayAvailability = availableDays.find(
            (a) => a.day === dayName
        );

        if (!dayAvailability || !dayAvailability.startTime || !dayAvailability.endTime) {
            return [];
        }

        const slots: TimeSlot[] = [];
        const [startHour, startMinute] = dayAvailability.startTime.split(":").map(Number);
        const [endHour, endMinute] = dayAvailability.endTime.split(":").map(Number);

        let currentHour = startHour;
        let currentMinute = startMinute;

        while (
            currentHour < endHour ||
            (currentHour === endHour && currentMinute < endMinute)
        ) {
            const startTime = `${currentHour.toString().padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;

            // Add 1 hour slot
            let nextHour = currentHour;
            let nextMinute = currentMinute + 60;

            if (nextMinute >= 60) {
                nextHour += Math.floor(nextMinute / 60);
                nextMinute = nextMinute % 60;
            }

            const endTime = `${nextHour.toString().padStart(2, "0")}:${nextMinute.toString().padStart(2, "0")}`;

            // Format times for display
            const formatTime = (time: string) => {
                const [h, m] = time.split(":").map(Number);
                const period = h >= 12 ? "PM" : "AM";
                const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
                return `${displayHour}:${m.toString().padStart(2, "0")} ${period}`;
            };

            slots.push({
                startTime,
                endTime,
                label: `${formatTime(startTime)} - ${formatTime(endTime)}`,
            });

            currentHour = nextHour;
            currentMinute = nextMinute;
        }

        return slots;
    };

    const availableDates = getAvailableDates();
    const selectedDayName = availableDates.find(
        (d) => d.date === selectedDate
    )?.dayName;

    const timeSlots = selectedDate && selectedDayName
        ? generateTimeSlots(selectedDate, selectedDayName)
        : [];

    const handleSubmitBooking = async () => {
        if (!selectedService || !selectedDate || !selectedTimeSlot) {
            setError("Please select service, date, and time slot");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const startAt = new Date(
                `${selectedDate}T${selectedTimeSlot.startTime}:00`
            ).toISOString();

            const endAt = new Date(
                `${selectedDate}T${selectedTimeSlot.endTime}:00`
            ).toISOString();

            const bookingData = await createBooking({
                technicianId,
                serviceId: selectedService,
                startAt,
                endAt,
            });
            console.log(bookingData);

            if (!bookingData.success) {
                toast.error(bookingData.message);
                return;
            }

            toast.success("Booking successful!");

            setBookingSuccess(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setSelectedService("");
                setSelectedDate("");
                setSelectedTimeSlot(null);
                setBookingSuccess(false);
            }, 3000);

        } catch (err) {
            console.error("Booking error:", err);
            toast.error("Booking failed");
        } finally {
            setIsLoading(false);
        }
    };

    // Show error state if no availability (this shouldn't happen as per your backend)
    if (!hasAvailability || availableDays.length === 0) {
        return (
            <div className="mt-8 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <div>
                        <p className="font-medium text-amber-800 dark:text-amber-300">
                            No Available Slots
                        </p>
                        <p className="text-sm text-amber-700 dark:text-amber-400 mt-1">
                            This technician has not set their availability yet. Please try again later or contact support.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Book Now
            </h2>

            {/* Success Message */}
            {bookingSuccess && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <div>
                        <p className="font-medium text-green-800 dark:text-green-300">
                            Booking Confirmed!
                        </p>
                        <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                            Your appointment has been scheduled successfully. You can view it in your bookings.
                        </p>
                    </div>
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <div>
                        <p className="font-medium text-red-800 dark:text-red-300">
                            Booking Failed
                        </p>
                        <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                            {error}
                        </p>
                    </div>
                </div>
            )}

            {/* Info about availability */}
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                    <p className="font-medium text-blue-800 dark:text-blue-300">
                        Available Days
                    </p>
                    <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
                        {availableDays.map((a, index) => (
                            <span key={a.id}>
                                {a.day.charAt(0) + a.day.slice(1).toLowerCase()}
                                {a.startTime && a.endTime ?
                                    ` (${a.startTime} - ${a.endTime})` :
                                    ' (All day)'}
                                {index < availableDays.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Step 1: Select Service */}
                <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Step 1: Select a Service
                    </h3>
                    {hasServices ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => {
                                        setSelectedService(service.id);
                                        setSelectedDate("");
                                        setSelectedTimeSlot(null);
                                    }}
                                    className={`text-left p-4 rounded-lg border-2 transition-all ${selectedService === service.id
                                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-400 shadow-md"
                                        : "border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-sm"
                                        }`}
                                >
                                    <div className="flex items-start justify-between">
                                        <h4 className="font-medium text-slate-900 dark:text-white">
                                            {service.title}
                                        </h4>
                                        <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 ml-2">
                                            ${service.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                                        {service.description}
                                    </p>
                                    {service.category && (
                                        <span className="inline-block mt-2 text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded">
                                            {service.category.type}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                            <p className="text-slate-600 dark:text-slate-400">
                                This technician has not added any services yet. Please check back later.
                            </p>
                        </div>
                    )}
                </div>

                {/* Step 2: Select Date */}
                {selectedService && hasServices && (
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Step 2: Select a Date
                        </h3>
                        {availableDates.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                                {availableDates.map((dateObj) => (
                                    <button
                                        key={dateObj.date}
                                        onClick={() => {
                                            setSelectedDate(dateObj.date);
                                            setSelectedTimeSlot(null);
                                        }}
                                        className={`p-3 rounded-lg border-2 transition-all text-center ${selectedDate === dateObj.date
                                            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-400 shadow-md"
                                            : "border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-sm"
                                            }`}
                                    >
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                            {dateObj.dayName.slice(0, 3)}
                                        </p>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                                            {dateObj.label}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
                                <p className="text-amber-700 dark:text-amber-400 text-sm">
                                    No available dates in the next 14 days. Please check back later.
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* Step 3: Select Time Slot */}
                {selectedDate && selectedService && (
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Step 3: Select a Time Slot
                        </h3>
                        {timeSlots.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                {timeSlots.map((slot, index) => (
                                    <button
                                        key={`${slot.startTime}-${slot.endTime}-${index}`}
                                        onClick={() => setSelectedTimeSlot(slot)}
                                        className={`p-3 rounded-lg border-2 transition-all text-center ${selectedTimeSlot?.startTime === slot.startTime
                                            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-400 shadow-md"
                                            : "border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-sm"
                                            }`}
                                    >
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            {slot.label}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
                                <p className="text-amber-700 dark:text-amber-400 text-sm">
                                    No time slots available for this date. Please select another date.
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* Booking Summary & Submit */}
                {selectedService && selectedDate && selectedTimeSlot && (
                    <div className="border-t-2 border-slate-200 dark:border-slate-700 pt-6">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                            Booking Summary
                        </h3>

                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4 space-y-3 border border-slate-200 dark:border-slate-700">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Service:</span>
                                <span className="font-medium text-slate-900 dark:text-white text-right">
                                    {services.find((s) => s.id === selectedService)?.title}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Price:</span>
                                <span className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">
                                    ${services.find((s) => s.id === selectedService)?.price}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Date:</span>
                                <span className="font-medium text-slate-900 dark:text-white">
                                    {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Time:</span>
                                <span className="font-medium text-slate-900 dark:text-white">
                                    {selectedTimeSlot.label}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Duration:</span>
                                <span className="font-medium text-slate-900 dark:text-white">
                                    1 hour
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={handleSubmitBooking}
                            disabled={isLoading}
                            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 
                         text-white font-semibold py-3 px-6 rounded-lg transition-all
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                         dark:focus:ring-offset-slate-800 transform hover:scale-[1.02] active:scale-[0.98]
                         disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg
                                        className="animate-spin h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                    Processing Booking...
                                </span>
                            ) : (
                                "Confirm Booking"
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}