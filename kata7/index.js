//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const ulplaces = document.createElement("ul");
for (let i = 0; i < places.length; i++) {
  const liElement = document.createElement("li");
  liElement.innerText = places[i];
  ulplaces.appendChild(liElement);
}
const printHereDiv = document.querySelector('div[data-function="printHere"]');
printHereDiv.appendChild(ulplaces);
