'use client'
import { useEffect, useState } from "react";

async function getLoc() {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);


  useEffect(() => {
    async function loadPosition() {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        const { latitude, longitude } = position.coords;
        // console.log(latitude);
        // console.log(longitude);
        setInitialPosition([latitude, longitude]);
      })
    }
    loadPosition()
  }, [])

  return initialPosition

}

export { getLoc }