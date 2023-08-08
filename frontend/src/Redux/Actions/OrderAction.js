import * as api from "../../Apis/Apis";
import { POST_ORDER, FETCH_ORDERS } from "../ActionsTypes/Types";

export const fetchOrders = () => async (dispatch) => {
  try {
    const { data } = await api.getOrders();
    dispatch({ type: FETCH_ORDERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addOrder = (orderData) => async (dispatch) => {
  try {
    const { data } = await api.postOrders(orderData);
    dispatch({ type: POST_ORDER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
