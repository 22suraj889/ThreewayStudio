import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import OrderReducer from "./OrderReducer";
import UserReducer from "./UserReducer";
import ChatReducers from "./ChatReducers";
import MessageReducers from "./MessageReducer";
export default combineReducers({
  auth: AuthReducer,
  orders: OrderReducer,
  allUsers: UserReducer,
  chats: ChatReducers,
  messages: MessageReducers,
});
