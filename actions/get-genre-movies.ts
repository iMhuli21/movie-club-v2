'use server';

import type { MovieList } from '@/constants/types';

export async function getGenreMovies(genreId: string, page: number = 1) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genreId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );

    const json: MovieList = await res.json();

    return json.results;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}
