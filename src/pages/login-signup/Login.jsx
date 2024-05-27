import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import { CustomForm } from "../../components/customForm/CustomForm";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { getUserObj } from "../../features/users/userAction";
import { loginUser } from "../../features/users/userAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const emailRef = useRef("");
  const passRef = useRef("");

  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!email || !password) {
      return toast.error("Please provide both email and password to login");
    }

    const user = loginUser({ email, password });
    toast.promise(user, { pending: "Verifying user...." });

    const { status, message, tokens } = await user;
    toast[status](message);

    //store tokens in the sessions
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);

    if (status === "success") {
      dispatch(getUserObj());
    }
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "jon@gmail.com",
      inputRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
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

                <div className="d-grid mt-3">
                  <Button type="submit">Login</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
