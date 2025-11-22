document.getElementById("cep").addEventListener("blur", (event) => {
    localStorage.setItem('cep', event.target.value);
    const element = event.target;
    const cepInformed = element.value
    if (!(cepInformed.length === 8)) {
        return;
    }
    fetch(`https://viacep.com.br/ws/${cepInformed}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            } else {
                alert("CEP não encontrado.");
            }
        })
        .catch(error => console.error('Erro ao buscar o CEP:', error));
});
document.addEventListener("DOMContentLoaded", () => {
    const savedCep = localStorage.getItem('cep');
    if (savedCep) {
        document.getElementById('cep').value = savedCep;
        const event = new Event('blur');
        document.getElementById('cep').dispatchEvent(event);
    }
});