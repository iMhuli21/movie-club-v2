'use server';

import type { MovieCredits } from '@/constants/types';

export async function getMovieCredits(movieId: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );

    const json: MovieCredits = await res.json();

    return json;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}
