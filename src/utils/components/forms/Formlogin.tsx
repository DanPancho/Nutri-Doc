import { ButtonMUI, InputMUI } from "@/components/Inicio Sesion/styles";
import { useForm } from "@/utils/hooks/FormValidation/useForm";
import React from "react";

const FormLogin = () => {
  const {formikLogin} = useForm();
  return (
    <form onSubmit={formikLogin.handleSubmit}>
      <InputMUI
        type={'email'}
        id="email"
        name="email"
        label="Ingrese su correo electrónico"
        variant="standard"
        color="success"
        onChange={formikLogin.handleChange}
        helperText={formikLogin.errors && formikLogin.errors.email}
        sx={{
          "& .MuiFormHelperText-root": {
            color: 'red'
          }
        }}
      />
      <br />
      <InputMUI
        id="password"
        name="password"
        type={'password'}
        label="Ingrese su contraseña"
        variant="standard"
        color="success"
        onChange={formikLogin.handleChange}
        helperText={formikLogin.errors && formikLogin.errors.password}
        sx={{
          "& .MuiFormHelperText-root": {
            color: 'red'
          }
        }}
      />
      <br />
      <ButtonMUI variant="contained" type="submit">
        Iniciar Sesión
      </ButtonMUI>
    </form>
  );
};

export default FormLogin;
