import React from 'react'

export default function generateDeviceId(): string {
    var deviceId = localStorage.getItem("deviceId")
    if(!deviceId){
        deviceId = crypto.randomUUID()
        localStorage.setItem("deviceId", deviceId)
    }

    return deviceId
}