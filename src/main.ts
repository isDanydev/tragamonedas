import spin from './TragaMonedas';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button">Spin</button> 
    </div>
  </div>
`;

const spinButton = document.querySelector<HTMLButtonElement>('#counter');
if (spinButton) {
    spinButton.addEventListener('click', spin); // Llama a la función spin() cuando se hace clic en el botón
} else {
    console.error("Button with ID 'counter' not found.");
}
