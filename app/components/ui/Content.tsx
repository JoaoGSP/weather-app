'use client';
import React, { useState, useEffect } from 'react';
import styles from './content.module.css';
import { montserrat, nunito } from '../../lib/fonts';
import Toggle from './Toggle';
import { getWeatherInfo } from '@/app/lib/getData';
import { ApiData } from '@/app/lib/types/ApiData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Content() {
  const [data, setData] = useState<ApiData>();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    async function fetchData() {
      const dt = await toast.promise(getWeatherInfo('brasilia'), {
        pending: {
          render() {
            return 'Fetching data from api!';
          },
          toastId: 'Pending id',
        },
        success: {
          render() {
            setData(dt);
            if (dt.status === 400) {
              return 'Something has gone wrong...';
            }
            return 'Data fetched!';
          },
          type: `${data?.status === 400 ? 'error' : 'success'}`,
          toastId: 'Success id',
        },
        error: {
          render() {
            return 'Error!';
          },
          toastId: 'Error id',
        },
      });
    }
    fetchData();
  }, []);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
  }

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const newDt = await toast.promise(getWeatherInfo(inputValue), {
      pending: {
        render() {
          return 'Fetching data from api!';
        },
        toastId: 'Pending id',
      },
      success: {
        render() {
          setData(newDt);
          if (newDt.status === 400) {
            return 'Something has gone wrong...';
          }
          return 'Data fetched!';
        },
        type: `${data?.status === 400 ? 'error' : 'success'}`,
        toastId: 'Success id',
      },
      error: {
        render() {
          return 'Error!';
        },
        toastId: 'Error id',
      },
    });
  }

  return (
    <>
      <nav className='flex w-full flex-col items-center'>
        <form
          onSubmit={handleSubmit}
          className=' align-center flex h-10 w-96 justify-between rounded-xl border-2 border-white bg-transparent p-2'
        >
          <input
            id='scope'
            title='scope'
            type='text'
            placeholder={data?.location?.name}
            value={inputValue}
            onChange={handleInputChange}
            className='h-full w-full bg-transparent text-sm font-medium text-gray-500 placeholder:font-normal placeholder:text-gray-500 focus:bg-transparent focus:outline-none'
          ></input>
          <label htmlFor='scope' aria-hidden />
        </form>
        <button
          title='button-submit'
          type='submit'
          onClick={handleSubmit}
          className='mt-3 h-[30px] w-[30px] rounded-full border-2 p-1 text-white hover:scale-105'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='100%'
            fill='currentColor'
            viewBox='0 -960 960 960'
            width='100%'
          >
            <path d='M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z' />
          </svg>
        </button>
      </nav>

      <div className='flex w-full flex-col items-center'>
        <article
          role='banner'
          style={montserrat.style}
          className='z-50 flex h-[450px] w-96 flex-col items-center rounded-[50px] bg-[#F9FFFE] px-5 py-3 shadow-xl'
        >
          {data?.status === 400 ? (
            <>
              <img title='af' src='./giphy.gif' className='mt-10 h-48 w-48 rounded-xl'></img>
              <p className='px-auto my-10 max-w-[200px] text-center font-nunito text-base font-semibold text-gray-500'>
                Waiting for input to fetch the weather forecast... &#x2614;
              </p>
            </>
          ) : (
            <>
              <header className='flex w-full justify-end px-4 py-2'>
                <Toggle />
              </header>
              <div className='flex h-full w-full flex-col items-center justify-evenly'>
                <section
                  aria-label='change-temp-meter-toggle'
                  className='grid h-fit max-h-28 w-fit place-content-center rounded-xl border-4 border-[#3ac5e3] bg-blue-50 bg-transparent px-3 py-2 shadow-xl shadow-sky-100'
                >
                  <span style={nunito.style} className={styles.title}>
                    {data?.current?.temp_c}º
                  </span>
                </section>
                <section
                  aria-label='location-label'
                  className='mt-8 flex-grow text-center text-lg font-medium'
                >
                  <p className='text-gray-900'>{data?.location?.name}</p>
                  <p className='text-gray-900/60'>{data?.location?.country}</p>
                </section>
                <section aria-label='forecast-label' className='flex-grow text-center'>
                  <p className='text-gray-900'>Condition</p>
                  <p className='text-gray-900/60'>{data?.current?.condition.text}</p>
                </section>
              </div>
              <footer>
                <p className='text-xs font-semibold text-gray-900'>
                  Last Update:{' '}
                  <span className='font-light text-gray-900'>{data?.current?.last_updated}</span>
                </p>
              </footer>
            </>
          )}
        </article>
      </div>
      <ToastContainer />
    </>
  );
}
