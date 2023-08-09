import { ACCESS_CHAT, FETCH_CHATS } from "../ActionsTypes/Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (chats = [], action) => {
  switch (action.type) {
    case ACCESS_CHAT:
      return [...chats, action.payload];
    case FETCH_CHATS:
      return action.payload;
    default:
      return chats;
  }
};
