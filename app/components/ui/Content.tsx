'use client'
import React, { useState, useEffect } from 'react'
import styles from './content.module.css'
import { montserrat, nunito } from '../../lib/fonts';
import Toggle from './Toggle';
import { getWeatherInfo } from '@/app/lib/api';

export default function Content() {
  const [query, setQuery] = useState('')
  const [lat, setLat] = useState<any>([])
  const [long, setLong] = useState<any>([])
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchData() {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })
      const dt = await getWeatherInfo(`${lat},${long}`)
      if (!data) {

        setData(dt)
      }
    }
    fetchData()
  }, [lat, long])

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await getWeatherInfo(e.target)
    const formData = new FormData(res)
    const formjson = Object.fromEntries(formData.entries())

    console.log(formjson)
  }

  return (
    <>
      <nav className='flex flex-col items-center w-full'>
        <form method='get' onSubmit={handleSubmit}>
          <input id='scope' title='scope' type='text'
            value={query}
            placeholder={data?.location?.name ?? 'Brasilia'}
            onChange={e => setQuery(e.target.value)}
            className="w-96 h-10 bg-transparent rounded-xl border border-white focus:outline-none">
          </input>
          <label htmlFor='scope' aria-hidden />
        </form>
      </nav>
      <div className='flex flex-col w-full items-center'>
        <article style={montserrat.style} className='bg-[#F9FFFE] w-96 h-[450px] z-50 rounded-[50px] shadow-xl flex flex-col items-center py-3 px-5'>
          <header className='w-full flex justify-end py-2 px-4'>
            <Toggle />
          </header>
          <div className='w-full h-full flex flex-col items-center justify-evenly'>
            <section className='w-fit bg-transparent shadow-xl shadow-sky-100 max-h-28 h-fit px-3 py-2 bg-blue-50 grid place-content-center rounded-xl border-4 border-[#3ac5e3]'>
              <span style={nunito.style} className={styles.title}>17º</span>
            </section>
            <section className='flex-grow font-medium text-center text-lg mt-8'>
              <p className='text-gray-900'>
                Beijing
              </p>
              <p className='text-gray-900/30'>
                China
              </p>
            </section>
            <section className='text-center flex-grow'>
              <p className='text-gray-900'>Condition</p>
              <p className='text-gray-900/30'>Clear</p>
            </section>
          </div>
          <footer>
            <p className='text-gray-900 text-xs font-semibold'>
              Last Update: <span className='text-gray-900/30 font-light'>02:00h</span>
            </p>
          </footer>
        </article>
      </div>
    </>
  )
}
