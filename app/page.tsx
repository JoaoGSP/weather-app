import { CloudNumberOne, CloudNumberTwo, RainyCloud } from './components/visuals/Cloud';
export default function Home() {
  return (
    <main>
      <div className='mx-auto flex h-screen w-3/4 flex-col items-center justify-center bg-slate-200'>
        <CloudNumberOne />
        <CloudNumberTwo />
        <RainyCloud />
      </div>
    </main>
  );
}
