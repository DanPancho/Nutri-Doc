import React from "react";
import {
  ButtonMUI,
  Component,
  FormComponent,
  FullHeightDiv,
  InputMUI,
  Title,
} from "./styles";
import { FormGroup } from "@mui/material";
import Image from "next/image";
const InicioSesionComponent = () => {  
  return (
    <FullHeightDiv>
      <Component widthComponent="45%" style={{ display: "flex" }}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/NutriDoc.png?alt=media&token=3020a8bf-650b-4a94-b81b-49c68899137b"
          alt="nutridoc"
          width={500}
          height={400}
        />
        <FormComponent>
          <FormGroup>
            <div>
              <Title>Inicio Sesión</Title>
            </div>
            <InputMUI
              id="standard-basic"
              label="Ingrese su correo electronico"
              variant="standard"
              color="success"
            />
            <br />
            <InputMUI
              id="standard-basic"
              label="Ingrese su contraseña"
              variant="standard"
              color="success"
            />
            <br />
            <ButtonMUI variant="contained" type="submit">
              Iniciar Sesión
            </ButtonMUI>
          </FormGroup>
        </FormComponent>
      </Component>
    </FullHeightDiv>
  );
};

export default InicioSesionComponent;
