import { AUTH, FETCH_USERS, LOGOUT } from "../ActionsTypes/Types";
import * as api from "../../Apis/Apis";

// getUsers
export const getAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    console.log(data);
    dispatch({ type: FETCH_USERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
//register
export const register = (authData) => async (dispatch) => {
  try {
    console.log(authData);
    const { data } = await api.registerUser(authData);
    dispatch({ type: AUTH, payload: data });
  } catch (e) {
    console.log(e);
  }
};

//login
export const login = (authData) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(authData);
    console.log(data);
    dispatch({ type: AUTH, payload: data });
  } catch (e) {
    console.log(e);
  }
};

// logout action creator
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
