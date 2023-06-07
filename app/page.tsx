'use client'
import Content from "./components/ui/Content";
import { getWeatherInfo } from "./lib/api";
export default async function Home() {

  console.log(window.location)

  console.log(await getWeatherInfo('186.235.62.10'))
  return (
    <main>
      <div className='flex items-center justify-center min-w-screen w-full min-h-screen h-full overflow-hidden bg-sky-300'>

        {/* <Content /> */}
        <Content />
      </div>
    </main>
  );
}
