import { CrudService } from "@/services/crud";
import React from "react";

const agregar = () => {
  const { create } = CrudService();

  const data = [
    {
      idReto: "Dieta hipercolorica",
      dias: [
        {
          platos: [
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Desayuno Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Lunch del dia.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Almuerzo Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Sopa de pescado",
                  preparacion: "Medio salmon, con jugo de tomate",
                  alimentos: ["Salmon", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Luch media tarde Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Merienda saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Pera picada, con platano",
                  alimentos: ["Pera", "Platano"],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Desayuno Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Lunch del dia.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Almuerzo Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Sopa de pescado",
                  preparacion: "Medio salmon, con jugo de tomate",
                  alimentos: ["Salmon", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Luch media tarde Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Merienda saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Pera picada, con platano",
                  alimentos: ["Pera", "Platano"],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Desayuno Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Lunch del dia.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Almuerzo Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Sopa de pescado",
                  preparacion: "Medio salmon, con jugo de tomate",
                  alimentos: ["Salmon", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Luch media tarde Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Merienda saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Pera picada, con platano",
                  alimentos: ["Pera", "Platano"],
                },
              ],
            },
          ],
          statusDay: 0,
        },
      ],
      retoStatus: 0,
    },
    {
      idReto: "Dieta alta en fibra",
      dias: [
        {
          platos: [
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Desayuno Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Lunch del dia.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Almuerzo Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Sopa de pescado",
                  preparacion: "Medio salmon, con jugo de tomate",
                  alimentos: ["Salmon", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Luch media tarde Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Merienda saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Pera picada, con platano",
                  alimentos: ["Pera", "Platano"],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Desayuno Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Lunch del dia.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Almuerzo Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Sopa de pescado",
                  preparacion: "Medio salmon, con jugo de tomate",
                  alimentos: ["Salmon", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Luch media tarde Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Merienda saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Pera picada, con platano",
                  alimentos: ["Pera", "Platano"],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Desayuno Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Lunch del dia.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Almuerzo Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Sopa de pescado",
                  preparacion: "Medio salmon, con jugo de tomate",
                  alimentos: ["Salmon", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Luch media tarde Saludable.",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Manzana picada, con platano",
                  alimentos: ["Manzana", "Platano"],
                },
                {
                  nombrePlato: "Pollo Peruano",
                  preparacion: "Pollo con Tomate picado",
                  alimentos: ["Pollo", "Tomate"],
                },
              ],
            },
            {
              img: "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
              name: "Merienda saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion: "Pera picada, con platano",
                  alimentos: ["Pera", "Platano"],
                },
              ],
            },
          ],
          statusDay: 0,
        },
      ],
      retoStatus: 0,
    },
  ];

  const dataAlimentos = {
    content: [
      {
        foods: [
          {
            description:
              "Esta es la decripcion de una manzana debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Manzana",
          },
          {
            description:
              "Esta es la decripcion de una pera debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Pera",
          },
          {
            description:
              "Esta es la decripcion de una platano debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Platano",
          },
          {
            description:
              "Esta es la decripcion de una sandia debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Sandia",
          },
          {
            description:
              "Esta es la decripcion de una melon debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Melon",
          },
          {
            description:
              "Esta es la decripcion de una manzana debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Papaya",
          },
          {
            description:
              "Esta es la decripcion de una granadilla debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Granadilla",
          },
          {
            description:
              "Esta es la decripcion de una mandarina debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Mandarina",
          },
          {
            description:
              "Esta es la decripcion de una fresas debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Fresas",
          },
          {
            description:
              "Esta es la decripcion de una uvas debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Uvas",
          },
        ],
        title: "Frutas",
      },
      {
        foods: [
          {
            description:
              "Esta es la decripcion de una zanahoria debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Zanahoria",
          },
          {
            description:
              "Esta es la decripcion de una lechuga debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Lechuga",
          },
          {
            description:
              "Esta es la decripcion de una remolacha debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Remolacha",
          },
          {
            description:
              "Esta es la decripcion de una tomate debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Tomate",
          },
          {
            description:
              "Esta es la decripcion de una melon debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Melon",
          },
          {
            description:
              "Esta es la decripcion de una manzana debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Col",
          },
          {
            description:
              "Esta es la decripcion de una Brócoli debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Brócoli",
          },
          {
            description:
              "Esta es la decripcion de una Espinaca debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Espinaca",
          },
          {
            description:
              "Esta es la decripcion de una Pepino debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Pepino",
          },
          {
            description:
              "Esta es la decripcion de una Jitomate debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Jitomate",
          },
          {
            description:
              "Esta es la decripcion de una uvas debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Calabaza",
          },
        ],
        title: "Verduras",
      },
      {
        foods: [
          {
            description:
              "Esta es la decripcion de una Lomo debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Lomo",
          },
          {
            description:
              "Esta es la decripcion de una Pollo debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Pollo",
          },
          {
            description:
              "Esta es la decripcion de una Sardina debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Sardina",
          },
          {
            description:
              "Esta es la decripcion de una Camarones debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Camarones",
          },
          {
            description:
              "Esta es la decripcion de una Salmon debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Salmon",
          },
          {
            description:
              "Esta es la decripcion de una Huevos debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Huevo",
          },
          {
            description:
              "Esta es la decripcion de una cerdo debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Cerdo",
          },
          {
            description:
              "Esta es la decripcion de una Salchichas debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Salchichas",
          },
          {
            description:
              "Esta es la decripcion de una Pavo debes comer como minimo una diaria",
            imgsrc:
              "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
            name: "Pavo",
          },
        ],
        title: "Carnes",
      },
    ],
  };

  const addData = async () => {
    await create({...data}, "dietas");
  };

  const addDataalimentos = async () => {
    await create(dataAlimentos, "alimentos");
  };

  return (
    <div>
      agregar <button onClick={addData}>add dias</button> <hr />
      agregar alimentos<button onClick={addDataalimentos}>add alimentos</button>{" "}
    </div>
  );
};

export default agregar;
