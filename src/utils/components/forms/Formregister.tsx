import { ButtonMUI, InputMUI } from "@/components/Inicio Sesion/styles";
import { useForm } from "@/utils/hooks/FormValidation/useForm";
import React from "react";

const FormRegister = () => {
  const { formikRegister } = useForm();
  return (
    <form onSubmit={formikRegister.handleSubmit}>
      <InputMUI
        id="email"
        name="email"
        label="Ingrese su correo electronico"
        variant="standard"
        color="success"
        onChange={formikRegister.handleChange}
        helperText={formikRegister.errors && formikRegister.errors.email}
        sx={{
          "& .MuiFormHelperText-root": {
            color: "red",
          },
        }}
      />
      <br />
      <InputMUI
        id="password"
        name="password"
        label="Ingrese su contraseña"
        variant="standard"
        color="success"
        type={"password"}
        onChange={formikRegister.handleChange}
        helperText={
          formikRegister.errors && formikRegister.errors.password
        }
        sx={{
          "& .MuiFormHelperText-root": {
            color: "red",
          },
        }}
      />
      <br />
      <InputMUI
        id="passwordRep"
        name="passwordRep"
        label="Ingrese nuevamente su contraseña"
        variant="standard"
        color="success"
        type={"password"}
        onChange={formikRegister.handleChange}
        helperText={
          formikRegister.errors && formikRegister.errors.passwordRep
        }
        sx={{
          "& .MuiFormHelperText-root": {
            color: "red",
          },
        }}
      />
      <br />
      <ButtonMUI variant="contained" type="submit">
        Crear Cuenta
      </ButtonMUI>
    </form>
  );
};

export default FormRegister;
