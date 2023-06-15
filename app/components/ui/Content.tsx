'use client';
import React, { useState, useEffect } from 'react';
import styles from './content.module.css';
import { montserrat, nunito } from '../../lib/fonts';
import Toggle from './Toggle';
import { getWeatherInfo } from '@/app/lib/getData';
import { ApiData } from '@/app/lib/types/ApiData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Switch } from '@headlessui/react';

export default function Content() {
  const [data, setData] = useState<ApiData>();
  const [inputValue, setInputValue] = useState('');
  const [defaultTemperature, setDefaultTemperature] = useState(false);
  const notify = () => {
    toast.warn('Ops! Something appears to be broken 🤔... Please try again 😄...', {
      position: toast.POSITION.TOP_CENTER,
    })
  }

  useEffect(() => {
    async function fetchData() {
      const dt = await getWeatherInfo('brasilia')
      if (dt.status === 400) {
        notify()
      }
      setData(dt)
      //{
      //   pending: {
      //     render() {
      //       return 'Fetching data from api!';
      //     },
      //     toastId: 'Pending id',
      //   },
      //   success: {
      //     render() {
      //       setData(dt);
      //       if (dt.status === 400) {
      //         return 'Something has gone wrong...';
      //       }
      //       return 'Data fetched!';
      //     },
      //     type: `${data?.status === 400 ? 'error' : 'success'}`,
      //     toastId: 'Success id',
      //   },
      //   error: {
      //     render() {
      //       return 'Error!';
      //     },
      //     toastId: 'Error id',
      //   },
      // });
    }
    fetchData();
  }, []);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  function switchTemperatureScale() {
    return (
      <Switch
        checked={defaultTemperature}
        onChange={setDefaultTemperature}
        className={classNames(
          'relative inline-flex h-fit w-12 cursor-pointer rounded-full bg-transparent px-1 transition-colors duration-200 ease-in-out'
        )}
      >
        <span className='sr-only'>Use setting</span>
        <span
          className={classNames(
            defaultTemperature ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-6 w-6 transform rounded-full bg-transparent shadow ring-0 transition duration-200 ease-in-out'
          )}
        >
          <span
            className={classNames(
              defaultTemperature ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden='true'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='12.5' cy='12.5' r='12.5' fill='#3AC5E3' />
              <path
                d='M13.6184 14.39C13.5384 14.4567 13.3884 14.5467 13.1684 14.66C12.9551 14.7733 12.6918 14.8733 12.3784 14.96C12.0651 15.0467 11.7184 15.0867 11.3384 15.08C10.7584 15.0667 10.2384 14.9633 9.77844 14.77C9.3251 14.57 8.93844 14.3 8.61844 13.96C8.3051 13.62 8.0651 13.23 7.89844 12.79C7.73177 12.35 7.64844 11.88 7.64844 11.38C7.64844 10.82 7.73177 10.3067 7.89844 9.84C8.07177 9.37333 8.3151 8.97 8.62844 8.63C8.94844 8.29 9.32844 8.02667 9.76844 7.84C10.2084 7.65333 10.6951 7.56 11.2284 7.56C11.7218 7.56 12.1584 7.62667 12.5384 7.76C12.9184 7.89333 13.2284 8.03667 13.4684 8.19L12.8984 9.56C12.7318 9.43333 12.5084 9.30333 12.2284 9.17C11.9551 9.03 11.6384 8.96 11.2784 8.96C10.9984 8.96 10.7284 9.02 10.4684 9.14C10.2151 9.25333 9.98844 9.41667 9.78844 9.63C9.5951 9.84333 9.44177 10.0933 9.32844 10.38C9.2151 10.66 9.15844 10.9667 9.15844 11.3C9.15844 11.6533 9.20844 11.9767 9.30844 12.27C9.4151 12.5633 9.5651 12.8167 9.75844 13.03C9.95177 13.2367 10.1818 13.3967 10.4484 13.51C10.7218 13.6233 11.0284 13.68 11.3684 13.68C11.7618 13.68 12.0984 13.6167 12.3784 13.49C12.6584 13.3633 12.8718 13.23 13.0184 13.09L13.6184 14.39ZM14.3711 9.19C14.3711 8.89 14.4378 8.62667 14.5711 8.4C14.7111 8.16667 14.9044 7.98333 15.1511 7.85C15.3978 7.71667 15.6811 7.65 16.0011 7.65C16.3278 7.65 16.6111 7.71667 16.8511 7.85C17.0911 7.98333 17.2744 8.16667 17.4011 8.4C17.5344 8.62667 17.6011 8.89 17.6011 9.19C17.6011 9.48333 17.5344 9.75 17.4011 9.99C17.2744 10.2233 17.0911 10.4067 16.8511 10.54C16.6111 10.6733 16.3244 10.74 15.9911 10.74C15.6778 10.74 15.3978 10.68 15.1511 10.56C14.9044 10.4333 14.7111 10.2533 14.5711 10.02C14.4378 9.78667 14.3711 9.51 14.3711 9.19ZM15.4511 9.2C15.4511 9.31333 15.4744 9.42 15.5211 9.52C15.5678 9.61333 15.6311 9.68667 15.7111 9.74C15.7911 9.79333 15.8811 9.82 15.9811 9.82C16.0944 9.82 16.1911 9.79333 16.2711 9.74C16.3511 9.68667 16.4111 9.61333 16.4511 9.52C16.4978 9.42 16.5211 9.31333 16.5211 9.2C16.5211 9.08 16.4978 8.97333 16.4511 8.88C16.4111 8.78667 16.3511 8.71333 16.2711 8.66C16.1911 8.6 16.0944 8.57 15.9811 8.57C15.8811 8.57 15.7911 8.6 15.7111 8.66C15.6311 8.71333 15.5678 8.78667 15.5211 8.88C15.4744 8.97333 15.4511 9.08 15.4511 9.2Z'
                fill='white'
              />
            </svg>
          </span>
          <span
            className={classNames(
              defaultTemperature ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden='true'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='12.5' cy='12.5' r='12.5' fill='#3AC5E3' />
              <path
                d='M8.08672 7.64H12.6867V9.04H9.53672V10.71H12.2667V12.11H9.53672V15H8.08672V7.64ZM13.3828 9.19C13.3828 8.89 13.4495 8.62667 13.5828 8.4C13.7228 8.16667 13.9161 7.98333 14.1628 7.85C14.4095 7.71667 14.6928 7.65 15.0128 7.65C15.3395 7.65 15.6228 7.71667 15.8628 7.85C16.1028 7.98333 16.2861 8.16667 16.4128 8.4C16.5461 8.62667 16.6128 8.89 16.6128 9.19C16.6128 9.48333 16.5461 9.75 16.4128 9.99C16.2861 10.2233 16.1028 10.4067 15.8628 10.54C15.6228 10.6733 15.3361 10.74 15.0028 10.74C14.6895 10.74 14.4095 10.68 14.1628 10.56C13.9161 10.4333 13.7228 10.2533 13.5828 10.02C13.4495 9.78667 13.3828 9.51 13.3828 9.19ZM14.4628 9.2C14.4628 9.31333 14.4861 9.42 14.5328 9.52C14.5795 9.61333 14.6428 9.68667 14.7228 9.74C14.8028 9.79333 14.8928 9.82 14.9928 9.82C15.1061 9.82 15.2028 9.79333 15.2828 9.74C15.3628 9.68667 15.4228 9.61333 15.4628 9.52C15.5095 9.42 15.5328 9.31333 15.5328 9.2C15.5328 9.08 15.5095 8.97333 15.4628 8.88C15.4228 8.78667 15.3628 8.71333 15.2828 8.66C15.2028 8.6 15.1061 8.57 14.9928 8.57C14.8928 8.57 14.8028 8.6 14.7228 8.66C14.6428 8.71333 14.5795 8.78667 14.5328 8.88C14.4861 8.97333 14.4628 9.08 14.4628 9.2Z'
                fill='white'
              />
            </svg>
          </span>
        </span>
      </Switch>
    );
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
  }

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const newDt = await getWeatherInfo(inputValue)
    if (newDt.status === 400) {
      notify()
    }
    setData(newDt)
    // {
    //   pending: {
    //     render() {
    //       return 'Fetching data from api!';
    //     },
    //     toastId: 'Pending id',
    //   },
    //   success: {
    //     render() {
    //       setData(newDt);
    //       if (newDt.status === 400) {
    //         return 'Something has gone wrong...';
    //       }
    //       return 'Data fetched!';
    //     },
    //     type: `${data?.status === 400 ? 'error' : 'success'}`,
    //     toastId: 'Success id',
    //   },
    //   error: {
    //     render() {
    //       return 'Error!';
    //     },
    //     toastId: 'Error id',
    //   },
    // });
  }

  return (
    <>
      <nav className='flex w-full flex-col items-center'>
        <form
          onSubmit={handleSubmit}
          className=' align-center flex h-10 w-72 lg:w-96 max-w-sm justify-between rounded-xl border-2 border-white bg-transparent p-2'
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
          className='z-50 flex h-[450px] w-72 lg:w-96 max-w-sm flex-col items-center rounded-[50px] bg-[#F9FFFE] px-5 py-3 shadow-xl transition-all'
        >
          {data?.status === 400 || data === undefined ? (
            <>
              <img title='af' src='./giphy.gif' className='mt-10 h-48 w-48 rounded-xl'></img>
              <p className='px-auto my-10 max-w-[200px] text-center font-nunito text-base font-semibold text-gray-500'>
                Waiting for input to fetch the weather forecast... &#x2614;
              </p>
            </>
          ) : (
            <>
              <header className='flex w-full justify-end px-4 py-2'>
                {switchTemperatureScale()}
              </header>
              <div className='flex h-full w-full flex-col items-center justify-evenly'>
                <section
                  aria-label='change-temp-meter-toggle'
                  className='grid h-fit max-h-28 w-fit place-content-center rounded-xl border-4 border-[#3ac5e3] bg-blue-50 bg-transparent px-3 py-2 shadow-xl shadow-sky-100'
                >
                  <span style={nunito.style} className={styles.title}>
                    {!defaultTemperature ? data?.current?.temp_c : data?.current?.temp_f}º
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
