import { apiProcessor } from "../../axios/axiosHelper";

const userAPI = import.meta.env.VITE_APP_USERAPI;
const loginAPI = userAPI + "/login";
const signupAPI = userAPI + "/signup";

//login
export const loginUser = (loginObj) => {
  const axiosObj = {
    method: "post",
    url: loginAPI,
    data: loginObj,
  };
  return apiProcessor(axiosObj);
};

//signuo
export const signupUser = (userObj) => {
  const axiosObj = {
    method: "post",
    url: signupAPI,
    data: userObj,
  };
  return apiProcessor(axiosObj);
};

//fetch user
export const fetchUserInfo = () => {
  const axiosObj = {
    method: "get",
    url: userAPI,
    isPrivate: true,
  };
  return apiProcessor(axiosObj);
};
