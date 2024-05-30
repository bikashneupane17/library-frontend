import { apiProcessor } from "../../axios/axiosHelper";

const bookAPI = import.meta.env.VITE_APP_BOOKAPI;

export const postNewBook = async (bookObj) => {
  const axiosObj = {
    method: "post",
    url: bookAPI,
    data: bookObj,
    isPrivate: true,
  };

  return await apiProcessor(axiosObj);
};

//post edit book
export const putEditBook = async (bookObj) => {
  const axiosObj = {
    method: "put",
    url: bookAPI,
    data: bookObj,
    isPrivate: true,
  };

  return await apiProcessor(axiosObj);
};

//if isPrivate = true, api = /books/all
//if isPrivate = false, api = /books
export const fetchBooks = async (isPrivate) => {
  const axiosObj = {
    method: "get",
    url: isPrivate ? bookAPI + "/all" : bookAPI,
    isPrivate: true,
  };

  return await apiProcessor(axiosObj);
};

//get a single book to edit
export const fetchSingleBook = async (_id) => {
  const axiosObj = {
    method: "get",
    url: bookAPI + "/" + _id,
  };

  return await apiProcessor(axiosObj);
};
