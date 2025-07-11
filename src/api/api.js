import axios from "axios";

const BASEURL = "https://gnews.io/api/v4/";
const API_KEY = "6e981fac6e2676d087cc37d6d2d3c699";

const request = axios.create({
  baseURL: BASEURL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
export default request;
