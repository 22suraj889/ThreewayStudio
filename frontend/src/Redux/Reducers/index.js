import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import OrderReducer from "./OrderReducer";
import UserReducer from "./UserReducer";
export default combineReducers({
  auth: AuthReducer,
  orders: OrderReducer,
  allUsers: UserReducer,
});
