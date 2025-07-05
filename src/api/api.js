import axios from "axios";

const BASEURL = "https://newsapi.org/v2";
const APIKEY = "edfb628062cf4234ba00dbdbce7898fb";

const request = axios.create({
  baseURL: BASEURL,
  headers: { Authorization: APIKEY },
});
export default request;
