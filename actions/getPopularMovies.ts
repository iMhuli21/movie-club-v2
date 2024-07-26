'use server';

import { MovieList } from '@/constants/types';

export async function getPopularMovies(page: number = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }
  );

  const json: MovieList = await res.json();

  return json.results;
}
