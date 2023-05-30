import CardRetos from "@/components/Card";
import React, { useEffect, useState } from "react";
import {
  ContainerAlimentos,
  ContainerCards,
  ContainerDay,
  ContainerInformation,
  ContainerTitle,
  PaperStyles,
  TitleDay,
  BaseLayout,
  Title,
  BtnMUI,
} from "./styles";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import IconButton from "@mui/material/IconButton";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import Navbar from "@/components/NavBar";
import { decryptUID } from "@/utils/encryption/encryptions";
import { CrudService } from "@/services/crud";
import { IDiaReto, IDiasReto } from "@/interfaces/retos/retos";
import ModalSweet from "../modals";
import { useRouter } from "next/router";
import Days from "../Days";

const RetoComponent = () => {
  const { getById, getDoc, update } = CrudService();
  const [retoActivo, setRetoActivo] = useState<IDiaReto | undefined>();
  const router = useRouter();
  const [index, setIndex] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  //const [indexRetoUser, setIndexReto] = useState<number>();
  const [retoActivoUser, setRetoActivoUser] = useState<IDiasReto | undefined>();
  const storedEncryptedUID =
    typeof window !== "undefined" && window.localStorage.getItem("UDEN");
  let userUID = "";
  if (storedEncryptedUID !== null && storedEncryptedUID) {
    userUID = decryptUID(storedEncryptedUID);
  }
  const user: any = getById("users", "userID", "==", userUID);

  useEffect(() => {
    if (user !== undefined) {
      const aux: IDiasReto[] = user[0].retos;
      const indexReto = Array.from(Object.values(aux))?.findIndex(
        (item) => item.retoStatus === 0
      );
      //setIndexReto(indexReto);
      const retoactivo = Array.from(Object.values(aux))?.find(
        (reto) => reto.retoStatus === 0
      );
      setRetoActivoUser(retoactivo);
      const aux2: IDiaReto | undefined = Array.from(Object.values(aux))[
        indexReto
      ]?.dias?.find((item: any) => item.statusDay === 0);
      setIndex(
        Array.from(Object.values(aux))[indexReto]?.dias?.findIndex(
          (item: any) => item.statusDay === 0
        )
      );
      setRetoActivo(aux2);
    }
  }, [user]);

  const changeSatusDay = async (status: number) => {
    setLoading(true);
    const idDoc = (await getDoc("users", "userID", "==", userUID)).docs[0].id;
    let aux: IDiasReto[] = user[0].retos;
    console.log(aux);

    let finalDay: boolean = false;
    let partes = Array.from(aux)
      .find((item) => item.retoStatus === 0)
      ?.actualDay.split(/[/, :]+/);
    if (partes) {
      let fecha = new Date(
        parseInt(partes[2], 10),
        parseInt(partes[1], 10) - 1,
        parseInt(partes[0], 10)
      );
      if (fecha.getDate() !== new Date().getDate()) {
        aux = aux.map((item) => {
          if (item.retoStatus === 0) {
            item.dias[index].statusDay = status;
            if (item.dias.length === index + 1) {
              finalDay = true;
              item.retoStatus = 1;
              item.actualDay = new Date().toLocaleString();
            }
          }
          return item;
        });

        if (finalDay) {
          update("users", idDoc, {
            retos: Array.from(Object.values(aux)),
            retoId: "",
          })
            .then(async () => {
              await ModalSweet(
                "Dieta Completada, Felicitaciones :)",
                "success"
              );
              router.push("/home");
            })
            .catch(async (e) => {
              await ModalSweet("Error", "error");
            });
        } else {
          update("users", idDoc, { retos: Array.from(Object.values(aux)) })
            .then(async () => {
              if (status == 2) await ModalSweet("Dia No completado", "info");
              else await ModalSweet("Dia Completado", "success");
            })
            .catch(async (e) => {
              await ModalSweet("Error", "error");
            });
        }
      } else {
        if (status === 1)
          await ModalSweet("Por día solo se pude completar un reto", "info");
        else await ModalSweet("Por día solo se pude cancelar un reto", "info");
      }
    }
    setLoading(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {user && index !== undefined ? (
        <>
          <Navbar />
          <BaseLayout>
            <ContainerDay>
              <ContainerTitle>
                <TitleDay>Día {index + 1}</TitleDay>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {retoActivoUser !== undefined &&
                    index ===
                      retoActivoUser.dias.findIndex(
                        (actual: IDiaReto) => actual.statusDay === 0
                      ) && (
                      <>
                        <IconButton
                          aria-label="check-day"
                          onClick={() => changeSatusDay(1)}
                          disabled={loading}
                        >
                          <CheckCircleTwoToneIcon
                            sx={{ fontSize: "3em", color: "#4CAF50" }}
                          />
                        </IconButton>
                        <IconButton
                          aria-label="check-day"
                          onClick={() => changeSatusDay(2)}
                          disabled={loading}
                        >
                          <HighlightOffTwoToneIcon
                            sx={{ fontSize: "3em", color: "#FF5722" }}
                          />
                        </IconButton>
                      </>
                    )}
                  <IconButton
                    aria-label="check-day"
                    onClick={handleDrawerToggle}
                    disabled={loading}
                  >
                    <BtnMUI>Ver días</BtnMUI>
                  </IconButton>
                </div>
              </ContainerTitle>

              <ContainerAlimentos>
                <ContainerInformation>
                  <PaperStyles elevation={3}>
                    <Title>Desayuno</Title>
                    <hr
                      style={{
                        marginTop: "-1em",
                        padding: "0",
                        marginBottom: "1em",
                      }}
                    />
                    <ContainerCards>
                      <CardRetos
                        dataPlatos={
                          retoActivo?.platos ? retoActivo.platos[0] : undefined
                        }
                        userPreferences={
                          user?.length
                            ? user[0].preferencia_alimentos
                            : undefined
                        }
                        index={index}
                      />
                    </ContainerCards>
                  </PaperStyles>
                </ContainerInformation>
              </ContainerAlimentos>

              <ContainerAlimentos>
                <ContainerInformation>
                  <PaperStyles elevation={3}>
                    <Title>Colación media mañana</Title>
                    <hr
                      style={{
                        marginTop: "-1em",
                        padding: "0",
                        marginBottom: "1em",
                      }}
                    />
                    <ContainerCards>
                      <CardRetos
                        dataPlatos={
                          retoActivo?.platos ? retoActivo.platos[1] : undefined
                        }
                        userPreferences={
                          user?.length
                            ? user[0].preferencia_alimentos
                            : undefined
                        }
                        index={index}
                      />
                    </ContainerCards>
                  </PaperStyles>
                </ContainerInformation>
              </ContainerAlimentos>
              <ContainerAlimentos>
                <ContainerInformation>
                  <PaperStyles elevation={3}>
                    <Title>Almuerzo</Title>
                    <ContainerCards>
                      <CardRetos
                        dataPlatos={
                          retoActivo?.platos ? retoActivo.platos[2] : undefined
                        }
                        userPreferences={
                          user?.length
                            ? user[0].preferencia_alimentos
                            : undefined
                        }
                        index={index}
                      />
                    </ContainerCards>
                  </PaperStyles>
                </ContainerInformation>
              </ContainerAlimentos>

              <ContainerAlimentos>
                <ContainerInformation>
                  <PaperStyles elevation={3}>
                    <Title>Colación media tarde</Title>
                    <hr
                      style={{
                        marginTop: "-1em",
                        padding: "0",
                        marginBottom: "1em",
                      }}
                    />
                    <ContainerCards>
                      <CardRetos
                        dataPlatos={
                          retoActivo?.platos ? retoActivo.platos[3] : undefined
                        }
                        userPreferences={
                          user?.length
                            ? user[0].preferencia_alimentos
                            : undefined
                        }
                        index={index}
                      />
                    </ContainerCards>
                  </PaperStyles>
                </ContainerInformation>
              </ContainerAlimentos>
              <ContainerAlimentos>
                <ContainerInformation>
                  <PaperStyles elevation={3}>
                    <Title>Merienda</Title>
                    <hr
                      style={{
                        marginTop: "-1em",
                        padding: "0",
                        marginBottom: "1em",
                      }}
                    />
                    <ContainerCards>
                      <CardRetos
                        dataPlatos={
                          retoActivo?.platos ? retoActivo.platos[4] : undefined
                        }
                        userPreferences={
                          user?.length
                            ? user[0].preferencia_alimentos
                            : undefined
                        }
                        index={index}
                      />
                    </ContainerCards>
                  </PaperStyles>
                </ContainerInformation>
              </ContainerAlimentos>
            </ContainerDay>
            <Days
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
              retos={Array.from(Object.values(user[0].retos))}
              setRetoActivoUser={setRetoActivo}
              setIndex={setIndex}
            />
          </BaseLayout>{" "}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default RetoComponent;
