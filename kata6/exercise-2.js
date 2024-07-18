const elementsToRemove = document.querySelector('.fn-remove-me');
for (let i = elementsToRemove.length - 1; i >= 0; i--) {
  elementsToRemove[i].remove();
}
