import { Menu, Search } from 'lucide-react';
import Image from 'next/image';
import { Input } from './ui/input';
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
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Navbar() {
  return (
    <header>
      <nav className='px-5 py-4 flex items-center justify-between relative'>
        <div className='flex items-center gap-4'>
          <Image
            src='/movie_icon.png'
            alt='movie icon'
            width={40}
            height={40}
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
            />
          </div>
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
                  />
                </div>
                <DialogFooter className='items-end'>
                  <DialogClose>
                    <Button className='bg-rose-500'>Search</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <div>
                  <Menu size={20} />
                </div>
              </SheetTrigger>
              <SheetContent side='left' className='text-white bg-black'>
                <p>Genres</p>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
