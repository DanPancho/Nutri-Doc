import React, { useState } from "react";
import {
  ButtonSocialesMUI,
  Component,
  Componentflex,
  FormComponent,
  FullHeightDiv,
  StyledImage,
  Title,
} from "./styles";
import { FormGroup } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useInicioSesion } from "@/utils/hooks/InicioSesion/useLogin";
import FormRegister from "@/utils/components/forms/Formregister";
import FormLogin from "@/utils/components/forms/Formlogin";

const InicioSesionComponent = () => {
  const { useGoogle , useGoogleRegister} = useInicioSesion();
  const [register, setRegister] = useState(false);

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
              <Title style={{ paddingTop: "20px" }}>
                {register ? "Nueva Cuenta" : "Inicio Sesión"}
              </Title>
            </div>
            {
              register ? <FormRegister /> : <FormLogin />
            }
            {
              register ? 
            <Componentflex>
              <ButtonSocialesMUI
                variant="contained"
                type="submit"
                style={{ marginRight: "20px" }}
                colorbg="#3b5998 "
              >
                <FacebookIcon />
              </ButtonSocialesMUI>
              <ButtonSocialesMUI
                variant="contained"
                type="submit"
                colorbg="#FF0000"
                onClick={useGoogleRegister}
              >
                <GoogleIcon />
              </ButtonSocialesMUI>
            </Componentflex> :        <Componentflex>
              <ButtonSocialesMUI
                variant="contained"
                type="submit"
                style={{ marginRight: "20px" }}
                colorbg="#3b5998 "
              >
                <FacebookIcon />
              </ButtonSocialesMUI>
              <ButtonSocialesMUI
                variant="contained"
                type="submit"
                colorbg="#FF0000"
                onClick={useGoogle}
              >
                <GoogleIcon />
              </ButtonSocialesMUI>
            </Componentflex> 
            }
            <Componentflex>
              {register ? (
                <p style={{ marginTop: "15px", paddingBottom: "20px" }}>
                  ¿Ya tienes una cuenta?{" "}
                  <strong
                    style={{ cursor: "pointer" }}
                    onClick={() => setRegister(!register)}
                  >
                    Iniciar Sesión
                  </strong>{" "}
                </p>
              ) : (
                <p style={{ marginTop: "15px", paddingBottom: "20px" }}>
                  ¿Aun no tienes una cuenta?{" "}
                  <strong
                    style={{ cursor: "pointer" }}
                    onClick={() => setRegister(!register)}
                  >
                    Registrate
                  </strong>{" "}
                </p>
              )}
            </Componentflex>
          </FormGroup>
        </FormComponent>
      </Component>
    </FullHeightDiv>
  );
};

export default InicioSesionComponent;
