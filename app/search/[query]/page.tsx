import { searchMovie } from '@/actions/search-movie';
import MovieCard from '@/components/movie';

interface Props {
  params: {
    query: string;
  };
  searchParams: {
    page?: number;
  };
}

export default async function SearchResults({
  params: { query },
  searchParams: { page },
}: Props) {
  const currPage = page ? page : 1;
  const movies = await searchMovie(encodeURIComponent(query), currPage);
  return (
    <main className='px-5'>
      <div className='flex flex-col items-start gap-2 w-fit mx-auto mt-5'>
        <span className='text-destructive font-medium'>Results for:</span>
        <span className='text-2xl font-bold'>{decodeURIComponent(query)}</span>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full mt-5 place-items-center'>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {!movies && (
        <div className='w-full h-full flex items-center justify-center'>
          No movies found...
        </div>
      )}
    </main>
  );
}
