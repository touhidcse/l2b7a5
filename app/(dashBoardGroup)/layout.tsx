
import { Navbar } from '@/components/shared/navbar';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { getMe } from '@/service/getMe';
import React from 'react'
import DashboardSidebar from './_components/DashboardSidebar';
import { IUser } from '@/lib/types';
import { ProfileHeader } from './_components/shared/profileHeader';
const DashboardLayout = async (
  {
    children
  }: {
    children: React.ReactNode
  }
) => {
  const user = await getMe() as IUser;
  return (

    <div className="min-h-screen flex flex-col">
      <Navbar user={user} />
     
      <SidebarProvider>
        <div className="flex flex-1">
          <DashboardSidebar user={user} />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default DashboardLayout