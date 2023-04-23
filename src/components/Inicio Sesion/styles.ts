import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import styled from "styled-components";

export const FullHeightDiv = styled.div`
  background-color: #a6f4d5;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Componentflex = styled.div`
  display: flex;
  justify-content: center;
`;
export const Component = styled.div<{
  color?: string;
  widthComponent?: string;
}>`
  background-color: ${(props) =>
    props.color !== undefined ? props.color : "#fff"};
  width: ${(props) =>
    props.widthComponent !== undefined ? props.widthComponent : "60em"};
  animation: moveY 1.5s ease-in-out;
  display: flex;

  @keyframes moveY {
    0% {
      transform: translateY(80%);
    }
    50%{
        transform: translateY(-10%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 815px) {
    display: block;
    width: 25em;
  }
`;


export const StyledImage = styled(Image)`
  width: 90%;
  height: auto;
  @media (max-width: 815px) {
    width: 100%;
  }
`;

export const FormComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const InputMUI = styled(TextField)`
  width: 300px;
  margin-bottom: 7%;
`;

export const ButtonMUI = styled(Button)<{colorbg?: string}>`
  margin-top: 5px;
  width: 100%;
  align-items: center;
  background-color: ${(props)=> props.colorbg !== undefined ? props.colorbg : '#f4c732'};
  font-size: large;
  &:hover {
    background-color: ${(props)=> props.colorbg !== undefined ? props.colorbg : '#f4c732'};
  }
  border-radius: 15px;
`;

export const ButtonSocialesMUI = styled(Button)<{colorbg?: string}>`
  margin-top: 20px;
  background-color: ${(props)=> props.colorbg !== undefined ? props.colorbg : '#f4c732'};
  font-size: large;
  &:hover {
    background-color: ${(props)=> props.colorbg !== undefined ? props.colorbg : '#f4c732'};
  }
`;
