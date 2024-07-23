import axios from "./axios.customize";

export const createUserApi = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = { fullName, email, password, phone };
  return axios.post(URL_BACKEND, data);
};

export const fetchAllUsersApi = () => {
  const URL_BACKEND = "/api/v1/user";
  return axios.get(URL_BACKEND);
};
