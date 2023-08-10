import { SEND_MESSAGE, FETCH_MESSAGE } from "../ActionsTypes/Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (messages = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return [...messages, action.payload];
    case FETCH_MESSAGE:
      return action.payload;
    default:
      return messages;
  }
};
