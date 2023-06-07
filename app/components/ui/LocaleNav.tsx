'use client'
import React, { useState, useEffect } from 'react'

export default function LocaleNav() {
  const [positions, setPositions] = useState<{}>({})
  useEffect(() => {
    async function getLocation() {
      navigator.geolocation.getCurrentPosition(positions => {
        const { latitude, longitude } = positions.coords
        setPositions({ 'lat': latitude.toString(), 'long': longitude.toString() })
      })
    }
    async function setLocale() {
      sessionStorage.setItem('local', JSON.stringify(positions))
    }
    getLocation()
    setLocale()
  }, [])

  return (
    <div className="absolute top-4 w-96 h-10 bg-transparent rounded-xl border border-white">
      {sessionStorage.getItem('local')}
    </div>
  )
}
