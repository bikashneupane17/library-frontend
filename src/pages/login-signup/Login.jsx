import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useRef, useState } from "react";

import { CustomForm } from "../../components/customForm/CustomForm";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { loginUser } from "../../axios/axiosHelper";
import { toast } from "react-toastify";

export const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!email || !password) {
      return toast.error("Both field must be filled");
    }

    const user = await loginUser({ email, password });

    console.log(user);
  };

  const inputs = [
    {
      lable: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "jon@gmail.com",
      inputRef: emailRef,
    },
    {
      lable: "Password",
      name: "password",
      type: "text",
      required: true,
      placeholder: "********",
      inputRef: passRef,
    },
  ];

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col className="mt-5 mb-5 d-flex justify-content-center align-items-center">
            <div className="w-75 p-5 border rounded shadow-lg">
              <h2>Login Now!</h2>
              <Form onSubmit={handleOnSubmit}>
                {inputs.map((item, i) => {
                  return <CustomForm key={i} {...item} />;
                })}

                {/* <input type="text" ref={emailRef}></input> */}
                <div className="d-grid mt-3">
                  <Button type="submit">Login</Button>
                </div>
              </Form>
              {/* <div className="mt-2 d-flex justify-content-end ">
                <h5>
                  Already a customer? <Link to="/login">Login</Link>
                </h5>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
