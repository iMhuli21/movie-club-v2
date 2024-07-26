'use client';

import Image from 'next/image';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import MobileSearch from './mobile-search';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MobileGenres from './mobile-genres';

export default function Navbar() {
  const route = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const debounceFn = setTimeout(() => {
      if (searchQuery.length > 1) {
        route.push(`/search/${encodeURIComponent(searchQuery)}`);
      }
    }, 1000);

    return () => clearTimeout(debounceFn);
  }, [searchQuery, route]);

  return (
    <header>
      <nav className='px-5 py-4 flex items-center justify-between relative'>
        <div
          className='flex items-center gap-4 hover:cursor-pointer'
          onClick={() => route.push('/')}
        >
          <Image
            src='/movie_icon.png'
            alt='movie icon'
            width={40}
            height={40}
            priority
          />
          <h1 className='tracking-tight font-black text-2xl'>MovieClub</h1>
        </div>
        <div className='flex items-center gap-4'>
          {/* LARGE SCREEN SEARCH COMP */}
          <div className='hidden md:flex items-center gap-2 w-full max-w-sm bg-cbackground pl-2 rounded-lg opacity-75 ring-2 ring-stone-600 focus-within:ring-rose-500 transition-all ease-in-out group duration-300 '>
            <Search
              size={18}
              className='group-focus-within:hidden transition-all ease-in-out duration-150'
            />
            <Input
              placeholder='Search any movies...'
              className='bg-cbackground border-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-sm text-white'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <MobileSearch />
          <MobileGenres />
        </div>
      </nav>
    </header>
  );
}
