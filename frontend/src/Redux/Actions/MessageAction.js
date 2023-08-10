import { SEND_MESSAGE, FETCH_MESSAGE } from "../ActionsTypes/Types";
import * as api from "../../Apis/Apis";

export const sendMsg = (content, chatId, socket) => async (dispatch) => {
  try {
    console.log(content, chatId);
    const { data } = await api.sendMessage(content, chatId);
    socket.emit("new message", data);
    dispatch({ type: SEND_MESSAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchMsg = (chatId) => async (dispatch) => {
  try {
    console.log(chatId);
    const { data } = await api.fetchMessage(chatId);
    console.log(data);
    dispatch({ type: FETCH_MESSAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
