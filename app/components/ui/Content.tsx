'use client'
import React, { useState, useEffect, Suspense } from 'react'
import styles from './content.module.css'
import { montserrat, nunito } from '../../lib/fonts';
import Toggle from './Toggle';
import { getWeatherInfo } from '@/app/lib/getData';
import { ApiData } from '@/app/lib/types/ApiData';

export default function Content() {
  const [data, setData] = useState<ApiData>()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    async function fetchData() {
      const dt = await getWeatherInfo('brasilia')
      {/*Add toast for error handling*/ }
      if (dt.status === 400) {
        throw new Error('Fetch failed');
      }
      setData(dt)
    }
    fetchData()
  }, [])

  function handleInputChange(event: { target: { value: any; }; }) {
    const value = event.target.value
    setInputValue(value)
  }

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault()
    const newDt = await getWeatherInfo(inputValue)
    {/*Add toast for error handling*/ }
    if (newDt.status === 400) {
      throw new Error('Fetch failed');
    }
    setData(newDt)
  }

  return (
    <>
      <nav className='flex flex-col items-center w-full'>
        <form onSubmit={handleSubmit} className=' p-2 w-96 h-10 bg-transparent rounded-xl border-2 border-white flex align-center justify-between'>
          <input id='scope' title='scope' type='text'
            placeholder={data?.location?.name}
            value={inputValue}
            onChange={handleInputChange}
            className="bg-transparent w-full h-full text-sm text-gray-500 font-medium focus:outline-none focus:bg-transparent placeholder:font-normal placeholder:text-gray-500">
          </input>
          <label htmlFor='scope' aria-hidden />
        </form>
        <button type='submit' className='w-[30px] h-[30px] mt-3 p-1 text-white border-2 rounded-full hover:scale-105'>
          <svg xmlns="http://www.w3.org/2000/svg" height="100%" fill='currentColor' viewBox="0 -960 960 960" width="100%">
            <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" />
          </svg>
        </button>
      </nav>

      <div className='flex flex-col w-full items-center'>
        <article style={montserrat.style} className='bg-[#F9FFFE] w-96 h-[450px] z-50 rounded-[50px] shadow-xl flex flex-col items-center py-3 px-5'>
          <header className='w-full flex justify-end py-2 px-4'>
            <Toggle />
          </header>
          <Suspense fallback={<p>Fetching data.....</p>}>
            <div className='w-full h-full flex flex-col items-center justify-evenly'>
              <section className='w-fit bg-transparent shadow-xl shadow-sky-100 max-h-28 h-fit px-3 py-2 bg-blue-50 grid place-content-center rounded-xl border-4 border-[#3ac5e3]'>
                <span style={nunito.style} className={styles.title}>{data?.current?.temp_c}º</span>
              </section>
              <section className='flex-grow font-medium text-center text-lg mt-8'>
                <p className='text-gray-900'>
                  {data?.location?.name}
                </p>
                <p className='text-gray-900/30'>
                  {data?.location?.country}
                </p>
              </section>
              <section className='text-center flex-grow'>
                <p className='text-gray-900'>Condition</p>
                <p className='text-gray-900/30'>{data?.current?.condition.text}</p>
              </section>
            </div>
          </Suspense >
          <footer>
            <p className='text-gray-900 text-xs font-semibold'>
              Last Update: <span className='text-gray-900/30 font-light'>{data?.current?.last_updated}</span>
            </p>
          </footer>
        </article>
      </div>
    </>
  )
}
