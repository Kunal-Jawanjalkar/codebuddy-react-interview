import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const Step1 = ({ register, errors }) => {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <div>
      <Form.Group controlId="formEmailId">
        <Form.Label className="fw-bold">Email ID</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          {...register("emailId", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
          isInvalid={!!errors.emailId}
        />
        <Form.Control.Feedback type="invalid">{errors.emailId?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword" className="mt-3">
        <Form.Label className="fw-bold">Password</Form.Label>
        <div className="position-relative">
          <Form.Control
            type={isShowPass ? "password" : "text"}
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})(?=(?:.*\d){2})(?=(?:.*[\W_]){2}).{8,}$/,
                message:
                  "Password must contain at least 2 uppercase, 2 lowercase, 2 digits, and 2 special characters",
              },
            })}
            isInvalid={!!errors.password}
          />
          <Button
            variant="light"
            className="position-absolute align-items-center end-0 top-0 border"
            onClick={() => setIsShowPass(!isShowPass)}
          >
            {isShowPass ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
          </Button>
          <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
        </div>
      </Form.Group>
    </div>
  );
};

Step1.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Step1;
