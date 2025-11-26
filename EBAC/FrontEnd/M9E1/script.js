const clients = document.getElementById("clientList");
const form = document.querySelector(".client-form");

const API = "https://crudcrud.com/api/fdef3d58d693420fb43b5176be543233/clients";

function createClientItem(client) {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = `${client.name} — ${client.email}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("delete-btn");
    removeBtn.dataset.id = client._id;
    removeBtn.onclick = () => removeClient(client._id);

    li.appendChild(text);
    li.appendChild(removeBtn);

    return li;
}

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

    if (!name || !email) {
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

function removeClient(id) {
    fetch(`${API}/${id}`, { method: "DELETE" })
        .then(() => {
            const btn = document.querySelector(`button[data-id="${id}"]`);
            if (btn) btn.parentElement.remove();
        });
}