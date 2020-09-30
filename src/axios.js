import axios from "axios";

const instance = axios.create({
  baseURL: " http://starlord.hackerearth.com/insta",
});

export default instance;
