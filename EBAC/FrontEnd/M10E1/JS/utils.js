export const clients = document.getElementById("clientList");
export const form = document.querySelector(".client-form");
export const API = "https://crudcrud.com/api/4ffb9dec3e6048de899a25a62ae73927/clients";

export function createClientItem(client) {
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

function removeClient(id) {
    fetch(`${API}/${id}`, { method: "DELETE" })
        .then(() => {
            const btn = document.querySelector(`button[data-id="${id}"]`);
            if (btn) btn.parentElement.remove();
        });
}