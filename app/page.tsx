import { Moon } from './components/visuals/Moon';
import { Sun } from './components/visuals/Sun';
export default function Home() {
  return (
    <main>
      <Moon yAxis='-20%' xAxis='-15%' />
      <Sun reverse yAxis='-20%' xAxis='-15%' />
    </main>
  );
}
