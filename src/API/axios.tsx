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

export const put = (url: string, data: any) => {
  try {
    return axios.put(url, data).then((response: any) => {
      return response;
    });
  } catch (error) {
    throw error;
  }
};

export const deletes = (url: string) => {
  try {
    return axios.delete(url).then((response: any) => {
      return response;
    });
  } catch (error) {
    throw error;
  }
};