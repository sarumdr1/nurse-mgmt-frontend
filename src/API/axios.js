import axios from "../admin/config/axios";
export const get = (url, filters) => {
  try {
    return axios
      .get(url, { params: filters })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    throw error;
  }
};

export const post = (url, data) => {
  try {
    return axios.post(url, data).then((response) => {
      return response;
    });
  } catch (error) {
    throw error;
  }
};

export const patch = (url, data) => {
  try {
    return axios.patch(url, data).then((response) => {
      return response;
    });
  } catch (error) {
    throw error;
  }
};
