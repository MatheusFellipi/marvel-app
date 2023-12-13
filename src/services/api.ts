import axios, { AxiosResponse } from "axios";

export type ResponseType<T> = Promise<AxiosResponse<T>>;

const BASE_URL = "https://gateway.marvel.com/v1/public/";

const Api = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });

  instance.interceptors.response.use(
    (config) => config,
    (error) => {
      const message = error?.response?.data?.response;
      return Promise.reject(error);
    }
  );

  return instance;
};

export default Api();
