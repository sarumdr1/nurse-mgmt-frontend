import axios from "../config/axios";

export const get = (url: string) => {
  try {
    return axios
      .get(url)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => {
        return error;
      });
  } catch (error) {
    throw error;
  }
};

export const post = (url: string, data: any) => {
  try {
    return axios.post(url, data).then((response: any) => {
      return response;
    });
  } catch (error) {
    throw error;
  }
};

export const patch = (url: string, data: any) => {
  try {
    return axios.patch(url, data).then((response: any) => {
      return response;
    });
  } catch (error) {
    throw error;
  }
};
