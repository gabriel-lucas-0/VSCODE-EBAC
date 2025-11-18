const form = document.getElementById("msg-form");

form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const fullName = event.target.fullname.value;
    const email = event.target.email.value;
    const msg = event.target.message.value;
    
    const data = {
        name: fullName,
        email: email,
        message: msg
    }

    const dataJSON = JSON.stringify(data);

    await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: dataJSON
    })
    .then(response => response.json())
    .then(data => {
        alert(data.d);
        event.target.reset()
    })
    .catch(err => {
        alert("Erro ao realizar o Cadastro")
    })
})