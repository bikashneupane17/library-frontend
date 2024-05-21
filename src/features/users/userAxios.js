import { apiProcessor } from "../../axios/axiosHelper";

const userAPI = import.meta.env.VITE_APP_USERAPI;
const signupAPI = userAPI + "/signup";
const loginAPI = userAPI + "/login";

export const loginUser = async (loginObj) => {
  const axiosObj = {
    method: "post",
    url: loginAPI,
    data: loginObj,
  };

  return await apiProcessor(axiosObj);
};

export const fetchUserInfo = async () => {
  const axiosObj = {
    method: "get",
    url: userAPI,
    isPrivate: true,
  };

  return await apiProcessor(axiosObj);
};
