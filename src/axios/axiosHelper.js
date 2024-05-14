import axios from "axios";
const userAPI = import.meta.VITE_APP_USERAPI;

export const signupUser = async (userObj) => {
  try {
    console.log(userObj);
    const newUser = axios.get(userAPI, userObj);
  } catch (error) {
    return error;
  }
};
