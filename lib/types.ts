import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

// ==================== Error Types ====================

export interface ApiError {
    success: false;
    statusCode: number;
    message: string;
    errorDetails?: {
        code?: string;
        field?: string;
        errors?: Array<{ field: string; message: string }>;
        details?: Record<string, unknown>;
    };
}

export interface ActionError {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
    data?: unknown;
}

export type UnknownError = Error | ApiError | { message: string; statusCode?: number; code?: string };

// ==================== Component Props ===============


export type BookingItemFullProps = {
    booking: IBooking;
};








// ==================== API Response Types ====================

export interface IApiResponse<T = unknown> {
    success: boolean;
    statusCode: number;
    message: string;
    data?: T;
    meta?: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
}

// ==================== Booking Types ====================

export type BookingStatus = 
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "CANCELLED"
    | "IN_PROGRESS"
    | "COMPLETED";



export interface ITechnicianProfile {
    id: string;
    userId: string;
    rating: number;
    bio: string | null;
    experience: number;
    profilePhoto: string | null;
    location: string | null;
    availability: IAvailability;
    bookings: IBooking[];
    reviews: IReview[];
    services: IService[];
    user: {
        id: string;
        name: string;
        email: string;
        phone: string | null;
        address: string | null;
    };
}

// ==================== Payment Types ====================

export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";
export type PaymentMethod = "STRIPE" | "SSLCOMMERZ";



// ==================== Dashboard Types ====================

export interface IDashboardStats {
    totalBookings: number;
    pendingBookings: number;
    acceptedBookings: number;
    inProgressBookings: number;
    completedBookings: number;
    cancelledBookings: number;
    totalSpent?: number;
    totalEarnings?: number;
    completionRate?: number;
}

export interface IAdminStats {
    totalUsers: number;
    totalTechnicians: number;
    totalCustomers: number;
    totalBookings: number;
    pendingBookings: number;
    completedBookings: number;
    totalRevenue: number;
}

// ==================== Helper Types ====================

export type ActionState = {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
    data?: unknown;
};

export type ServerActionResponse = {
    success: boolean;
    message: string;
    data?: unknown;
};


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

export type BookingItemProps = {
    booking: IBooking
};

export type PaymentItemProps = {
    id: string
    price: number
    date: string
    method: string
};

export type IBookingService = {
    id: string;
    title: string;
    description: string;
    categoryId: string;
    technicianId: string;
    price: number;
};

export type ReviewItemProps = {
    id: string
    rating: number
    date: string
    comment: string
};

export type IAvailability = [
    {
        id: string,
        technicianId: string,
        day: string,
        startTime: string,
        endTime: string,
        isAvailable: boolean
    }
]

export type IUser = {
  success: boolean;
  statusCode: number;
  message: string;

  data: {
    id: string;
    email: string;
    name: string;
    role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
    phone: string | null;
    address: string | null;
    createdAt: string;
    updatedAt: string;
    isBan: boolean;

    bookings: IBooking[];
  };
};



export type IBooking = {

  id: string;

  customerId: string;
  technicianId: string;
  serviceId: string;
  price: number;
  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "CANCELLED"
    | "IN_PROGRESS"
    | "COMPLETED";

  bookingDate: string;

  startAt: string;
  endAt: string;

  cancelAt: string | null;
  cancelReason: string | null;

  service: IService;

  technician: ITechnician;

  payment: IPayment | null;

  review: IReview | null;

};



export type IService = {

  id:string;

  title:string;

  description:string;

  categoryId:string;

  technicianId:string;

  price:number;

  category?: ICategory;

};



export type ICategory = {

 id:string;

 type:string;

};



export type ITechnician = {

 id:string;

 userId:string;

 rating:number;

 bio:string;

 experience:number;

 profilePhoto:string;

 location:string;

};



export type IPayment = {

 id:string;

 bookingId:string;

 price:number;

 method:string;


 status:
 | "PENDING"
 | "COMPLETED"
 | "FAILED"
 | "REFUNDED";


 paidAt:string | null;

};



export type IReview = {

 id:string;

 bookingId:string;

 customerId:string;

 technicianId:string;

 rating:number;

 comment:string;

 reviewDate:string;

};