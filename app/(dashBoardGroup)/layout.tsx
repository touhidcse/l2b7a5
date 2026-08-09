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
        < div className = "flex min-h-svh w-full min-w-0" >
          <DashboardSidebar user={user} />
          <main className="min-w-0 flex-1 overflow-x-hidden">
            <div className="w-full min-w-0 p-4 sm:p-6 lg:p-8">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default DashboardLayout
