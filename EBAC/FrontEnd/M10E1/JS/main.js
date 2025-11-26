import {createClientItem, clients, form, API} from "./utils.js"
import {Atributes} from "./classes.js"

fetch(API)
    .then(response => response.json())
    .then(clientList => {
        clientList.forEach(client => {
            clients.appendChild(createClientItem(client));
        });
    });

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("clientName").value.trim();
    const email = document.getElementById("clientEmail").value.trim();
    const newClient = new Atributes(name, email);

    if (!newClient.isValid()) {
        alert("Preencha nome e email.");
        return;
    }

    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
        .then(res => res.json())
        .then(client => {
            clients.appendChild(createClientItem(client));

            document.getElementById("clientName").value = "";
            document.getElementById("clientEmail").value = "";
        });
});
