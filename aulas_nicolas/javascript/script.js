const input = document.getElementById('texto');
const resultado = document.getElementById('resultado');

input.addEventListener('input', function(event) {
    // 'event.target.value' pega o valor atual do input
    resultado.textContent = 'Você digitou: ' + event.target.value;
    console.log(event.target.value); // Exibe no console a cada letra
});
