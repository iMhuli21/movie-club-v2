'use server';

import type { MovieList } from '@/constants/types';

export async function getRecommendations(movieId: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
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
