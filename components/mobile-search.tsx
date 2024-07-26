'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MobileSearch() {
  const route = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = () => {
    if (searchQuery.length > 1) {
      route.push(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className='md:hidden'>
      <Dialog>
        <DialogTrigger asChild>
          <div className='ring-2 ring-stone-600 focus-within:ring-rose-500 bg-cbackground rounded-lg p-2'>
            <Search size={18} />
          </div>
        </DialogTrigger>
        <DialogContent className='bg-black'>
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
            <DialogDescription className='text-gray-300'>
              Search for any movie...
            </DialogDescription>
          </DialogHeader>
          <div>
            <Input
              placeholder='e.g.spider-man'
              className='bg-cbackground ring-stone-600 border-0 ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-0 placeholder:text-gray-400 text-white'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DialogFooter className='items-end'>
            <DialogClose asChild>
              <Button className='bg-rose-500' onClick={handleSearchQuery}>
                Search
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
