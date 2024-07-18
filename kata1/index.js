//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const boton = document.querySelector('.showme');
console.log(boton)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.querySelector('#pillado');
console.log(h1)

// 1.3 Usa querySelector para mostrar por consola todos los p
const p = document.querySelectorAll("p");
console.log(p)
// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const classpoke = document.querySelectorAll(".pokemon");
console.log(classpoke)
// 1.5 Usa querySelector para mostrar por consola todos los elementos con  el atributo data-function="testMe".
const atributo = document.querySelectorAll('span[data-function="testMe"]')
console.log(atributo)
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const tercero = document.querySelector('span[data-function="testMe"]:nth-of-type(3)');
console.log(tercero);
