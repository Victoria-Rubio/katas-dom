// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const divsinnada = document.createElement("div");
//divsinnada.innerText = "Hola, soy un texto"; // prueba para ver si funcionaba
document.body.appendChild(divsinnada);


// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divconp = document.createElement("div");
const p = document.createElement("p");
divconp.appendChild(p);
document.body.appendChild(divconp);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un	loop con javascript.
const divdinamicloop = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  //p.innerText = "Hola seis veces"; //para probar
  divdinamicloop.appendChild(p);
}
document.body.appendChild(divdinamicloop);

// 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pdinamic = document.createElement("p");
p.innerText = "Soy dinámico!";
pdinamic.appendChild(p);
document.body.appendChild(pdinamic);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('h2.fn-insert-here');
h2.innerText = 'Wubba Lubba dub dub';

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulElement = document.createElement('ul');
for (let i = 0; i < apps.length; i++) {
  const liElement = document.createElement('li');
  liElement.innerText = apps[i];
  ulElement.appendChild(liElement);
}
document.body.appendChild(ulElement);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
for (let i = elementsToRemove.length - 1; i >= 0; i--) {
  elementsToRemove[i].remove();
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const divs = document.querySelectorAll('body > div');
if (divs.length >= 2) {
  const pElement = document.createElement('p');
  pElement.innerText = 'Voy en medio!';
  const lastDiv = divs[divs.length - 1];
  const secondToLastDiv = divs[divs.length - 2];
  lastDiv.parentNode.insertBefore(pElement, lastDiv.nextSibling);
}


// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divIn = document.querySelectorAll('.fn-insert-here');
for (let i = 0; i < divIn.length; i++) {
  const pElement = document.createElement('p');
  pElement.innerText = 'Voy dentro!';
  divIn[i].appendChild(pElement);
}
