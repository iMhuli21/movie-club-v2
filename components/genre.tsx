'use client';

import { Genre } from '@/constants/types';
import { useRouter } from 'next/navigation';

interface Props {
  genre: Genre;
}

export default function GenreCard({ genre }: Props) {
  const route = useRouter();

  const handleClick = () => {
    route.push(`/genre/${genre.id}?name=${genre.name}`);
  };
  return (
    <li
      className='p-1 text-white/50 font-medium w-full text-sm hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out'
      onClick={handleClick}
    >
      {genre.name}
    </li>
  );
}
