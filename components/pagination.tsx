'use client';

import { Button } from './ui/button';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Pagination() {
  const route = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePrev = () => {
    const currPage = Number(searchParams.get('page'));

    if (currPage) {
      if (currPage !== 1) {
        const requestedPage = currPage - 1;

        const newParams = new URLSearchParams(searchParams.toString());

        newParams.set('page', requestedPage.toString());

        route.push(`${pathname}?${newParams.toString()}`);
      }
    }
  };

  const handleNext = () => {
    const currPage = Number(searchParams.get('page'));

    if (currPage) {
      const requestedPage = currPage + 1;

      const newParams = new URLSearchParams(searchParams.toString());

      newParams.set('page', requestedPage.toString());

      route.push(`${pathname}?${newParams.toString()}`);
    } else {
      const requestedPage = 2;

      const newParams = new URLSearchParams(searchParams.toString());

      newParams.set('page', requestedPage.toString());

      route.push(`${pathname}?${newParams.toString()}`);
    }
  };

  return (
    <div className='flex items-center gap-4 justify-center w-full mt-5'>
      <Button onClick={handlePrev} variant='secondary'>
        Prev
      </Button>
      <Button
        onClick={handleNext}
        className='bg-black text-white hover:bg-black/50'
      >
        Next
      </Button>
    </div>
  );
}
