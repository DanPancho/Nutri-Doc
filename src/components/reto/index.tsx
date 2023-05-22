import CardRetos from "@/components/Card";
import React, { SetStateAction, useEffect, useState } from "react";
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

const RetoComponent = () => {
  const { getById, getDoc, update } = CrudService();
  const [retoActivo, setRetoActivo] = useState<IDiaReto | undefined>();
  const router = useRouter();
  const [index, setIndex] = useState<number>(0);
  const [loading, setLoading] = useState(false);
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
      const indexReto = Array.from(Object.values(aux))?.findIndex((item) => item.retoStatus === false);
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
    let finalDay: boolean = false;
    aux = aux.map((item) => {
      if (item.retoStatus === false) {
        item.dias[index].statusDay = status;
        if (item.dias.length === index + 1) {
          finalDay = true;
          item.retoStatus = true;
        }
      }
      return item;
    });
    if (finalDay) {
      update("users", idDoc, {
        retos: aux,
        retoId: "",
      })
        .then(async () => {
          await ModalSweet("Dieta Completada, Felicitaciones :)", "success");
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
    setLoading(false);
  };
  return (
    <>
      <Navbar />
      <BaseLayout>
        <ContainerDay>
          <ContainerTitle>
            <TitleDay>Día {index + 1}</TitleDay>
            <div style={{ display: "flex", justifyContent: "center" }}>
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
            </div>
          </ContainerTitle>
          <ContainerAlimentos>
            <ContainerInformation>
              <PaperStyles elevation={3}>
                <Title>Desayuno</Title>
                <ContainerCards>
                  <CardRetos
                    dataPlatos={
                      retoActivo?.platos ? retoActivo.platos[0] : undefined
                    }
                    index={index}
                  />
                  <CardRetos
                    dataPlatos={
                      retoActivo?.platos ? retoActivo.platos[1] : undefined
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
                    index={index}
                  />
                  <CardRetos
                    dataPlatos={
                      retoActivo?.platos ? retoActivo.platos[3] : undefined
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
                <ContainerCards>
                  <CardRetos
                    dataPlatos={
                      retoActivo?.platos ? retoActivo.platos[4] : undefined
                    }
                    index={index}
                  />
                </ContainerCards>
              </PaperStyles>
            </ContainerInformation>
          </ContainerAlimentos>
        </ContainerDay>
      </BaseLayout>
    </>
  );
};

export default RetoComponent;
