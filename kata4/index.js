// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.id = 'btnToClick';
  button.innerText = 'Click me';
  document.body.appendChild(button);
  button.addEventListener('click', (event) => {
    console.log('Click event information:', event);
  });

  // Añadir evento focus al input con clase .focus
  const focusInput = document.querySelector('.focus');
  focusInput.addEventListener('focus', (event) => {
    console.log('Focus event value:', event.target.value);
  });

  // Añadir evento input al input con clase .value
  const valueInput = document.querySelector('.value');
  valueInput.addEventListener('input', (event) => {
    console.log('Input event value:', event.target.value);
  });
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.