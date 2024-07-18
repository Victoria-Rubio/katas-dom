//1.1 Basandote en el array siguiente, crea una lista ul > li  dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulcountries = document.createElement("ul");
for (let i = 0; i < countries.length; i++) {
  const liElement = document.createElement("li");
  liElement.innerText = countries[i];
  ulcountries.appendChild(liElement);
}
document.body.appendChild(ulcountries);


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementoARemover = document.querySelector(".fn-remove-me")
if (elementoARemover) {
  elementoARemover.remove();
}


//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ulcars = document.createElement("ul");
for (let i = 0; i < cars.length; i++) {
  const liElement = document.createElement("li");
  liElement.innerText = cars[i];
  ulcars.appendChild(liElement);
}
const printHereDiv = document.querySelector('div[data-function="printHere"]');
printHereDiv.appendChild(ulcars);


//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesran = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (let i = 0; i < countriesran.length; i++) {
  const country = countriesran[i];
  const divElement = document.createElement('div');
  const h4Element = document.createElement('h4');
  const imgElement = document.createElement('img');

  h4Element.innerText = country.title;
  imgElement.src = country.imgUrl;

  divElement.appendChild(h4Element);
  divElement.appendChild(imgElement);

  document.body.appendChild(divElement);
}


//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const deleteLastButton = document.createElement('button');
deleteLastButton.innerText = 'Eliminar último elemento';

deleteLastButton.addEventListener('click', () => {
  const allDivs = document.body.querySelectorAll('body > div');
  if (allDivs.length > 0) {
    document.body.removeChild(allDivs[allDivs.length - 1]);
  }
});

document.body.appendChild(deleteLastButton);


//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
for (let i = 0; i < countriesran.length; i++) {
  const country = countriesran[i];
  const divElement = document.createElement('div');
  const h4Element = document.createElement('h4');
  const imgElement = document.createElement('img');
  const deleteButton = document.createElement('button');

  h4Element.innerText = country.title;
  imgElement.src = country.imgUrl;
  deleteButton.innerText = 'Eliminar este elemento';

  deleteButton.addEventListener('click', () => {
    document.body.removeChild(divElement);
  });

  divElement.appendChild(h4Element);
  divElement.appendChild(imgElement);
  divElement.appendChild(deleteButton);

  document.body.appendChild(divElement);
}

