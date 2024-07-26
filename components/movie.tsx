'use client';

import Image from 'next/image';
import Rating from './rating';
import { FaStar } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import type { Movie } from '@/constants/types';
import { imageBaseUrl, posterSizes } from '@/constants/tmdb';

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  const route = useRouter();
  return (
    <div
      className='w-[250px] sm:w-[220px] p-2 hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'
      onClick={() => route.push(`/details/${movie.id}`)}
    >
      <div className='w-full space-y-2'>
        <Image
          src={`${imageBaseUrl}${posterSizes.md}${movie.poster_path}`}
          alt='movie poster'
          width={210}
          height={210}
          priority
          className='w-[210px] h-[300px] rounded-xl object-center'
        />
        <div className='space-y-2 w-full'>
          <h3 className='truncate'>{movie.title}</h3>
          <div className='flex items-center justify-between w-full text-sm'>
            <div className='flex items-center gap-2'>
              <FaStar className='text-yellow-400' />
              <span>{movie.vote_average.toFixed(1)}</span>
            </div>
            <Rating
              vote={movie.release_date.split('-')[0]}
              extraStyles='text-xs'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
