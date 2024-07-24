import Movie from '@/components/movie';
import Rating from '@/components/rating';
import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className='grid grid-cols-6 min-h-screen pt-7 px-5'>
      <Sidebar />
      <div className='col-span-6 lg:col-span-5 h-full pb-5 space-y-6'>
        {/* MAIN CARD HERO*/}
        <section className='min-h-[80vh] rounded-xl w-full hero-bg overflow-hidden shadow-2xl shadow-cbackground flex items-center'>
          <div className='text-white w-full pl-5 lg:pl-10 lg:w-3/6 flex flex-col items-start gap-4'>
            <h1 className='font-black text-2xl lg:text-5xl w-full tracking-tight'>
              Spiderman: No way Home
            </h1>
            <div className='flex items-center gap-4 text-sm font-medium tracking-tight'>
              <span className='text-white/75'>2020</span>
              <Rating text='7.5' />
            </div>
            <div className='text-white/75 text-sm'>
              <p>Action, Adventure, Science Fiction</p>
            </div>
            <p className='text-white/75 overflow-hidden line-clamp-2 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              mollitia similique minima expedita repudiandae dignissimos natus
              atque. Et quos repellat voluptates rem impedit! Suscipit autem
              dignissimos quasi, architecto laboriosam ex. Architecto voluptate
              asperiores laudantium veniam voluptates voluptas consequatur
              alias, recusandae sed iure adipisci mollitia aspernatur facilis
              dolor maiores animi, fuga cum impedit assumenda aperiam? Et quasi
              assumenda enim autem atque!
            </p>
            <Button className='flex items-center gap-4 bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 hover:bg-gradient-to-r hover:from-rose-700 hover:to-rose-700 transition-all duration-300 ease-in-out'>
              <PlayCircle />
              <span>More Info</span>
            </Button>
          </div>
        </section>
        {/* WEEKLY TRENDING MVS */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-black'>Weekly Trending Movies</h2>
          <div className='w-full grid grid-flow-col gap-4 overflow-x-scroll overflow-y-hidden mb-2 movie'>
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
          </div>
        </section>
      </div>
    </main>
  );
}
