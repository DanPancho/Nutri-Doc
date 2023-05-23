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

  const dataAlimentos = {
    content: [
        {
            foods: [
                {
                    description: "Esta es la decripcion de una manzana debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Manzana",
                    type: 0
                },
                {
                    description: "Esta es la decripcion de una pera debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Pera",
                    type: 0
                },
                {
                    description: "Esta es la decripcion de una platano debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Platano",
                    type: 0
                },
                {
                    description: "Esta es la decripcion de una sandia debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Sandia",
                    type: 1
                },
                {
                    description: "Esta es la decripcion de una melon debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Melon",
                    type: 1
                },
                {
                    description: "Esta es la decripcion de una manzana debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Papaya",
                    type: 1
                },
                {
                    description: "Esta es la decripcion de una granadilla debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Granadilla",
                    type: 0
                },
                {
                    description: "Esta es la decripcion de una mandarina debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Mandarina",
                    type: 0
                },
                {
                    description: "Esta es la decripcion de una fresas debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Fresas",
                    type: 0
                },
                {
                    description: "Esta es la decripcion de una uvas debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Uvas",
                    type: 0
                },

            ],
            title: "Frutas"
        },
        {
            foods: [  {
                description: "Esta es la decripcion de una zanahoria debes comer como minimo una diaria",
                imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                name: "Zanahoria",
                type: 2
            },
            {
                description: "Esta es la decripcion de una lechuga debes comer como minimo una diaria",
                imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                name: "Lechuga",
                type: 2
            },
            {
                description: "Esta es la decripcion de una remolacha debes comer como minimo una diaria",
                imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                name: "Remolacha",
                type: 1
            },
            {
                description: "Esta es la decripcion de una tomate debes comer como minimo una diaria",
                imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                name: "Tomate",
                type: 1
            },
            {
                description: "Esta es la decripcion de una melon debes comer como minimo una diaria",
                imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                name: "Melon",
                type: 0
            },
            {
                description: "Esta es la decripcion de una manzana debes comer como minimo una diaria",
                imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                name: "Papaya",
                type: 0
            },
            {
                description: "Esta es la decripcion de una Brócoli debes comer como minimo una diaria",
                imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                name: "Brócoli",
                type: 2
            },
            {
                description: "Esta es la decripcion de una Espinaca debes comer como minimo una diaria",
                imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                name: "Espinaca",
                type: 1
            },
            {
                description: "Esta es la decripcion de una Pepino debes comer como minimo una diaria",
                imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                name: "Pepino",
                type: 0
            },
            {
                description: "Esta es la decripcion de una Jitomate debes comer como minimo una diaria",
                imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                name: "Jitomate",
                type: 0
            },
            {
                description: "Esta es la decripcion de una uvas debes comer como minimo una diaria",
                imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                name: "Calabaza",
                type: 1
            },],
            title: "Verduras"
        },
        {
            foods: [
                {
                    description: "Esta es la decripcion de una Lomo debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Lomo",
                    type: 2
                },
                {
                    description: "Esta es la decripcion de una Pollo debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Pollo",
                    type: 2
                },
                {
                    description: "Esta es la decripcion de una Sardina debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Sardina",
                    type: 0
                },
                {
                    description: "Esta es la decripcion de una Camarones debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Camarones",
                    type: 1
                },
                {
                    description: "Esta es la decripcion de una Salmon debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Salmon",
                    type: 1
                },
                {
                    description: "Esta es la decripcion de una Huevos debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Huevo",
                    type: 0
                },
                {
                    description: "Esta es la decripcion de una cerdo debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Cerdo",
                    type: 2
                },
                {
                    description: "Esta es la decripcion de una Salchichas debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Salchichas",
                    type: 0
                },
                {
                    description: "Esta es la decripcion de una Pavo debes comer como minimo una diaria",
                    imgsrc: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                    name: "Pavo",
                    type: 0
                },
            ],
            title: "Carnes"
        },

    ]
  }

  const addData = async () => {
    await create(data, "dietas");
  };

  const addDataalimentos = async () => {
    await create(dataAlimentos, "alimentos");
  };


  return (
    <div>
      agregar <button onClick={addData}>add dias</button>{" "}
      <hr />
      agregar alimentos<button onClick={addDataalimentos}>add dias</button>{" "}
    </div>
  );
};

export default agregar;