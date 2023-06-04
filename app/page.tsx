import { Moon } from './components/visuals/Moon';
import { Sun } from './components/visuals/Sun';
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className='flex items-center justify-center min-w-screen w-full min-h-screen h-full overflow-hidden bg-sky-300'>
        <Sun yAxis='-15%' xAxis='-7%' />
        <article className='bg-[#F9FFFE] w-96 h-[450px] z-50 rounded-[50px] shadow-xl flex flex-col items-center py-3 px-5'>
          <header className='w-full flex justify-end'>
            <button type='button' >Change </button>
          </header>
          <div className='w-full h-full bg-red-400 flex flex-col items-center justify-evenly'>
            <section className='w-fit shadow-xl shadow-sky-100 max-h-28 h-fit px-3 pb-2 bg-blue-50 grid place-content-center rounded-xl border-4 border-[#3ac5e3]'>
              <span className={styles.title}>17º</span>
            </section>
            <section className='bg-blue-100 flex-grow'>2</section>
            <section className='bg-blue-200 flex-grow'>3</section>
            <section className='bg-blue-300 flex-grow'>4</section>
          </div>
        </article>
      </div>
    </main>
  );
}
