import { getMe } from '@/service/getMe';
import React from 'react';
import { IUser } from '@/lib/types';
import { ProfileHeader } from '../_components/shared/profileHeader';

const AdminDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = (await getMe()) as IUser;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex">

        {/* Dashboard Sidebar is already here */}
        {/* Keep your existing DashboardSidebar in the parent layout */}

        {/* Main area */}
        <div className="flex-1 min-w-0">

          {/* Profile Header */}
          <ProfileHeader user={user} />

          {/* All dashboard pages come below ProfileHeader */}
          <main className="p-6">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;