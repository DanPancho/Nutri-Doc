import { CrudService } from "@/services/crud";
import React from "react";

const agregar = () => {
  const { create } = CrudService();

  const data = {
    idReto: "Dieta hipercolorica",
    dias: [
      {
        platos: [
          {
            description: "Esta es la descripcion de un desayuno saludable dia 1",
            name: "Desayuno Saludable",
            ingredientes: [
              {
                tipo: "Frutas",
                cantidad: "Esta es la cantidad de frutas",
              },
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de Verduras",
              },
            ],
          },
          {
            description:
              "Esta es la descripcion de un desayuno Lunch saludable",
            name: "Desayuno Lunch Saludable",
            ingredientes: [
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de verduras",
              },
            ],
          },
          {
            description: "Esta es la descripcion de un almuerzo saludable",
            name: "almuerzo Saludable",
            ingredientes: [
              {
                tipo: "Carnes",
                cantidad: "Esta es la cantidad de Carnes",
              },
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de verduras",
              },
            ],
          },
          {
            description:
              "Esta es la descripcion de un almuerzo lunch saludable",
            name: "Almuerzo lunch Saludable",
            ingredientes: [
              {
                tipo: "Frutas",
                cantidad: "Esta es la cantidad de frutas",
              },
            ],
          },
          {
            description: "Esta es la descripcion de una merienda saludable",
            name: "Merienda Saludable",
            ingredientes: [
              {
                tipo: "Carnes",
                cantidad: "Esta es la cantidad de Carnes",
              },
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de verduras",
              },
            ],
          },
        ],
        statusDay: 0,
      },
      {
        platos: [
          {
            description: "Esta es la descripcion de un desayuno saludable dia 2",
            name: "Desayuno Saludable",
            ingredientes: [
              {
                tipo: "Frutas",
                cantidad: "Esta es la cantidad de frutas",
              },
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de Verduras",
              },
            ],
          },
          {
            description:
              "Esta es la descripcion de un desayuno Lunch saludable",
            name: "Desayuno Lunch Saludable",
            ingredientes: [
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de verduras",
              },
            ],
          },
          {
            description: "Esta es la descripcion de un almuerzo saludable",
            name: "almuerzo Saludable",
            ingredientes: [
              {
                tipo: "Carnes",
                cantidad: "Esta es la cantidad de Carnes",
              },
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de verduras",
              },
            ],
          },
          {
            description:
              "Esta es la descripcion de un almuerzo lunch saludable",
            name: "Almuerzo lunch Saludable",
            ingredientes: [
              {
                tipo: "Frutas",
                cantidad: "Esta es la cantidad de frutas",
              },
            ],
          },
          {
            description: "Esta es la descripcion de una merienda saludable",
            name: "Merienda Saludable",
            ingredientes: [
              {
                tipo: "Carnes",
                cantidad: "Esta es la cantidad de Carnes",
              },
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de verduras",
              },
            ],
          },
        ],
        statusDay: 0,
      },
      {
        platos: [
          {
            description: "Esta es la descripcion de un desayuno saludable dia 3",
            name: "Desayuno Saludable",
            ingredientes: [
              {
                tipo: "Frutas",
                cantidad: "Esta es la cantidad de frutas",
              },
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de Verduras",
              },
            ],
          },
          {
            description:
              "Esta es la descripcion de un desayuno Lunch saludable",
            name: "Desayuno Lunch Saludable",
            ingredientes: [
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de verduras",
              },
            ],
          },
          {
            description: "Esta es la descripcion de un almuerzo saludable",
            name: "almuerzo Saludable",
            ingredientes: [
              {
                tipo: "Carnes",
                cantidad: "Esta es la cantidad de Carnes",
              },
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de verduras",
              },
            ],
          },
          {
            description:
              "Esta es la descripcion de un almuerzo lunch saludable",
            name: "Almuerzo lunch Saludable",
            ingredientes: [
              {
                tipo: "Frutas",
                cantidad: "Esta es la cantidad de frutas",
              },
            ],
          },
          {
            description: "Esta es la descripcion de una merienda saludable",
            name: "Merienda Saludable",
            ingredientes: [
              {
                tipo: "Carnes",
                cantidad: "Esta es la cantidad de Carnes",
              },
              {
                tipo: "Verduras",
                cantidad: "Esta es la cantidad de verduras",
              },
            ],
          },
        ],
        statusDay: 0,
      },
    ],
    retoStatus: false
  };

  const addData = async () => {
    await create(data, "dietas");
  };

  return (
    <div>
      agregar <button onClick={addData}>add dias</button>{" "}
    </div>
  );
};

export default agregar;
