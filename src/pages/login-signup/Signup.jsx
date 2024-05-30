import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { CustomForm } from "../../components/customForm/CustomForm";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { signupUser } from "../../features/users/userAxios";
import { toast } from "react-toastify";
import { useForm } from "../../hooks/useForm";

export const Signup = () => {
  const { form, setForm, handleOnChange } = useForm();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (rest.password !== confirmPassword)
      return toast("Password do not match");

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
      label: "First Name",
      name: "firstName",
      type: "text",
      required: true,
      placeholder: "Jon",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      required: true,
      placeholder: "Doe",
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "number",
      placeholder: 55555555,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "jon@gmail.com",
    },
    {
      label: "Password",
      name: "password",
      type: "text",
      required: true,
      placeholder: "********",
    },
    {
      label: "Confirm Password",
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
                  <Button type="submit">Signup</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
