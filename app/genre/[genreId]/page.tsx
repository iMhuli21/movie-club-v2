import MovieCard from '@/components/movie';
import Sidebar from '@/components/sidebar';
import { getGenreMovies } from '@/actions/get-genre-movies';
import Pagination from '@/components/pagination';

interface Props {
  params: {
    genreId: string;
  };
  searchParams: {
    name: string;
    page?: number;
  };
}

export default async function GenreMovies({
  params: { genreId },
  searchParams: { name, page },
}: Props) {
  const currPage = page ? page : 1;
  const movies = await getGenreMovies(genreId, currPage);

  return (
    <main className='grid grid-cols-6 min-h-screen pt-7 px-5'>
      <Sidebar />
      <div className='col-span-6 lg:col-span-5 h-full pb-5 space-y-6'>
        <h1 className='capitalize font-extrabold text-3xl text-center'>
          All {name} Movies
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        {!movies ||
          (movies?.length === 0 && (
            <div className='w-full h-full flex items-center justify-center'>
              No movies found...
            </div>
          ))}

        <Pagination />
      </div>
    </main>
  );
}
