import axios, { AxiosResponse } from "axios";
import CryptoJS from "crypto-js";
import { Alert } from "react-native";
export type ResponseType<T> = Promise<AxiosResponse<T>>;

const BASE_URL = process.env.EXPO_PUBLIC_API;

const publicKey = process.env.EXPO_PUBLIC_API_KEY;
const privateKey = process.env.EXPO_PRIVATE_API_KEY;

function generateMarvelHash() {
  const timestamp = new Date().getTime();
  const dataToHash = timestamp + privateKey + publicKey;
  return CryptoJS.MD5(dataToHash).toString();
}

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

  instance.interceptors.request.use(async function (config) {
    config.url += generateMarvelHash();
    console.log(config.url);
    
    return config;
  });

  instance.interceptors.response.use(
    (config) => config,
    (error) => {
      const message = error?.response?.data?.response;
      Alert.alert("aviso", message);
      return Promise.reject(error);
    }
  );

  return instance;
};

export default Api();
