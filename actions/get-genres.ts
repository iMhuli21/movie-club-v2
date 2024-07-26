'use server';

import type { GenreList } from '@/constants/types';

export async function getGenres() {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?language=en',
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );

    const json: GenreList = await res.json();

    if (!json) {
      return {
        error: 'Something went wrong.',
      };
    }
    return {
      data: json.genres,
    };
  } catch (e) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }
  }
}
