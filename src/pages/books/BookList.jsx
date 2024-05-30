import { Button, Table } from "react-bootstrap";

import { BookTable } from "../../table/BookTable";
import { Link } from "react-router-dom";
import { UserLayout } from "../../components/layout/UserLayout";

export const BookList = () => {
  return (
    <UserLayout>
      <h4 className="text-center">Book List</h4>
      <div className="d-flex justify-content-end">
        <Link to={"/admin/books/new"}>
          <Button variant="primary">Add New Book</Button>
        </Link>
      </div>
      <BookTable />
    </UserLayout>
  );
};
