'use client';
import React from 'react'
import generateDeviceId from '../utils/deviceid';
import { headers } from 'next/headers';
import axios from 'axios';

const Login = () => {

    const submitProcedure = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const jsonData = Object.fromEntries(formData)
        
        const deviceId = generateDeviceId()

        try {
          const res = await axios.post("http://localhost:8080/auth/login", jsonData, {
            headers: {
              'Content-Type': 'application/json',
              "X-Device-Id": deviceId
            },
            withCredentials:true,
          })
          if (res.data.email !== null){
            localStorage.setItem("userEmail", res.data.email)
          }


        } catch (error) {
            console.log(error)
        }

        console.log("Login Submitted")
    }


  return (
    <div>
        <form onSubmit={submitProcedure}>
            <input name="email" type="text" placeholder='Email'/>
            <input name="password" type="password" placeholder='Password'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login