import { FETCH_ORDERS, POST_ORDER } from "../ActionsTypes/Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (orders = [], action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return action.payload;
    case POST_ORDER:
      return [...orders, action.payload];
    default:
      return orders;
  }
};
