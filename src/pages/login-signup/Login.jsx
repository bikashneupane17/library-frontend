import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { CustomForm } from "../../components/customForm/CustomForm";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const inputs = [
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
  ];

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col className="mt-5 mb-5 d-flex justify-content-center align-items-center">
            <div className="w-75 p-5 border rounded shadow-lg">
              <h2>Login Now!</h2>
              <Form>
                {inputs.map((item, i) => {
                  return (
                    <CustomForm key={i} {...item} onChange={handleOnChange} />
                  );
                })}

                <div className="d-grid mt-3">
                  <Button>Login</Button>
                </div>
              </Form>
              <div className="mt-2 d-flex justify-content-end ">
                <h5>
                  Already a customer? <Link to="/login">Login</Link>
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
