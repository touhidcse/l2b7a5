"use client";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem
// } from "@/components/ui/sidebar";
// import { ISidebarItem, NavbarProps } from "@/lib/types";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { sidebarMenuItems } from "../_config/dashboardSidebarItems";

// export default function DashboardSidebar({user} : NavbarProps) {
//   const pathname = usePathname();

//   let navItems : ISidebarItem[]  = [];

//   if(user?.role === "CUSTOMER"){
//     navItems=sidebarMenuItems.CUSTOMER;
//   }else if (user?.role === "TECHNICIAN") {
//      navItems = sidebarMenuItems.TECHNICIAN;
//   }else if (user?.role === "ADMIN") {
//      navItems = sidebarMenuItems.ADMIN;
//   }

//   return (
//     <Sidebar
//       collapsible="none"
//       className=" h-[calc(100svh-0rem)] border-r border-sidebar-border">
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {navItems.map((item) => (
//                 <SidebarMenuItem key={item.href}>
//                   <SidebarMenuButton
//                     asChild
//                     isActive={pathname === item.href}
//                   >
//                     <Link href={item.href}>
//                       <item.icon />
//                       <span>{item.label}</span>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }  



"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ISidebarItem, NavbarProps } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarMenuItems } from "../_config/dashboardSidebarItems";

export default function DashboardSidebar({ user }: NavbarProps) {
  const pathname = usePathname();

  let navItems: ISidebarItem[] = [];

  if (user?.role === "CUSTOMER") {
    navItems = sidebarMenuItems.CUSTOMER;
  } else if (user?.role === "TECHNICIAN") {
    navItems = sidebarMenuItems.TECHNICIAN;
  } else if (user?.role === "ADMIN") {
    navItems = sidebarMenuItems.ADMIN;
  }

  return (
    <Sidebar
      collapsible="none"
      className="h-svh w-64 shrink-0 border-r border-sidebar-border"
    >
      <SidebarContent className="min-w-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                  >
                    <Link
                      href={item.href}
                      className="min-w-0"
                    >
                      <item.icon className="shrink-0" />

                      <span className="truncate">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}