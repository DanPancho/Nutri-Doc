import {
  Accordion,
  AccordionSummary,
  Typography,
  ListItem,
} from "@mui/material";
import styled, { keyframes } from "styled-components";

export const BaseLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-90deg, #26c988, #26c988, #f4c732);
  background-size: 400% 400%;
  height: 100vh;
  background-position: 30%;
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
  animation: ${fadeInDown} 0.5s ease-out;
  letter-spacing: 2px;
  text-shadow: 1px 1px 1px #ccc;
`;

export const slide_in = keyframes`
    0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AccordionWrapper = styled(Accordion)`
  width: 100%;
  margin-bottom: 1rem;
  animation: ${slide_in} 0.5s ease-in-out;
`;

export const AccordionSummaryWrapper = styled(AccordionSummary)`
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

export const Heading = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const ListWrapper = styled.div`
  padding: 1rem;
`;

export const ListItemWrapper = styled(ListItem)`
  font-size: 1.2rem;
  color: #666;
  padding: 0.5rem 0;
`;

export const ContainerPreferencias = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  height: 80vh;
  width: 80%;
  margin-right: 5%;
`;

export const ContainerUserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  justify-content: center;
  height: 80vh;
  width: 30%;
  margin-left: 5%;
  background: rgba(156, 154, 154, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border: 1px solid rgba(156, 154, 154, 0.59);
`;

export const NameUser = styled.h2`
  font-size: 2.5rem;
  margin-top: 0.5em;
  color: #333;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 1px 1px 1px #ccc;
`;

export const EmailUser = styled.h2`
  font-size: 1rem;
  margin: 0.5em;
  color: #333;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 1px 1px 1px #ccc;
`;

export const AnimationBase = styled.div`
  animation: ${slide_in} 0.5s ease-in-out;
  width: 100%;
`;
