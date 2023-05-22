import { IRetos } from "@/interfaces/retos/retos";
import { CrudService } from "@/services/crud";
import { decryptUID } from "@/utils/encryption/encryptions";
import { async } from "@firebase/util";
import { ListItemText } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ButtonMUI } from "../Inicio Sesion/styles";
import { Title } from "../ListItem/styles";
import ModalSweet from "../modals";
import { Heading } from "../PreferenciasAlimenticias/styles";
import { ContainerRetos } from "./styles";

const RetosComponent = ({ userRetoID }: { userRetoID: string }) => {
  const [retos, setRetos] = useState<IRetos[] | undefined>();
  const [loading, setLoading] = useState(false);
  const { update, getDoc, getByIdNoHook, getById } = CrudService();
  const router = useRouter();  
  const storedEncryptedUID =
    typeof window !== "undefined" && window.localStorage.getItem("UDEN");
  let userUID = "";
  if (storedEncryptedUID !== null && storedEncryptedUID) {
    userUID = decryptUID(storedEncryptedUID);
  }
  const user: any = getById("users", "userID", "==", userUID);
  useEffect(() => {
    const { getAllRetos } = CrudService();
    const fetchData = async () => {
      const retosData = await getAllRetos("tipos_retos");
      if (retosData?.length) setRetos({ ...retosData });
    };
    fetchData();
  }, []);

  const handleSuscribe = async (idReto: string) => {
    if (userRetoID !== "") {
      await ModalSweet("Solo pude estar suscrito a un reto", "info", "center");
    } else {
      setLoading(true);
      const idDoc = (await getDoc("users", "userID", "==", userUID)).docs[0].id;
      const reto: any = await getByIdNoHook("dietas", "idReto", "==", idReto);
      if(user){
        const retosUser: any[]= user[0].retos;
        retosUser.push(reto);
        update("users", idDoc, { retoId: idReto, retos: retosUser })
          .then(async () => {
            await ModalSweet("Suscrito", "success");
            setLoading(false);
          })
          .catch(async (e) => {
            await ModalSweet("Error", "error");
            setLoading(false);
          });
      }
    }
  };

  const handleContinue = (idReto: string) => {
    router.push(`reto/${idReto}`)
  };

  return (
    <ContainerRetos>
      <Title>Retos Alimenticios</Title>
      {retos
        ? Array.from(Object.values(retos))[0].retos.map((item) => (
            <Paper
              key={item.title}
              elevation={3}
              sx={{ padding: "3%", marginBottom: "0.5em" }}
            >
              <Heading marginBottom={1}>{item.title}</Heading>
              <ListItemText secondary={item.description} />
              {userRetoID === item.title ? (
                <ButtonMUI
                  variant="contained"
                  onClick={() => {handleContinue(item.title)}}
                  disabled={loading}
                >
                  Continuar con el Reto
                </ButtonMUI>
              ) : (
                <ButtonMUI
                  variant="contained"
                  onClick={() => handleSuscribe(item.title)}
                  disabled={loading}
                >
                  Suscribirse
                </ButtonMUI>
              )}
            </Paper>
          ))
        : "Cargando..."}
    </ContainerRetos>
  );
};

export default RetosComponent;
