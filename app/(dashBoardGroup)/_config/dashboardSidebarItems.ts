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
        label: "My Profile",
        href: "/profile",
        icon: UserPlus
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
        label: "My Profile",
        href: "/profile",
        icon: UserPlus
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
        href: "/technician-dashboard/availability",
        icon: Calendar
    },
    // {
    //     label: "Update Availability",
    //     href: "/technician-dashboard/update-availability",
    //     icon: Edit
    // },
    // {
    //     label: "My Bookings",
    //     href: "/technician-dashboard/my-bookings",
    //     icon: BookOpen
    // },
    // {
    //     label: "Update Booking Status",
    //     href: "/technician-dashboard/update-booking-status",
    //     icon: RefreshCw
    // },
];

export const CUSTOMER_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: "Dashboard",
        href: "/customer-dashboard",
        icon: LayoutDashboard
    },
    //  {
    //     label: "My Bookings",
    //     href: "/customer-dashboard",
    //     icon: BookOpen
    // },
    {
        label: "My Profile",
        href: "/profile",
        icon: UserPlus
    },
    {
        label: "Create Booking",
        href: "/services",
        icon: PlusCircle
    },
   
    // {
    //     label: "Booking Details",
    //     href: "/customer-dashboard/booking-details",
    //     icon: Eye
    // },
    // {
    //     label: "Cancel Booking",
    //     href: "/customer-dashboard/cancel-booking",
    //     icon: XCircle
    // },
    // {
    //     label: "Write Review",
    //     href: "/customer-dashboard/write-review",
    //     icon: Star
    // },
    // {
    //     label: "Payment Details",
    //     href: "/customer-dashboard/payment-details",
    //     icon: CreditCard
    // },
    {
        label: "Payment History",
        href: "/customer-dashboard/payments",
        icon: DollarSign
    },
];

export const sidebarMenuItems = {
    CUSTOMER: CUSTOMER_SIDEBAR_ITEMS,
    TECHNICIAN: TECHNICIAN_SIDEBAR_ITEMS,
    ADMIN: ADMIN_SIDEBAR_ITEMS,
};