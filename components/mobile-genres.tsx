'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Menu } from 'lucide-react';
import { Genre } from '@/constants/types';
import { useEffect, useState } from 'react';
import { getGenres } from '@/actions/get-genres';
import GenreCard from './genre';
import Loader from './loader';

export default function MobileGenres() {
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      setLoading(true);
      const res = await getGenres();
      if (res?.data) {
        setGenres(res.data);
      }
      setLoading(false);
    };

    fetchGenres();
  }, []);
  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <div>
            <Menu size={20} />
          </div>
        </SheetTrigger>
        <SheetContent
          side='left'
          className='text-white bg-black overflow-y-auto movie overflow-x-hidden'
        >
          <SheetHeader className='flex flex-col items-start gap-1 w-full'>
            <SheetTitle className='text-white'>Genres</SheetTitle>
            <SheetDescription className='text-white/70 text-sm'>
              Select by genre
            </SheetDescription>
          </SheetHeader>
          {loading && <Loader />}
          <ul className='flex flex-col items-start gap-2 mt-6 w-full'>
            {genres.map((genre) => (
              <GenreCard key={genre.id} genre={genre} />
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
