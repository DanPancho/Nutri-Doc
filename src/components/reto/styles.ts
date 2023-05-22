import styled from "styled-components";
import { Card, Paper, Typography } from "@mui/material";

export const ContainerDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  height: auto;
  width: 90%;
  background: rgba(156, 154, 154, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border: 1px solid rgba(156, 154, 154, 0.59);
  @media (max-width: 1329px) {
    width: 100%;
    margin: 0;
    height: auto;
  }
`;

export const ContainerTitle = styled.div`
  width: 60%;
  border-radius: 10px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1150px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const TitleDay = styled.h1`
  font-size: 3.5rem;
  color: #333;
  text-align: center;
  text-shadow: 1px 1px 1px #ccc;
`;
export const ContainerAlimentos = styled.div`
  display: flex;
  width: 60%;
  border-radius: 10px;
  margin-top: 1.5em;
  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const ContainerAlimentosMerienda = styled.div`
  display: flex;
  width: 30%;
  border-radius: 10px;
  margin-top: 1.5em;
`;

export const ContainerInformation = styled.div`
  width: 100%;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-around;
  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const HeadingInfoDay = styled(Typography)`
  font-size: 9rem;
  font-weight: bold;
  color: #333;
`;

export const PaperStyles = styled(Paper)`
  padding: 2em;
  border-radius: 10px;
  margin-right: 1em;
`;

export const BaseLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-90deg, #26c988, #26c988, #f4c732);
  background-size: 400% 400%;
  height: auto;
  background-position: 30%;
  @media (max-width: 1329px) {
    flex-direction: column;
  }
  margin-top: 3em;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 1px 1px 1px #ccc;
  margin-bottom: 0.5em;
`;

export const CardStyles = styled(Card)`
    width: 50%;
    @media (max-width: 1150px) {
        width: 100%
  }
`
//1150