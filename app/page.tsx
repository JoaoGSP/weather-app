import Content from './components/ui/Content';
import { Moon } from './components/visuals/Moon';
import { Sun } from './components/visuals/Sun';


export default function Home() {
  return (
    <main>
      <div className='flex items-center justify-center min-w-screen w-full min-h-screen h-full overflow-hidden bg-sky-300'>
        <Sun yAxis='-15%' xAxis='-7%' />
        {/* <Content /> */}

      </div>
    </main>
  );
}
