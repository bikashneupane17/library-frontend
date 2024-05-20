import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { CustomForm } from "../../components/customForm/CustomForm";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { signupUser } from "../../axios/axiosHelper";
import { toast } from "react-toastify";
import { useState } from "react";

export const Signup = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    // setError("");

    // if (name === "confirmPassword") {
    //   form.password !== value && setError("Password must match");
    //   form.password.length < 6 &&
    //     setError("Password must be atleast 6 character");

    //   !/[a-z]/.test(form.password) &&
    //     setError("Password must have atleast 1 Lowercase");
    //   !/[A-Z]/.test(form.password) &&
    //     setError("Password must have atleast 1 Uppercase");
    //   !/[0-9]/.test(form.password) &&
    //     setError("Password must have atleast 1 Number");

    //   !/[@#$%^&*()_+!}{":?><|]/.test(form.password) &&
    //     setError("Password must have at least 1 special character");
    // }

    // if (name === "password" && form.confirmPassword) {
    //   form.confirmPassword !== value && setError("Password do not match");
    // }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (rest.password !== confirmPassword) {
      return alert("password do not match");
    }

    const responsePending = signupUser(rest);
    toast.promise(responsePending, {
      pending: "Please Wait.....",
    });

    const { status, message } = await responsePending;
    toast[status](message);
    setForm({});
  };

  const inputs = [
    {
      lable: "First Name",
      name: "firstName",
      type: "text",
      required: true,
      placeholder: "Jon",
    },
    {
      lable: "Last Name",
      name: "lastName",
      type: "text",
      required: true,
      placeholder: "Doe",
    },
    {
      lable: "Phone Number",
      name: "phone",
      type: "number",
      placeholder: 55555555,
    },
    {
      lable: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "jon@gmail.com",
    },
    {
      lable: "Password",
      name: "password",
      type: "text",
      required: true,
      placeholder: "********",
    },
    {
      lable: "Confirm Password",
      name: "confirmPassword",
      type: "text",
      required: true,
      placeholder: "********",
    },
  ];

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col className="mt-5 mb-5 d-flex justify-content-center align-items-center">
            <div className="w-75 p-5 border rounded shadow-lg">
              <h2>Join Community!</h2>
              <Form onSubmit={handleOnSubmit}>
                {inputs.map((item, i) => {
                  return (
                    <CustomForm key={i} {...item} onChange={handleOnChange} />
                  );
                })}

                <div className="d-grid mt-3">
                  <Button type="submit" disabled={error}>
                    Signup
                  </Button>
                </div>
              </Form>
              {error && (
                <div className="mt-3">
                  <ul>
                    <li className="text-danger fw-bold">{error}</li>
                  </ul>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
