import axios, { AxiosInstance, AxiosResponse } from "axios";
import constant from ".";
import { getToken, removeToken } from "../utils/token";
import configs from "../config";

import { toast } from 'react-toastify';

interface AuthToken {
  token: string;
}

const instance: AxiosInstance = axios.create({
  baseURL: constant.apiURL,
});

const requestInterceptor = instance.interceptors.request.use(
  (config: any) => {
    const authToken: AuthToken | null = getToken({ name: configs.tokenName });
    if (authToken?.token) {
      config.headers["Authorization"] = "Bearer " + authToken.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseInterceptor = instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response?.data === constant.unAuthorizedMessage) {
      removeToken({ name: constant.tokenName });
      window.location.href = "/";
    }
    if (error.response?.status === 401 || error.response?.status === 403) {
      toast.error(error);
      return Promise.reject(error);
    } else {
      return Promise.reject(error?.response);
    }
  }
);

axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);

export default instance;