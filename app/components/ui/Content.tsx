import React from 'react'
import styles from '../../page.module.css'
import { montserrat, nunito } from '../../lib/fonts';
import Toggle from './Toggle';
export default function Content() {
  return (
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
  )
}
