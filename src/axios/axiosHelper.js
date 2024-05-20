import axios from "axios";

const userAPI = import.meta.env.VITE_APP_USERAPI;
const signupAPI = userAPI + "/signup";
const loginAPI = userAPI + "/login";

export const signupUser = async (userObj) => {
  try {
    const { data } = await axios.post(signupAPI, userObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (loginObj) => {
  try {
    const { data } = await axios.post(loginAPI, loginObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
