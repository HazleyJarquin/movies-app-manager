import { useQuery } from "react-query";
import { API_BASE_URL, API_KEY } from "../shared/apiConfig";
import axios from "axios";
import { IMoviesByIdResponse } from "../interfaces";

const getMovieById = async (id: number) => {
  const response = await axios.get(
    `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response?.data;
};
export const useGetMovieById = (id: number) => {
  return useQuery<IMoviesByIdResponse>(["getMovieById", id], async () => {
    if (!id) {
      return {};
    }
    return getMovieById(id);
  });
};
