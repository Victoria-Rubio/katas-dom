// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];



const ulalbums = document.createElement("ul");
for (let i = 0; i < albums.length; i++) {
  const liElement = document.createElement("li");
  liElement.innerText = albums[i];
  ulalbums.appendChild(liElement);
}
document.body.appendChild(ulalbums);