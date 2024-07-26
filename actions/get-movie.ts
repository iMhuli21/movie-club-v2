'use server';

import type { DetailedMovie } from '@/constants/types';

export async function getMovie(movieId: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );

    const json: DetailedMovie = await res.json();

    return json;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}
