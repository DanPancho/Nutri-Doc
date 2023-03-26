import React from "react";
import YupPassword from "yup-password";
import * as yup from "yup";
import { useFormik } from "formik";
import { useInicioSesion } from "../InicioSesion/useLogin";

YupPassword(yup);
const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingrese un correo valido")
    .required("Por favor ingrese su correo"),
  password: yup
    .string()
    .required("Por favor ingrese su contraseña")
    .min(8, "Su contraseña debe tener al menos 8 carácteres.")
    .max(20, "Su contraseña no debe ser mayor a 20 caracteres")
});
const schemaRegister = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingrese un correo valido")
    .required("Por favor ingrese su correo"),
  password: yup
    .string()
    .required("Por favor ingrese su contraseña")
    .min(8, "Su contraseña debe tener al menos 8 carácteres.")
    .max(20, "Su contraseña no debe ser mayor a 20 caracteres")
    .minLowercase(1, "La contraseña debe contener una letra mayuscula")
    .minUppercase(1, "La contraseña debe contener una letra minuscula")
    .minNumbers(1, "La contraseña debe contener un número")
    .minSymbols(1, "La contraseña debe contener un caracter especial"),
  passwordRep: yup
    .string()
    .required("Por favor ingrese su contraseña")
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden.'),
});
export const useForm = () => {
    const {LoginEmail, Register} = useInicioSesion();
    const formikLogin = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    validationSchema: schemaLogin,
    onSubmit: (values) => LoginEmail(values),
    })
    const formikRegister = useFormik({
      initialValues: {
          email: "",
          password: "",
          passwordRep: ""
      },
      validationSchema: schemaRegister,
      onSubmit: (values) => Register(values),
      })
  return {
    formikLogin,
    formikRegister
  }
};

