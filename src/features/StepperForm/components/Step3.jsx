import { Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

export const Step3 = ({ register, errors }) => (
  <Row>
    <Form.Group as={Col} sm={2} md={4} lg={3} controlId="formCountryCode">
      <Form.Label className="fw-bold">Country Code</Form.Label>
      <Form.Control
        as="select"
        {...register("countryCode", {
          required: "Country code is required",
        })}
        isInvalid={!!errors.countryCode}
      >
        <option value="">Select country code</option>
        <option value="+91">India (+91)</option>
        <option value="+1">America (+1)</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">{errors.countryCode?.message}</Form.Control.Feedback>
    </Form.Group>

    <Form.Group sm={10} md={8} lg={9} as={Col} controlId="formPhoneNumber">
      <Form.Label className="fw-bold">Phone Number</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your phone number"
        {...register("phoneNumber", {
          required: "Phone number is required",
          pattern: {
            value: /^\d{10}$/,
            message: "Phone number must be 10 digits",
          },
        })}
        isInvalid={!!errors.phoneNumber}
      />
      <Form.Control.Feedback type="invalid">{errors.phoneNumber?.message}</Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="formTerms" className="mt-3">
      <Form.Check
        type="checkbox"
        label="I accept the terms and conditions"
        {...register("acceptTermsAndCondition", {
          required: "You must accept the terms and conditions",
        })}
        isInvalid={!!errors.acceptTermsAndCondition}
      />
      <Form.Control.Feedback type="invalid">
        {errors.acceptTermsAndCondition?.message}
      </Form.Control.Feedback>
    </Form.Group>
  </Row>
);

Step3.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Step3;
