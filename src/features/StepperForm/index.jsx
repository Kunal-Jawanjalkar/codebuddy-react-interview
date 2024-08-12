import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Card } from "react-bootstrap";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const navigate = useNavigate();

  const submitData = async (formData) => {
    try {
      const response = await fetch("https://codebuddy.review/submit", {
        method: "POST",

        body: JSON.stringify(formData),
      });

      // Check if the response is successful
      if (response.ok) {
        toast.success("Data Saved");
        if (step === 3) {
          navigate("/posts");
        }
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const onSubmit = (data) => {
    delete data.acceptTermsAndCondition;
    submitData(data);
  };

  const nextStep = async () => {
    const valid = await trigger(); // Validate the current step fields
    if (valid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <Card className="bg-light form-card mx-auto mt-5 border-0 p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <Step1 register={register} errors={errors} />}
        {step === 2 && <Step2 register={register} errors={errors} />}
        {step === 3 && <Step3 register={register} errors={errors} />}

        <div className="d-flex  justify-content-end mt-3">
          <Button
            size="sm"
            className="fw-bold"
            type="button"
            onClick={prevStep}
            disabled={step === 1}
          >
            <BsArrowLeft className="me-1" size={20} /> Back
          </Button>

          <Button size="sm" className="fw-bold ms-2" type="submit">
            Save
          </Button>

          <Button
            size="sm"
            className="fw-bold ms-2"
            type="submit"
            onClick={nextStep}
            disabled={step === 3}
          >
            Save & Next <BsArrowRight className="ms-1" size={20} />
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default StepperForm;
