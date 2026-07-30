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
        label : "My Posts",
        href : "/customer-dashboard/my-posts",
        icon : FileText
    },
]

export const sidebarMenuItems = {
    CUSTOMER : CUSTOMER_SIDEBAR_ITEMS,
    TECHNICIAN : TECHNICIAN_SIDEBAR_ITEMS,
    ADMIN : ADMIN_SIDEBAR_ITEMS
}