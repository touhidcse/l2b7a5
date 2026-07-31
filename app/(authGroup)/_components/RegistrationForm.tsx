"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React, { useActionState, useEffect } from 'react'
import {registrationAction} from '../_actions/authActions'
import { toast } from 'sonner'
import { useSearchParams } from 'next/navigation'

const RegistrationForm = () => {
    const searchParams = useSearchParams()
    const redirectto = searchParams.get("redirectTo") ?? "";
    const [state, action, pending] =useActionState(registrationAction.bind(null, redirectto),false)

    console.log("state from registration form",state);
    useEffect(()=>{
        if(!state) return;

        if(state.success){
            toast.success(state.message || "Registration Successfull")
        }

        if(!state.success){
            toast.error(state.message || "Registration Failed")
        }

    },[state]);
    

  return (
    <form action={action} className='space-y-4'>
        <Card className='p-5 space-y-4'>
            <input name="name" type='text' placeholder='Enter your Name'  required/>
            <input name="email" type='email' placeholder='Enter your Email'  required/>
            <input name="password" type="password" placeholder='Enter your Password' required />
            <input name="confirmPassword" type="password" placeholder='Confirm your Password' required />
            Select Role:
            <div className='flex gap-4'>
                <label>
                    <input type="radio" name="role" value="CUSTOMER" required />
                    Customer
                </label>
                <label>
                    <input type="radio" name="role" value="TECHNICIAN" required />
                    Technician
                </label>
            </div>
            <Button type='submit'>
                {
                    pending? "Submitting..." : "Register"
                }
            </Button>
        </Card>
    </form>
  )
}

export default RegistrationForm