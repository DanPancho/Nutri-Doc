import { IRetos } from "@/interfaces/retos/retos";
import { CrudService } from "@/services/crud";
import { ListItemText } from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { ButtonMUI } from "../Inicio Sesion/styles";
import { Title } from "../ListItem/styles";
import { Heading } from "../PreferenciasAlimenticias/styles";
import { ContainerRetos } from "./styles";

const RetosComponent = () => {
  const [retos, setRetos] = useState<IRetos[] | undefined>();
  useEffect(() => {
    const { getAllRetos } = CrudService();
    const fetchData = async () => {
      const retosData = await getAllRetos("tipos_retos");
      if (retosData?.length) setRetos({ ...retosData });
    };
    fetchData();
  }, []);

  Array.from(Object.values(retos ? retos : {}))[0].retos.map((item) => {
    console.log(item.title);
  });

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
              <ButtonMUI variant="contained">Suscribirse</ButtonMUI>
            </Paper>
          ))
        : "Cargando..."}
    </ContainerRetos>
  );
};

export default RetosComponent;
