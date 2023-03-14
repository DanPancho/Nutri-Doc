import React from "react";
import {
  ButtonMUI,
  ButtonSocialesMUI,
  Component,
  Componentflex,
  FormComponent,
  FullHeightDiv,
  InputMUI,
  StyledImage,
  Title,
} from "./styles";
import { FormGroup } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const InicioSesionComponent = () => {
  return (
    <FullHeightDiv>
      <Component widthComponent="50em">
        <StyledImage
          src="https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/NutriDoc.png?alt=media&token=3020a8bf-650b-4a94-b81b-49c68899137b"
          alt="nutridoc"
          width={300}
          height={400}
        />
        <FormComponent>
          <FormGroup>
            <div>
              <Title style={{paddingTop: '20px'}}>Inicio Sesión</Title>
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
            <Componentflex>
              <ButtonSocialesMUI
                variant="contained"
                type="submit"
                style={{ marginRight: "20px" }}
                colorBG="#3b5998 "
              >
                <FacebookIcon />
              </ButtonSocialesMUI>
              <ButtonSocialesMUI
                variant="contained"
                type="submit"
                colorBG="#FF0000"
              >
                <GoogleIcon />
              </ButtonSocialesMUI>
            </Componentflex>
            <Componentflex>
              <p style={{marginTop: '15px', paddingBottom: '20px'}}>
                ¿Aun no tienes una cuenta? <Link href={"/"}>Registrate</Link>{" "}
              </p>
            </Componentflex>
          </FormGroup>
        </FormComponent>
      </Component>
    </FullHeightDiv>
  );
};

export default InicioSesionComponent;
