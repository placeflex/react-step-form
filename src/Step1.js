import { Typography } from "@material-ui/core";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { PrimaryButton } from "./components/Button";
import { useForm } from "react-hook-form";

export const Step1 = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 1
      </Typography>
      <Form>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
