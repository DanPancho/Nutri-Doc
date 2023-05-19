import { ButtonMUI } from "@/components/Inicio Sesion/styles";
import ModalSweet from "@/components/modals";
import { ITypefood } from "@/interfaces/food/food";
import { CrudService } from "@/services/crud";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  AnimationBase,
  ContainerUserData,
  EmailUser,
  FlexContainer,
  NameUser,
} from "../styles";

const UserData = ({
  uid,
  config,
}: {
  uid: string | undefined;
  config?: ITypefood[] | undefined;
}) => {
  const { getById, getDoc, update } = CrudService();
  const [loading, setLoading] = useState(false);
  const user: any = getById("users", "userID", "==", uid);
  const router = useRouter();
  const handleSubmitConfig = async () => {
    const idDoc = (await getDoc("users", "userID", "==", uid)).docs[0].id;
    setLoading(true);
    if (idDoc) {
      update("users", idDoc, { preferencia_alimentos: config, config: false })
        .then(() => {
          ModalSweet("Preferencias alimentarias actualizadas", "success");
          setTimeout(() => {
            router.push("/home");
          }, 2000);
        })
        .catch(() => {
          ModalSweet(
            "No se pudo actualizar sus preferencias alimentarias",
            "error"
          );
        });
    }
  };
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
            <NameUser>
              {user[0].userName === null
                ? user[0].userMail.split("@")[0]
                : user[0].userName}
            </NameUser>
            <EmailUser>{user[0].userMail}</EmailUser>
            <ButtonMUI
              variant="contained"
              onClick={handleSubmitConfig}
              disabled={loading}
            >
              <strong>Guardar Configuración</strong>
            </ButtonMUI>
          </AnimationBase>
        </ContainerUserData>
      ) : (
        <ContainerUserData>CARGANDO...</ContainerUserData>
      )}
    </>
  );
};

export default UserData;

//https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=
