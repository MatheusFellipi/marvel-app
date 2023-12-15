import axios from "axios";
import CryptoJS from "crypto-js";
import { Alert } from "react-native";

const timestamp = new Date().getTime();

const BASE_URL = process.env.EXPO_PUBLIC_API;

const publicKey = process.env.EXPO_PUBLIC_API_KEY ?? "";
const privateKey = process.env.EXPO_PUBLIC_PRIVATE_API_KEY ?? "";

function generateMarvelHash() {
  const dataToHash = timestamp + privateKey + publicKey;
  return CryptoJS.MD5(dataToHash).toString();
}

const url = `&ts=${timestamp}&apikey=${publicKey}&hash=${generateMarvelHash()}`;

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
    config.url += url;
    return config;
  });

  instance.interceptors.response.use(
    (config) => config,
    (error) => {
      const message = error?.response?.data.message;
      Alert.alert("aviso", message);
      return Promise.reject(error);
    }
  );

  return instance;
};

export default Api();
