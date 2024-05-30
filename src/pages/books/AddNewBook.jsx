import { Button, Form } from "react-bootstrap";

import { CustomForm } from "../../components/customForm/CustomForm";
import { Link } from "react-router-dom";
import { UserLayout } from "../../components/layout/UserLayout";
import { postNewBook } from "../../features/books/bookAxios";
import { toast } from "react-toastify";
import { useForm } from "../../hooks/useForm";

export const AddNewBook = () => {
  // const [form, setForm] = useState({});

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };

  //custom hook to replace above code
  const { form, handleOnChange } = useForm({});

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const book = await postNewBook(form);
    const { status, message } = book;
    toast[status](message);
    console.log(book);
  };

  const inputs = [
    {
      label: "Title",
      name: "title",
      type: "text",
      required: true,
      placeholder: "Learn JS",
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      required: true,
      placeholder: "George RR Martin",
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "url",
      required: true,
      placeholder: "httpt:something.something.com",
    },
    {
      label: "ISBN",
      name: "isbn",
      type: "text",
      required: true,
      placeholder: "12312ASD",
    },
    {
      label: "Published Year",
      name: "publishedYear",
      type: "number",
      min: "1000",
      required: true,
      placeholder: "1999",
    },
    {
      label: "Description",
      name: "description",
      as: "textarea",
      maxLength: "5000",
      required: true,
      placeholder: "Book Summary....",
      rows: 5,
    },
  ];

  return (
    <UserLayout pageTitle={"New Book"}>
      <div className="">
        <Link to={"/admin/books"}>
          <Button variant="secondary">&lt; Back</Button>
        </Link>
      </div>

      <div className="m-5 p-4 border rounded-4 shadow-lg">
        <h4>Fill up the form to add new book</h4>

        <Form onSubmit={handleOnSubmit}>
          {inputs.map((item, i) => {
            return <CustomForm key={i} {...item} onChange={handleOnChange} />;
          })}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Add Book
            </Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};
