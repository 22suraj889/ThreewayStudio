import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

const baseURL = "http://localhost:5000";

export const getUsers = () => {
  return API.get(`${baseURL}/users`);
};
export const registerUser = (authData) => {
  return API.post(`${baseURL}/users/register`, authData);
};

export const loginUser = (authData) => {
  return API.post(`${baseURL}/users/login`, authData);
};

export const getOrders = () => {
  return API.get(`${baseURL}/orders`);
};

export const postOrders = (orderData) => {
  return API.post(`${baseURL}/orders`, orderData);
};
