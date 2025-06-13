'use client';
import React from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';
import generateDeviceId from '../utils/deviceid';

const OtpVerify = () => {

    const router = useRouter()

    const submitProcedure = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const jsonData = Object.fromEntries(formData)

        const deviceId = generateDeviceId()

        try {
            const res = await axios.post("http://localhost:8080/auth/verify", jsonData, {
                headers: {
                'Content-Type': 'application/json',
                'X-Device-Id': deviceId,
                },
            });
            if( res.data === "Success" ){ 
                router.push('/landing'); 
                console.log("Verified")
            }
        } catch (error) {
            
        }
        console.log("User Verified")
    }
  return (
    <div>
        <form onSubmit={submitProcedure}>
            <input name="email" type="text" placeholder='Email'/>
            <input name="otp" type="text" placeholder='OTP'/>
            <button>Submit OTP</button>
        </form>
    </div>
  )
}

export default OtpVerify