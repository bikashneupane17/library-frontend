import { Button, Table } from "react-bootstrap";

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
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </UserLayout>
  );
};
