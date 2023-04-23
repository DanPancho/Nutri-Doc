import React, { useState } from "react";
import {
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Avatar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionSummaryWrapper,
  AccordionWrapper,
  BaseLayout,
  ContainerPreferencias,
  Heading,
  ListItemWrapper,
  ListWrapper,
  Title,
  ContainerUserData,
  NameUser,
  EmailUser,
  AnimationBase,
} from "./styles";
import ListItemComponent from "../ListItem";
import { ButtonMUI } from "../Inicio Sesion/styles";

const foods = {
  frutas: [
    {
      name: "Manzana",
      description:
        "Esta es la descrciopn de frutas, son muy saludables deberias comer una diaria",
      imgsrc:
        "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
    },
    {
      name: "Platano",
      description:
        "Esta es la descrciopn de frutas, son muy saludables deberias comer una diaria",
      imgsrc:
        "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
    },
    {
      name: "Uvas",
      description:
        "Esta es la descrciopn de frutas, son muy saludables deberias comer una diaria",
      imgsrc:
        "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
    },
  ],
  verduras: ["Lechuga", "Tomate", "Zanahoria"],
};

const Preferencias: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <BaseLayout>
      <ContainerUserData>
        <AnimationBase>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Avatar
              src="https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I="
              style={{
                width: "50%",
                height: "20vh",
              }}
            />
          </div>
          <NameUser>Daniel Arcos</NameUser>
          <EmailUser>danielandres-01@outllok.com</EmailUser>
          <ButtonMUI variant="contained">
            <strong>Guardar Configuración</strong>
          </ButtonMUI>
        </AnimationBase>
      </ContainerUserData>
      <ContainerPreferencias>
        <Title>Preferencias Alimenticias</Title>
        <AccordionWrapper
          expanded={expanded === "frutas"}
          onChange={handleChange("frutas")}
        >
          <AccordionSummaryWrapper
            expandIcon={<ExpandMoreIcon />}
            aria-controls="frutas-content"
            id="frutas-header"
          >
            <Heading>Frutas</Heading>
          </AccordionSummaryWrapper>
          <AccordionDetails>
            <ListWrapper>
              {foods.frutas.map((food, index) => (
                <ListItemWrapper key={index}>
                  <ListItemComponent {...food} />
                </ListItemWrapper>
              ))}
            </ListWrapper>
          </AccordionDetails>
        </AccordionWrapper>
        <AccordionWrapper
          expanded={expanded === "verduras"}
          onChange={handleChange("verduras")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="verduras-content"
            id="verduras-header"
          >
            <Heading>Verduras</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {foods.verduras.map((food, index) => (
                <ListItem key={index}>{food}</ListItem>
              ))}
            </List>
          </AccordionDetails>
        </AccordionWrapper>
        <AccordionWrapper
          expanded={expanded === "frutas"}
          onChange={handleChange("frutas")}
        >
          <AccordionSummaryWrapper
            expandIcon={<ExpandMoreIcon />}
            aria-controls="frutas-content"
            id="frutas-header"
          >
            <Heading>Frutas</Heading>
          </AccordionSummaryWrapper>
          <AccordionDetails>
            <ListWrapper>
              {foods.frutas.map((food, index) => (
                <ListItemWrapper key={index}>
                  <ListItemComponent {...food} />
                </ListItemWrapper>
              ))}
            </ListWrapper>
          </AccordionDetails>
        </AccordionWrapper>
        <AccordionWrapper
          expanded={expanded === "frutas"}
          onChange={handleChange("frutas")}
        >
          <AccordionSummaryWrapper
            expandIcon={<ExpandMoreIcon />}
            aria-controls="frutas-content"
            id="frutas-header"
          >
            <Heading>Frutas</Heading>
          </AccordionSummaryWrapper>
          <AccordionDetails>
            <ListWrapper>
              {foods.frutas.map((food, index) => (
                <ListItemWrapper key={index}>
                  <ListItemComponent {...food} />
                </ListItemWrapper>
              ))}
            </ListWrapper>
          </AccordionDetails>
        </AccordionWrapper>
      </ContainerPreferencias>
    </BaseLayout>
  );
};

export default Preferencias;
