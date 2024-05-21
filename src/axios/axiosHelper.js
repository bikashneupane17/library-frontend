import axios from "axios";

const userAPI = import.meta.env.VITE_APP_USERAPI;
const signupAPI = userAPI + "/signup";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
export const apiProcessor = async ({ method, url, data, isPrivate }) => {
  const headers = {
    Authorization: isPrivate ? getAccessJWT() : null,
  };

  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

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
