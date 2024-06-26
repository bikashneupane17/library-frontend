import { fetchUserInfo } from "./userAxios";
import { setUser } from "./userSlice";

// export const getUserObj = async (dispatch) => {
//   const { status, user, message } = await fetchUserInfo();
//   console.log(status, user, message);

//   //update store
//   dispatch(setUser(user));
// };

export const getUserObj = () => {
  return async (dispatch) => {
    const { status, user, message } = await fetchUserInfo();
    console.log(status, user, message);

    //update store
    dispatch(setUser(user));
  };
};
