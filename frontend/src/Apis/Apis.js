import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
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

export const createChat = (id) => {
  console.log(id);
  return API.post(`${baseURL}/chats/${id}`);
};

export const fetchChats = () => {
  return API.get(`${baseURL}/chats`);
};

export const sendMessage = (content, chatId) => {
  return API.post(`${baseURL}/message`, { content, chatId });
};

export const fetchMessage = (chatId) => {
  return API.get(`${baseURL}/message/${chatId}`);
};
