import { useQuery } from "react-query";
import { API_BASE_URL, API_KEY } from "../shared/apiConfig";
import axios from "axios";

const getMovieList = async (page: number, lng: string) => {
  const response = await axios.get(
    `${API_BASE_URL}/movie/popular?language=${lng}&page=${page}&api_key=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response?.data;
};
export const useGetMovieList = (page: number, lng: string) => {
  return useQuery(["getMovieList", page, lng], {
    keepPreviousData: true,
    async queryFn() {
      return getMovieList(page, lng);
    },
  });
};
