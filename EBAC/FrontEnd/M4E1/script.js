function imcCalculator() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    let imc = weight / (height * height);
    let classification = 0
    if (imc < 18.5) {
        classification = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classification = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classification = "Sobrepeso";
    }

    document.getElementById("imcValue").innerText = "O valor do seu IMC é: " + imc.toFixed(2);
    document.getElementById("imcClass").innerText = "Classificação: " + classification;
}