// import { ISidebarItem } from "@/lib/types";
// import { FileText, LayoutDashboard } from "lucide-react";

// export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
//     {
//         label : "Admin Dashboard",
//         href : "/Admin-dashboard",
//         icon : LayoutDashboard
//     },
//     {
//         label : "Create New Catagories",
//         href : "/admin-dashb/create-category",
//         icon : FileText
//     },
//     {
//         label : "All Categories",
//         href : "/admin-dashboard/all-categories",
//         icon : FileText
//     },
//     {
//         label : "All Users",
//         href : "/admin-dashboard/all-users",
//         icon : FileText 
//     },
//     {
//         label : "Update User Status",
//         href : "/admin-dashboard/update-user-status",
//         icon : FileText
//     },
//     {
//         label : "All Bookings",
//         href : "/admin-dashboard/all-bookings",
//         icon : FileText
//     },
// ]

// export const TECHNICIAN_SIDEBAR_ITEMS: ISidebarItem[] = [
//     {
//         label: "Dashboard",
//         href: "/technician-dashboard",
//         icon: LayoutDashboard
//     },
//     {
//         label: "Update Technician Profile",
//         href: "/technician-dashboard/update-profile",
//         icon: FileText
//     },
//     {
//         label: "Create Availabilities",
//         href: "/technician-dashboard/create-availabilities",
//         icon: FileText
//     },
//     {
//         label: "Get Own Availabilities",
//         href: "/technician-dashboard/get-availabilities",
//         icon: FileText
//     },
//     {
//         label: "Update Availabilities",
//         href: "/technician-dashboard/update-availabilities",
//         icon: FileText
//     },
//     {
//         label: "Get Technician Own Bookings",
//         href: "/technician-dashboard/get-bookings",
//         icon: FileText
//     },
//     {
//         label: "Update Booking Status by Booking Id",
//         href: "/technician-dashboard/update-booking-status",
//         icon: FileText
//     },
    

// ]

// export const CUSTOMER_SIDEBAR_ITEMS : ISidebarItem[] = [
//     {
//         label : "Dashboard",
//         href : "/customer-dashboard",
//         icon : LayoutDashboard
//     },
//     {
//         label : "Update Profile",
//         href : "/customer-dashboard/update-profile",
//         icon : FileText
//     },
//     {
//         label : "Create Booking",
//         href : "/customer-dashboard/create-booking",
//         icon : FileText
//     },
//     {
//         label : "All bookings",
//         href : "/customer-dashboard/all-bookings",
//         icon : FileText
//     },
//     {
//         label : "Get Booking Details with Id",
//         href : "/customer-dashboard/booking-details",
//         icon : FileText
//     },
//     {
//         label : "Cancel Booking with id",
//         href : "/customer-dashboard/cancel-booking",
//         icon : FileText
//     },
//     {
//         label : "Give Review By Booking Id",
//         href : "/customer-dashboard/give-review",
//         icon : FileText
//     },
//     {
//         label : "Get Payment Details By Payment Id",
//         href : "/customer-dashboard/payment-details",
//         icon : FileText
//     },
//     {
//         label : "Get Payment History",
//         href : "/customer-dashboard/payment-history",
//         icon : FileText
//     },
// ]

// export const sidebarMenuItems = {
//     CUSTOMER : CUSTOMER_SIDEBAR_ITEMS,
//     TECHNICIAN : TECHNICIAN_SIDEBAR_ITEMS,
//     ADMIN : ADMIN_SIDEBAR_ITEMS
// }


import { 
    LayoutDashboard, 
    FileText, 
    UserPlus, 
    Users, 
    BookOpen, 
    Calendar, 
    Clock, 
    Star, 
    CreditCard,
    Settings,
    PlusCircle,
    List,
    Edit,
    Eye,
    Trash2,
    CheckCircle,
    XCircle,
    RefreshCw,
    DollarSign,
    MessageSquare,
    UserCheck,
    UserX,
    Shield,
    Package,
    Tag,
    Bell,
    BarChart3
} from 'lucide-react';
import { ISidebarItem } from '@/lib/types';

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: "Dashboard",
        href: "/admin-dashboard",
        icon: LayoutDashboard
    },
    {
        label: "Create Category",
        href: "/admin-dashboard/create-category",
        icon: PlusCircle
    },
    {
        label: "All Categories",
        href: "/admin-dashboard/all-categories",
        icon: List
    },
    {
        label: "All Users",
        href: "/admin-dashboard/all-users",
        icon: Users
    },
    {
        label: "Update User Status",
        href: "/admin-dashboard/update-user-status",
        icon: RefreshCw
    },
    {
        label: "All Bookings",
        href: "/admin-dashboard/all-bookings",
        icon: BookOpen
    },
];

export const TECHNICIAN_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: "Dashboard",
        href: "/technician-dashboard",
        icon: LayoutDashboard
    },
    {
        label: "Update Profile",
        href: "/technician-dashboard/update-profile",
        icon: UserPlus
    },
    {
        label: "Create Availability",
        href: "/technician-dashboard/create-availability",
        icon: PlusCircle
    },
    {
        label: "My Availability",
        href: "/technician-dashboard/my-availability",
        icon: Calendar
    },
    {
        label: "Update Availability",
        href: "/technician-dashboard/update-availability",
        icon: Edit
    },
    {
        label: "My Bookings",
        href: "/technician-dashboard/my-bookings",
        icon: BookOpen
    },
    {
        label: "Update Booking Status",
        href: "/technician-dashboard/update-booking-status",
        icon: RefreshCw
    },
];

export const CUSTOMER_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: "Dashboard",
        href: "/customer-dashboard",
        icon: LayoutDashboard
    },
    {
        label: "Update Profile",
        href: "/customer-dashboard/update-profile",
        icon: UserPlus
    },
    {
        label: "Create Booking",
        href: "/customer-dashboard/create-booking",
        icon: PlusCircle
    },
    {
        label: "My Bookings",
        href: "/customer-dashboard/my-bookings",
        icon: BookOpen
    },
    {
        label: "Booking Details",
        href: "/customer-dashboard/booking-details",
        icon: Eye
    },
    {
        label: "Cancel Booking",
        href: "/customer-dashboard/cancel-booking",
        icon: XCircle
    },
    {
        label: "Write Review",
        href: "/customer-dashboard/write-review",
        icon: Star
    },
    {
        label: "Payment Details",
        href: "/customer-dashboard/payment-details",
        icon: CreditCard
    },
    {
        label: "Payment History",
        href: "/customer-dashboard/payment-history",
        icon: DollarSign
    },
];

export const sidebarMenuItems = {
    CUSTOMER: CUSTOMER_SIDEBAR_ITEMS,
    TECHNICIAN: TECHNICIAN_SIDEBAR_ITEMS,
    ADMIN: ADMIN_SIDEBAR_ITEMS,
};