import { cache } from 'react';
import MovieCard from '@/components/movie';
import Rating from '@/components/rating';
import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { getPopularMovies } from '@/actions/getPopularMovies';
import { backdropSizes, imageBaseUrl } from '@/constants/tmdb';
import { getGenres } from '@/actions/get-genres';
import Link from 'next/link';

export default async function Home() {
  const [movies, genres] = await Promise.all([getPopularMovies(), getGenres()]);

  const hero = movies[0];

  const heroGenres = hero.genre_ids.map((hg) => {
    if (genres?.data) {
      const item = genres.data.find((g) => g.id === hg);
      return item ? item.name : null;
    }
  });

  return (
    <main className='grid grid-cols-6 min-h-screen pt-7 px-5'>
      <Sidebar />
      <div className='col-span-6 lg:col-span-5 h-full pb-5 space-y-6'>
        {/* MAIN CARD HERO*/}
        <section
          className='min-h-[80vh] rounded-xl w-full hero-bg overflow-hidden shadow-2xl shadow-cbackground flex items-center'
          style={{
            backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imageBaseUrl}${backdropSizes.or}${hero.backdrop_path}')`,
            position: 'relative',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className='text-white w-full pl-5 lg:pl-10 lg:w-3/6 flex flex-col items-start gap-4'>
            <h1 className='font-black text-2xl lg:text-5xl w-full tracking-tight'>
              {hero.title}
            </h1>
            <div className='flex items-center gap-4 text-sm font-medium tracking-tight'>
              <span className='text-white/75'>
                {hero.release_date.split('-')[0]}
              </span>
              <Rating vote={hero.vote_average.toFixed(1)} />
            </div>
            <p className='text-white/75 text-sm'>{heroGenres.join(', ')}</p>
            <p className='text-white/75 overflow-hidden line-clamp-2 text-sm'>
              {hero.overview}
            </p>
            <Button
              className='bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 hover:bg-gradient-to-r hover:from-rose-700 hover:to-rose-700 transition-all duration-300 ease-in-out'
              asChild
            >
              <Link
                className='flex items-center gap-4'
                href={`/details/${hero.id}`}
              >
                <PlayCircle />
                <span>More Info</span>
              </Link>
            </Button>
          </div>
        </section>
        {/* WEEKLY TRENDING MVS */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-black'>Weekly Trending Movies</h2>
          <div className='w-full grid grid-flow-col gap-4 overflow-x-scroll overflow-y-hidden mb-2 movie'>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
