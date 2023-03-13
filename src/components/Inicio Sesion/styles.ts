import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
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
`;
export const Component = styled.div<{
  color?: string;
  widthComponent?: string;
}>`
  background-color: ${(props) =>
    props.color !== undefined ? props.color : "#fff"};
  width: ${(props) =>
    props.widthComponent !== undefined ? props.widthComponent : "100%"};
  animation: moveY 1.5s ease-in-out;

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
`;

export const FormComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  text-align: center;
  margin-top: -60px;
`;

export const InputMUI = styled(TextField)`
  width: 300px;
  margin-bottom: 7%;
`;

export const ButtonMUI = styled(Button)`
  margin-top: 10px;
  width: 100%;
  align-items: center;
  background-color: #f4c732;
  font-size: large;
  &:hover {
    background-color: #f4c732;
  }
`;
