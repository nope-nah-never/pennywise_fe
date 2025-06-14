import React, { useState, useEffect, use } from 'react'
import generateDeviceId from '../utils/deviceid';
import axios from 'axios';
import Login from '../login/page';

const Landing = () => {

  const [status, setStatus] = useState<'loading' | 'logged_in' | 'login_required'>('loading');
  const [user, setUser] = useState("");

  useEffect(()=> {

    if(localStorage.getItem("userEmail")!== null){

      setStatus("logged_in")
      setUser(localStorage.getItem("userEmail") || "")

    } else {

    const deviceId = generateDeviceId()

    axios.get("http://localhost:8080/auth/login", {withCredentials: true, 
      headers: {
        "X-Device-Id": deviceId
    }}).then(async res => {
      const status = await res.status
      const email = await res.data.email

      if(status === 201){
          setStatus("logged_in")
          setUser(email)
      } else {
          setStatus("login_required")
      }
    });
    }

  },[]);

  if(status === "loading") return <div>loading...</div>
  if(status === "logged_in") return <div>{user}</div>

  return <Login/>
  
}

export default Landing