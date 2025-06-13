'use client';
import React from 'react'

const Login = () => {

    const submitProcedure = () => {
        console.log("Login Submitted")
    }


  return (
    <div>
        <form onSubmit={submitProcedure}>
            <input type="text" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login