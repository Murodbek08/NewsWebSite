import axios from "axios";

const BASEURL = "https://newsapi.org/v2";
const APIKEY = "ecdf76b2c792476bb248295f04d7b6a9";

const request = axios.create({
  baseURL: BASEURL,
  headers: { Authorization: APIKEY },
});
export default request;
