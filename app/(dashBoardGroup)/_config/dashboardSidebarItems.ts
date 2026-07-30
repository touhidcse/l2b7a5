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

export const AUTHOR_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: "Dashboard",
        href: "/author-dashboard",
        icon: LayoutDashboard
    },
    {
        label: "My Posts",
        href: "/author-dashboard/my-posts",
        icon: FileText
    },
]

export const USER_SIDEBAR_ITEMS : ISidebarItem[] = [
    {
        label : "Dashboard",
        href : "/dashboard",
        icon : LayoutDashboard
    },
    {
        label : "My Posts",
        href : "/dashboard/my-posts",
        icon : FileText
    },
]

export const sidebarMenuItems = {
    USER : USER_SIDEBAR_ITEMS,
    AUTHOR : AUTHOR_SIDEBAR_ITEMS,
    ADMIN : ADMIN_SIDEBAR_ITEMS
}