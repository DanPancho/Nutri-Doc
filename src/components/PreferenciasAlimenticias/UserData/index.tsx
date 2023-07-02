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
  config?: ITypefood[];
}) => {
  const { getById, getDoc, update } = CrudService();
  const [loading, setLoading] = useState(false);
  const user: any = getById("users", "userID", "==", uid);
  const router = useRouter();
  const handleSubmitConfig = async () => {
    const idDoc = (await getDoc("users", "userID", "==", uid)).docs[0].id;
    let validateConfig = false;
    let invalidCategory = false;
    setLoading(true);
    if (idDoc) {
      if (config) {
        let aux = 0;
        const resultMin = Array.from(Object.values(config)).length * 7;
        Array.from(Object.values(config)).map((item) => {
          if (item.foods.filter((food) => food.status).length >= 7) {
            aux += item.foods.filter((food) => food.status).length;
          }
          else {
            invalidCategory = true;
            return;
          }
        });
        if (aux >= resultMin && !invalidCategory) validateConfig = true;
      }
      if (validateConfig) {
        update("users", idDoc, { preferencia_alimentos: config, config: false })
          .then(async () => {
            await ModalSweet(
              "Preferencias alimentarias actualizadas",
              "success"
            );
            router.push("/home");
          })
          .catch(async () => {
            await ModalSweet(
              "No se pudo actualizar sus preferencias alimentarias",
              "error"
            );
            setLoading(false);
          });
      } else {
        await ModalSweet(
          "Debe tener como minimo 7 alimentos activos por categoria",
          "info"
        );
        setLoading(false);
      }
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
