import Content from "./components/ui/Content";
import LocaleNav from "./components/ui/LocaleNav";
import { getWeatherInfo } from "./lib/api";
import { getLoc } from "./lib/getLocation";
export default async function Home() {
  return (
    <main>
      <div className='flex items-center justify-center min-w-screen w-full min-h-screen h-full overflow-hidden bg-sky-300'>
        <LocaleNav />
        {/* <Content /> */}
        <Content />
      </div>
    </main>
  );
}
