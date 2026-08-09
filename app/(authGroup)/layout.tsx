import { Navbar } from '@/components/shared/navbar';
import { IUser } from '@/lib/types';
import { getMe } from '@/service/getMe';
import React from 'react'
import { Toaster } from 'sonner';

const AuthGroupLayout = async(
    {
        children
    }:{
        children: React.ReactNode
    }
) => {
  const user = await getMe() as IUser;
  return (
    
    <div className='maw-w-7xl mx-auto'>
      <Navbar user={user}/>
    {children}
    <Toaster richColors position="top-right" />
    </div>
  )
}

export default AuthGroupLayout