import React from "react";
import { BaseLayout } from "./styles";
import UserData from "./UserData";
import { IFoods } from "@/interfaces/food/food";
import AlimentosPreferencias from "./Preferencias";

export const food: IFoods = {
  content: [
    {
      title: "Frutas",
      foods: [
        {
          name: "Manzana1",
          description:
            "Esta es la descrciopn de frutas, son muy saludables deberias comer una diaria",
          imgsrc:
            "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
        },
      ],
    },
    {
      title: "Verduras",
      foods: [
        {
          name: "Lechuga",
          description:
            "Esta es la descrciopn de frutas, son muy saludables deberias comer una diaria",
          imgsrc:
            "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
        },
      ],
    },
    {
      title: "Carnes",
      foods: [
        {
          name: "Res",
          description:
            "Esta es la descrciopn de frutas, son muy saludables deberias comer una diaria",
          imgsrc:
            "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
        },
      ],
    },
  ],
};

const Preferencias: React.FC = () => {
  return (
    <BaseLayout>
      <UserData img="https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=" />
      <AlimentosPreferencias food={food} />
    </BaseLayout>
  );
};

export default Preferencias;
