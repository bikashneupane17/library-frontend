import { Button, Table } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getAllBooksAction } from "../features/books/bookAction";

const isPrivate = true;
export const BookTable = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    dispatch(getAllBooksAction(isPrivate));
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{books.length} Books found!</div>

        <div className="search-book">
          <input type="text" className="form-control" />
        </div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Book</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.thumbnail} width={"70px"} alt="" />
                </td>
                <td>
                  <div>
                    <h2>{item.title.slice(0, 30)}</h2>
                    <div>{item.author}</div>
                    <div
                      className={
                        item.status === "active"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      Status: {item.status}
                    </div>
                  </div>
                </td>
                <td>
                  <Link to={`/admin/books/edit/${item._id}`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
