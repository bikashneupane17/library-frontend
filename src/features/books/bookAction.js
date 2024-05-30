import { fetchBooks, fetchSingleBook, postNewBook } from "./bookAxios";
import { setBook, setSelectedBook } from "./bookSlice";

import { toast } from "react-toastify";

export const postNewBookAction = (bookObj) => async (dispatch) => {
  //call axios to send data
  const pendingBook = postNewBook(bookObj);
  toast.promise(pendingBook, {
    pending: "Getting book....",
  });

  const { status, message } = await pendingBook;
  console.log(status, message);

  //then call function to fetch all the data
};

export const getAllBooksAction = (isPrivate) => async (dispatch) => {
  const { status, books } = await fetchBooks(isPrivate);
  if (status) {
    dispatch(setBook(books));
  }
};

//single book to edit
export const getSingleBooksAction = (_id) => async (dispatch) => {
  const { status, books } = await fetchSingleBook(_id);
  if (status) {
    dispatch(setSelectedBook(books));
  }
};
