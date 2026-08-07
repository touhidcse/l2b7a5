import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

// // ===============================Props=============================
export type NavbarProps = {
    user: IUser;
};

export type ISidebarItem = {
    label: string,
    href: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
};

export type SectionProps = {
    title: string
    icon: React.ReactNode
    count: number
    children?: React.ReactNode
    isEmpty?: boolean
};

export type TechnicianProfileProps ={
    technician: ITechnician
}


export type BookingItemProps = {
    booking: IBooking
};

export type PaymentItemProps = {
    id: string
    price: number
    date: string
    method: string
};

export type ReviewItemProps = {
    id: string
    rating: number
    date: string
    comment: string
};


export type IUser = {
        id: string;
        email: string;
        name: string;
        role: 'CUSTOMER' | 'TECHNICIAN' | 'ADMIN';
        phone: string | null;
        address: string | null;
        createdAt: string;
        updatedAt: string;
        isBan: boolean;
        bookings: IBooking[];
        payments: IPayment[];
        reviews: IReview[];
        technicianProfile?: ITechnician | null;
};

// ==================== Technician Types ====================

export interface ITechnician {
    id: string;
    userId: string;
    rating: number;
    bio: string;
    experience: number;
    profilePhoto: string;
    location: string;
    user: {
        id: string;
        email: string;
        name: string;
        role: 'CUSTOMER' | 'TECHNICIAN' | 'ADMIN';
        phone: string | null;
        address: string | null;
        createdAt: string;
        updatedAt: string;
        isBan: boolean;
        bookings: IBooking[];
        payments: IPayment[];
        reviews: IReview[];
        technicianProfile?: ITechnician | null;
    };
    bookings?: IBooking[];
    services?: IService[];
    reviews?: IReviewTechnician[];
    availability?: IAvailability[];
    _count?: {
        bookings: number;
        reviews: number;
    };
    totalReviews?: number;
    completedJobs?: number;
}

export type IAvailability = {

    id: string;

    technicianId: string;

    day:
    | "SATURDAY"
    | "SUNDAY"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY";

    startTime: string | null;

    endTime: string | null;

    isAvailable: boolean;

};

// ==================== Category Types ====================

export interface ICategory {
    id: string;
    type: string;
    createdAt?: string;
    updatedAt?: string;
    services?: IService[];
}

export type IService = {

    id: string;

    title: string;

    description: string;

    categoryId: string;

    technicianId: string;

    price: number;

    category: ICategory;

    technician: ITechnician;
    bookings: IBooking[];
    _count?: {
        bookings: number;
    };

};

// ==================== Booking Types ====================
export interface CreateBookingPayload {
  technicianId: string;
  serviceId: string;
  startAt: string;
  endAt: string;
}

export type BookingStatus =| 'REQUESTED' | 'ACCEPTED' | 'DECLINED' | 'PAID' | 'CANCELLED' | 'IN_PROGRESS' | 'COMPLETED';
export type PaymentStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
export type PaymentMethod = 'STRIPE' | 'SSLCOMMERZ';

export interface IBooking {
    id: string;
    customerId: string;
    technicianId: string;
    serviceId: string;
    price: number;
    status: BookingStatus;
    bookingDate: string;
    startAt: string;
    endAt: string;
    cancelAt: string | null;
    cancelReason: string | null;
    customer: {
        id: string;
        name: string;
        email: string;
        phone: string | null;
        address: string | null;
    };
    technician: {
        id: string;
        userId: string;
        rating: number;
        bio: string;
        experience: number;
        profilePhoto: string;
        location: string;
        user: {
            id: string;
            name: string;
            email: string;
            phone: string | null;
        };
    };
    service: {
        id: string;
        title: string;
        description: string;
        categoryId: string;
        technicianId: string;
        price: number;
        category?: {
            id: string;
            type: string;
        };
    };
    payment: IPayment | null;
    review: IReview | null;
};

// ==================== Payment Types ====================



export interface IPayment {
    id: string;
    bookingId: string;
    price: number;
    method: PaymentMethod;
    status: PaymentStatus;
    paidAt: string | null;
    stripeCustomerId?: string;
    stripePaymentId?: string;
    cancelAt?: string | null;
    cancelReason?: string | null;
    customerId?: string;
    booking?: {
        id: string;
        service: {
            id: string;
            title: string;
            price: number;
        };
        technician: {
            id: string;
            user: {
                name: string;
                email: string;
            };
        };
    };
};

export type IReview = {

    id: string;

    bookingId: string;

    customerId: string;

    technicianId: string;

    rating: number;

    comment: string;

    reviewDate: string;

};

export type ReviewItemPropsTechninican={
    review: IReviewTechnician;
}
export type IReviewTechnician = {

    id: string;

    rating: number;

    comment: string;

    reviewDate: string;


    customer: {
        id: string;
        name: string;
    };
    totalReviews: number,
    totalCompletedJobs: number,

};

// ==================== Status Badge Colors ====================

export const STATUS_COLORS: Record<BookingStatus, string> = {
    'REQUESTED': 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30',
    'ACCEPTED': 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30',
    'DECLINED': 'bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30',
    'PAID': 'bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/30',
    'CANCELLED': 'bg-red-700/15 text-red-800 dark:text-red-500 border-red-700/30',
    'IN_PROGRESS': 'bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30',
    'COMPLETED': 'bg-gray-500/15 text-gray-700 dark:text-gray-400 border-gray-500/30',
};

export const PAYMENT_STATUS_COLORS: Record<PaymentStatus, string> = {
    'PENDING': 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400',
    'COMPLETED': 'bg-green-500/15 text-green-700 dark:text-green-400',
    'FAILED': 'bg-red-500/15 text-red-700 dark:text-red-400',
    'REFUNDED': 'bg-gray-500/15 text-gray-700 dark:text-gray-400',
};

// ==================== Dashboard Types Admin ====================

export interface BookingStats {
  totalBookings: number;
  pendingBookings: number;
  acceptedBookings: number;
  inProgressBookings: number;
  completedBookings: number;
  cancelledBookings: number;
  totalSpent: number;
  completionRate: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  technicianId: string;
  price: number;
}

export interface Category {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  services: ServiceItem[];
}

export interface UserItem {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "USER" | "TECHNICIAN";
  address?: string;
  isBan: boolean;
  createdAt: string;
}

export interface UserListMeta {
  page: number;
  limit: number;
  total: number;
}

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}



