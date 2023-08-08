import { FETCH_USERS } from "../ActionsTypes/Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (users = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      users = action.payload;
      return users;
    default:
      return users;
  }
};
