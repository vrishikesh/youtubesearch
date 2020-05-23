import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

instance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["part"] = "snippet";
  config.params["maxResults"] = 5;
  config.params["key"] = "AIzaSyCdVSI2J_lVjGwkgRVwyWRpmL-f8prX8e0";

  return config;
});

export default instance;
