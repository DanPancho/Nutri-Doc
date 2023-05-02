import { retos } from "@/utils/data/retos";
import { ListItemText } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import { ButtonMUI } from "../Inicio Sesion/styles";
import { Title } from "../ListItem/styles";
import { Heading } from "../PreferenciasAlimenticias/styles";
import { ContainerRetos } from "./styles";

const RetosComponent = () => {
  return (
    <ContainerRetos>
      <Title>Retos Alimenticios</Title>
      {retos.map((item) => (
        <Paper
          key={item.title}
          elevation={3}
          sx={{ padding: "3%", marginBottom: "0.5em" }}
        >
          <Heading marginBottom={1}>{item.title}</Heading>
          <ListItemText secondary={item.description} />
          <ButtonMUI variant="contained">Suscribirse</ButtonMUI>
        </Paper>
      ))}
    </ContainerRetos>
  );
};

export default RetosComponent;
