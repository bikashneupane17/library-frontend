import { Form } from "react-bootstrap";

export const CustomForm = ({ lable, inputRef, ...rest }) => {
  return (
    <>
      <Form.Group className="mb-3">
        {lable && <Form.Label>{lable}</Form.Label>}
        <Form.Control {...rest} ref={inputRef} />
      </Form.Group>
    </>
  );
};
