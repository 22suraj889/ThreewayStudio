import { ACCESS_CHAT, FETCH_CHATS } from "../ActionsTypes/Types";
import * as api from "../../Apis/Apis";

export const accessChat = (id) => async (dispatch) => {
  try {
    const { data } = await api.createChat(id);
    dispatch({ type: ACCESS_CHAT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getChats = () => async (dispatch) => {
  try {
    const { data } = await api.fetchChats();
    console.log(data);
    dispatch({ type: FETCH_CHATS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
