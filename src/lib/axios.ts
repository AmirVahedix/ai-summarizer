import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://article-extractor-and-summarizer.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
