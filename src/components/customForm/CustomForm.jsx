import { Form } from "react-bootstrap";

export const CustomForm = ({ lable, ...rest }) => {
  return (
    <>
      <Form.Group className="mb-3">
        {lable && <Form.Label>{lable}</Form.Label>}
        <Form.Control {...rest} />
      </Form.Group>
    </>
  );
};
