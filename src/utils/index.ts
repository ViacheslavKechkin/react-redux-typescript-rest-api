import axios from "axios";

const URL = process.env.URL_ENV || "";

export const requestInstance = axios.create({
  baseURL: URL,
  // headers: {
  //   "Content-Type": "application/json",
  //   "Accept": "application/json"
  // }
})
