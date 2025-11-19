const target = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 5;
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submitGuess');
const messageDiv = document.getElementsByClassName('gameMessage');
const attemptsDiv = document.getElementsByClassName('guessesLeft');

submitButton.addEventListener('click', () => {
    const guess = Number(guessInput.value);
    attempts++;
    if (guess > 100 || guess < 0) {
        messageDiv[0].innerText = 'Por favor, insira um número entre 1 e 100.';
        console.log('guess')
    } else if (guess === target) {
        messageDiv[0].innerText = `Parabéns! Você adivinhou o número ${target} em ${attempts} tentativas.`;
        submitButton.disabled = true;
        console.log('guessCheck')
    } else if (guess < target) {
        messageDiv[0].innerText = 'Muito baixo! Tente novamente.';
        console.log('guessLow')
    } else if (guess > target) {
        messageDiv[0].innerText = 'Muito alto! Tente novamente.';
        console.log('guessHigh')
    } 
    if (attempts === maxAttempts) {
        messageDiv[0].innerText = `Fim de jogo! O número era ${target}.`;
        submitButton.disabled = true;
        console.log('gameOver')
    }
    attemptsDiv[0].innerText = `Tentativas restantes: ${maxAttempts - attempts}`;
    guessInput.value = '';
    guessInput.focus()
});