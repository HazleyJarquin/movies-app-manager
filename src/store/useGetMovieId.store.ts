import { createWithEqualityFn } from "zustand/traditional";

type MovieState = {
  movieId: number;
  setMovieId: (movieId: number) => void;
};

export const useGetMovieIdStore = createWithEqualityFn<MovieState>()((set) => ({
  movieId: 0,
  setMovieId: (movieId) => set({ movieId }),
}));
