const amountInput = document.getElementById("amount");
const timeOutput = document.getElementById("time");
const changeOutput = document.getElementById("change");

function calculateParking() {

    const amount = parseFloat(amountInput.value);
    let time = 0;
    let change = 0;

    if (isNaN(amount) || amount <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    if (amount < 1) {
        alert("Valor insuficiente. O valor mínimo é R$ 1,00.");
        return;
    }

    if (amount >= 3) {
        time = 120;
        change = amount - 3;
    } else if (amount >= 1.75) {
        time = 60;
        change = amount - 1.75;
    } else if (amount >= 1) {
        time = 30;
        change = amount - 1;
    }

    timeOutput.innerText = `Tempo de permanência: ${time} minutos`;
    changeOutput.innerText = `Troco: R$ ${change.toFixed(2)}`;

    amountInput.value = "";
}