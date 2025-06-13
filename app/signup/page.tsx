'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import axios from "axios";
import {useForm} from "react-hook-form";
import generateDeviceId from '../utils/deviceid';

const Signup = () => {
    const router = useRouter()

    const submitProcedure =  async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const jsonData = Object.fromEntries(formData)

        const deviceId = generateDeviceId()

        try {
            const res = await axios.post("http://localhost:8080/auth/signup", jsonData, {
                headers: {
                'Content-Type': 'application/json',
                'X-Device-Id': deviceId,
                },
                withCredentials: true,
            });
            if( res.data === "Success" ){ 
                router.push('/verify'); 
                console.log("Signup Submitted")
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <form onSubmit={submitProcedure}>
            <input name="name" type="text" placeholder='Name' />
            <input name="email" type="text" placeholder='Email'/>
            <input name="password" type="password" placeholder='Password'/>
            <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default Signup