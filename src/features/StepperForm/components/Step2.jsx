import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const Step2 = ({ register, errors }) => (
  <div>
    <Form.Group controlId="formFirstName">
      <Form.Label className="fw-bold">First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your first name"
        {...register("firstName", {
          required: "First name is required",
          pattern: {
            value: /^[A-Za-z]+$/,
            message: "Only alphabets are allowed",
          },
          minLength: {
            value: 2,
            message: "Minimum 2 characters required",
          },
          maxLength: {
            value: 50,
            message: "Maximum 50 characters allowed",
          },
        })}
        isInvalid={!!errors.firstName}
      />
      <Form.Control.Feedback type="invalid">{errors.firstName?.message}</Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="formLastName" className="mt-3">
      <Form.Label className="fw-bold">Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your last name (optional)"
        {...register("lastName", {
          pattern: {
            value: /^[A-Za-z]*$/,
            message: "Only alphabets are allowed",
          },
        })}
        isInvalid={!!errors.lastName}
      />
      <Form.Control.Feedback type="invalid">{errors.lastName?.message}</Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="formAddress" className="mt-3">
      <Form.Label className="fw-bold">Address</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Enter your address"
        {...register("address", {
          required: "Address is required",
          minLength: {
            value: 10,
            message: "Minimum length is 10 characters",
          },
        })}
        isInvalid={!!errors.address}
      />
      <Form.Control.Feedback type="invalid">{errors.address?.message}</Form.Control.Feedback>
    </Form.Group>
  </div>
);

Step2.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Step2;
