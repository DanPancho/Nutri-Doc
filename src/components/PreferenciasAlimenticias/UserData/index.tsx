import { ButtonMUI } from "@/components/Inicio Sesion/styles";
import { CrudService } from "@/services/crud";
import { Avatar } from "@mui/material";
import React from "react";
import {
  AnimationBase,
  ContainerUserData,
  EmailUser,
  FlexContainer,
  NameUser,
} from "../styles";

const UserData = ({ uid }: { uid: string | undefined }) => {
  const { getById } = CrudService();
  const user: any = getById("users", "userID", "==", uid);
  return (
    <>
      {user?.length ? (
        <ContainerUserData>
          <AnimationBase>
            <FlexContainer>
              <Avatar
                src={user[0].userImg}
                style={{
                  width: "15em",
                  height: "20vh",
                }}
              />
            </FlexContainer>
            <NameUser>{user[0].userName === null ? user[0].userMail.split('@')[0] :  user[0].userName }</NameUser>
            <EmailUser>{user[0].userMail}</EmailUser>
            <ButtonMUI variant="contained">
              <strong>Guardar Configuración</strong>
            </ButtonMUI>
          </AnimationBase>
        </ContainerUserData>
      ) : (
        <ContainerUserData>
          CARGANDO...
        </ContainerUserData>
      )}
    </>
  );
};

export default UserData;

//https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=
