import axios from "axios";

const BASEURL = "https://newsapi.org/v2";
const API_KEY = "edfb628062cf4234ba00dbdbce7898fb";

const request = axios.create({
  baseURL: BASEURL,
  headers: {
    "x-api-key": API_KEY,
  },
});
export default request;
