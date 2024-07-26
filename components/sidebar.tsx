import { cache } from 'react';
import { getGenres } from '@/actions/get-genres';
import GenreCard from './genre';

const getData = cache(async () => {
  const data = await getGenres();

  return data;
});

export default async function Sidebar() {
  const res = await getData();

  return (
    <div className='hidden lg:block lg:col-span-1 h-full px-4'>
      <h3 className='font-bold text-lg'>Genre</h3>
      <ul className='flex flex-col items-start gap-2 mt-6 w-full'>
        {res?.data &&
          res.data.map((genre) => <GenreCard key={genre.id} genre={genre} />)}
      </ul>
    </div>
  );
}
