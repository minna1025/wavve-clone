import axios from "axios";

export const API_KEY = "6168f76b6e8e811fa14c2c1d50c8ec66";
export const BASE_URL = `https://api.themoviedb.org/3`;

export function getMovies(type) {
  return axios(`${BASE_URL}/${type}/popular?api_key=${API_KEY}&language=ko`);
}
