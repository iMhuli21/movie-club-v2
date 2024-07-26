import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import Sidebar from '@/components/sidebar';
import { getMovie } from '@/actions/get-movie';
import { imageBaseUrl, posterSizes } from '@/constants/tmdb';
import { getMovieCredits } from '@/actions/get-movie-credits';
import { getRecommendations } from '@/actions/get-related-movies';
import MovieCard from '@/components/movie';

interface Props {
  params: {
    movieId: string;
  };
}

export default async function MovieDetails({ params: { movieId } }: Props) {
  const [movie, credits, recommendations] = await Promise.all([
    getMovie(movieId),
    getMovieCredits(movieId),
    getRecommendations(movieId),
  ]);

  const genres = movie?.genres.map((genre) => genre.name);

  const cast = credits?.cast.map((member) => member.name);

  const director = credits?.crew.find((cw) => cw.job === 'Director');

  return (
    <main className='grid grid-cols-6 min-h-screen pt-7 px-5'>
      <Sidebar />
      <div className='col-span-6 lg:col-span-5 h-full pb-5 space-y-6'>
        <div className='flex flex-col lg:flex-row lg:gap-10 gap-5'>
          <div className='w-[270px] md:w-[300px]'>
            <Image
              src={`${imageBaseUrl}${posterSizes.md}${movie?.poster_path}`}
              alt='movie poster'
              width={300}
              height={300}
              className='w-full rounded-xl'
              priority
            />
          </div>
          <div className='w-full max-w-[800px] space-y-4'>
            <h1 className='text-2xl lg:text-5xl font-extrabold'>
              {movie?.title}
            </h1>
            <div className='flex items-center gap-4 text-sm'>
              <div className='flex items-center gap-2'>
                <FaStar className='text-yellow-400' />
                <span className='text-white/70'>
                  {movie?.vote_average.toFixed(1)}
                </span>
              </div>
              <span className='text-white/70'>
                {movie?.release_date.split('-')[0]}
              </span>
              <span className='text-white/70'>{movie?.runtime}m</span>
            </div>
            <div className='text-sm text-white/70'>
              <p>{genres?.join(', ')}</p>
            </div>
            <p className='text-sm overflow-hidden line-clamp-4'>
              {movie?.overview}
            </p>
            <div className='grid grid-cols-6 gap-4 text-sm w-full'>
              <h3 className='text-white/70 col-span-6 md:col-span-1'>
                Starring
              </h3>
              <p className='col-span-6 md:col-span-5'>{cast?.join(', ')}</p>
            </div>
            <div className='grid grid-cols-6 gap-5 text-sm w-full'>
              <h3 className='text-white/70 col-span-6 md:col-span-1'>
                Directed By
              </h3>
              <span className='col-span-6 md:col-span-5'>{director?.name}</span>
            </div>
          </div>
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl font-black'>You May Also Like</h2>
          <div className='w-full grid grid-flow-col gap-4 overflow-x-scroll overflow-y-hidden mb-2 movie'>
            {recommendations?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
