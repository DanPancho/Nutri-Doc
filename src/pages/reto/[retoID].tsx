import CardRetos from "@/components/Card";
import React from "react";
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
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import Navbar from "@/components/NavBar";
const RetoComponent = () => {
  return (
    <>
      <Navbar />
      <BaseLayout>
        <ContainerDay>
          <ContainerTitle>
            <TitleDay>Día 1</TitleDay>
            <div style={{display: 'flex' , justifyContent: 'center'}}>
              <IconButton aria-label="check-day">
                <ArrowCircleLeftTwoToneIcon
                  sx={{ fontSize: "3em", color: "#00ACC1" }}
                />
              </IconButton>
              <IconButton aria-label="check-day">
                <CheckCircleTwoToneIcon
                  sx={{ fontSize: "3em", color: "#4CAF50" }}
                />
              </IconButton>
              <IconButton aria-label="check-day">
                <HighlightOffTwoToneIcon
                  sx={{ fontSize: "3em", color: "#FF5722" }}
                />
              </IconButton>
              <IconButton aria-label="check-day">
                <ArrowCircleRightTwoToneIcon
                  sx={{ fontSize: "3em", color: "#00ACC1" }}
                />
              </IconButton>
            </div>
          </ContainerTitle>
          <ContainerAlimentos>
            <ContainerInformation>
              <PaperStyles elevation={3}>
                <Title>Desayuno</Title>
                <ContainerCards>
                  <CardRetos />
                  <CardRetos />
                </ContainerCards>
              </PaperStyles>
            </ContainerInformation>
          </ContainerAlimentos>
          <ContainerAlimentos>
            <ContainerInformation>
              <PaperStyles elevation={3}>
                <Title>Almuerzo</Title>
                <ContainerCards>
                  <CardRetos />
                  <CardRetos />
                </ContainerCards>
              </PaperStyles>
            </ContainerInformation>
          </ContainerAlimentos>
          <ContainerAlimentos>
            <ContainerInformation>
              <PaperStyles elevation={3}>
                <Title>Merienda</Title>
                <ContainerCards>
                  <CardRetos />
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
