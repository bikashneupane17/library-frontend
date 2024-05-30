import axios from "axios";

const userAPI = import.meta.env.VITE_APP_USERAPI;
const userEP = userAPI + "/renew-accessjwt";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshJWT,
}) => {
  const headers = {
    Authorization: isPrivate
      ? isRefreshJWT
        ? getRefreshJWT()
        : getAccessJWT()
      : null,
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
    console.log(error);
    const message = error?.response?.data?.message ?? error.message;

    if (message === "jwt expired") {
      //now use refreshJWT to request new accessJWT
      const token = await renewAccessJWT();

      //re-call back same api processor
      if (token) {
        return apiProcessor({ method, url, data, isPrivate });
      }

      //clear the tokens
      localStorage.removeItem("refreshJWT");
      sessionStorage.removeItem("accessJWT");
    }
    return {
      status: "error",
      message,
    };
  }
};

const renewAccessJWT = async () => {
  const { accessJWT } = await apiProcessor({
    method: "get",
    url: userEP,
    isPrivate: true,
    isRefreshJWT: true,
  });

  sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};
