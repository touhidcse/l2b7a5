import { ISidebarItem } from "@/lib/types";
import { FileText, LayoutDashboard } from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label : "Admin Dashboard",
        href : "/Admin-dashboard",
        icon : LayoutDashboard
    },
    {
        label : "My Posts",
        href : "/admin-dashboard/my-posts",
        icon : FileText
    },
    {
        label : "My Posts",
        href : "/admin-dashboard/my-posts",
        icon : FileText
    },
    {
        label : "My Posts",
        href : "/admin-dashboard/my-posts",
        icon : FileText
    },
    {
        label : "My Posts",
        href : "/admin-dashboard/my-posts",
        icon : FileText
    },
    {
        label : "My Posts",
        href : "/admin-dashboard/my-posts",
        icon : FileText
    },
]

export const TECHNICIAN_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: "Dashboard",
        href: "/technician-dashboard",
        icon: LayoutDashboard
    },
    {
        label: "My Posts",
        href: "/technician-dashboard/my-posts",
        icon: FileText
    },
]

export const CUSTOMER_SIDEBAR_ITEMS : ISidebarItem[] = [
    {
        label : "Dashboard",
        href : "/customer-dashboard",
        icon : LayoutDashboard
    },
    {
        label : "Create Booking",
        href : "/customer-dashboard/create-booking",
        icon : FileText
    },
    {
        label : "All bookings",
        href : "/customer-dashboard/all-bookings",
        icon : FileText
    },
    {
        label : "Get Booking Details with Id",
        href : "/customer-dashboard/booking-details",
        icon : FileText
    },
    {
        label : "Cancel Booking with id",
        href : "/customer-dashboard/cancel-booking",
        icon : FileText
    },
    {
        label : "Give Review By Booking Id",
        href : "/customer-dashboard/give-review",
        icon : FileText
    }
]

export const sidebarMenuItems = {
    CUSTOMER : CUSTOMER_SIDEBAR_ITEMS,
    TECHNICIAN : TECHNICIAN_SIDEBAR_ITEMS,
    ADMIN : ADMIN_SIDEBAR_ITEMS
}