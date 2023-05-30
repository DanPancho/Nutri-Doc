import { IDiasReto, IRetos } from "@/interfaces/retos/retos";
import { CrudService } from "@/services/crud";
import { decryptUID } from "@/utils/encryption/encryptions";
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
  const { update, getDoc, getById, getAllDias } = CrudService();
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
      const retos = await getAllDias("dietas");
      if (retos) {
        const reto = Array.from(Object.values(retos[0])).find(
          (item) => item.idReto == idReto
        );
        if (user) {
          const retosUser: any[] = user[0].retos;
          retosUser.push({...reto, dayStart: new Date().toLocaleString(), actualDay: new Date().toLocaleString()});
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
    }
  };

  const handleContinue = (idReto: string) => {
    router.push(`reto/${idReto}`);
  };

  const cancelReto = async () => {
    if (user) {
      const newUser = Array.from(Object.values(user)).map((userData: any) => {
        const retos = userData?.retos?.map((reto: IDiasReto) => {
          if (reto.retoStatus === 0) {
            reto.retoStatus = 2;
          }
          return reto;
        });
        return { ...userData, retos: retos };
      });
      const idDoc = (await getDoc("users", "userID", "==", userUID)).docs[0].id;
      if (idDoc) {
        update("users", idDoc, { retos: newUser[0].retos, retoId: "" })
          .then(async () => {
            await ModalSweet("Reto Cancelado", "info");
            setLoading(false);
          })
          .catch(async (e) => {
            await ModalSweet("Error", "error");
            setLoading(false);
            console.log(e);
          });
      }
    }
  };

  return (
    <ContainerRetos>
      <Title>Retos Alimenticios</Title>
      {retos
        ? userRetoID === ""
          ? Array.from(Object.values(retos))[0].retos.map((item) => (
              <Paper
                key={item.title}
                elevation={3}
                sx={{ padding: "3%", marginBottom: "0.5em" }}
              >
                <Heading marginBottom={1}>{item.title}</Heading>
                <ListItemText secondary={item.description} />
                {userRetoID === item.title ? (
                  <>
                    <ButtonMUI
                      variant="contained"
                      onClick={() => {
                        handleContinue(item.title);
                      }}
                      disabled={loading}
                      colorbg={"#4CAF50"}
                    >
                      ¡Vamos con el reto!
                    </ButtonMUI>
                    <ButtonMUI
                      variant="contained"
                      onClick={cancelReto}
                      disabled={loading}
                      color={"error"}
                      colorbg={"#b43649"}
                    >
                      Cancelar reto
                    </ButtonMUI>
                  </>
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
          : Array.from(Object.values(retos))[0].retos.map((item) => (
              <>
                {userRetoID === item.title ? (
                  <Paper
                    key={item.title}
                    elevation={3}
                    sx={{
                      padding: "3%",
                      marginBottom: "0.5em",
                      border: "2px solid #4CAF50",
                    }}
                  >
                    <Heading marginBottom={1}>{item.title}</Heading>
                    <ListItemText secondary={item.description} />
                    <>
                      <ButtonMUI
                        variant="contained"
                        onClick={() => {
                          handleContinue(item.title);
                        }}
                        disabled={loading}
                        colorbg={"#4CAF50"}
                      >
                        ¡Vamos con el reto!
                      </ButtonMUI>
                      <ButtonMUI
                        variant="contained"
                        onClick={cancelReto}
                        disabled={loading}
                        color={"error"}
                        colorbg={"#b43649"}
                      >
                        Cancelar reto
                      </ButtonMUI>
                    </>
                  </Paper>
                ) : (
                  <Paper
                    key={item.title}
                    elevation={3}
                    sx={{ padding: "3%", marginBottom: "0.5em" }}
                  >
                    <Heading marginBottom={1}>{item.title}</Heading>
                    <ListItemText secondary={item.description} />
                    <ButtonMUI
                      variant="contained"
                      onClick={() => handleSuscribe(item.title)}
                      disabled={loading}
                    >
                      Suscribirse
                    </ButtonMUI>
                  </Paper>
                )}
              </>
            ))
        : "Cargando..."}
    </ContainerRetos>
  );
};

export default RetosComponent;
