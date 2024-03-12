const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 550,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//a)  Las pizzas que tengan un id impar.

console.log("A-Pizzas que tienen ID impar:");
let pizzasImpares = pizzas.filter((pizzas) => pizzas.id % 2 !== 0);

pizzasImpares.forEach(pizza => {
  console.log(`${pizza.nombre}, ID: ${pizza.id}`);
});

console.log("-------------------------------");

//b) ¿Hay alguna pizza que valga menos de $600?

console.log("B-Pizzas que salen menos de $600:");
let pizzasMasBaratas = pizzas.filter((pizzas) => pizzas.precio < 600);

pizzasMasBaratas.forEach(pizza => {
  console.log(`${pizza.nombre}, precio: $${pizza.precio}`);
});

console.log("-------------------------------");

//c) El nombre de cada pizza con su respectivo precio.

console.log("C-Nombres de todas las pizzas y sus respectivos precios:");
pizzas.forEach((pizza) => {
  console.log(pizza.nombre + " $" + pizza.precio);
});

console.log("-------------------------------");

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).

console.log("D- Ingredientes de cada pizza")
pizzas.forEach(pizza => {
  console.log("Ingredientes de la " + pizza.nombre + ":");
  pizza.ingredientes.forEach(ingrediente => {
    console.log(" -" + ingrediente);
  });
  console.log("-----------------------------------")
});


