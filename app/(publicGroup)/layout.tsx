
import { Navbar } from '@/components/shared/navbar';
import { IUser } from '@/lib/types';
import { getMe } from '@/service/getMe'
import React from 'react'

const PublicGroupLayout = async (
    {
        children
    }: {
        children: React.ReactNode
    }
) => {
    const user = await getMe() as IUser;
    return (
        
        <div>
            <Navbar user= {user}/>
            {children}
        </div>
    )
}

export default PublicGroupLayout;