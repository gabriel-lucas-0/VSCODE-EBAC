const tasks = document.getElementById('taskList');
fetch("https://crudcrud.com/api/25a6602a8ee848a9b729ac72d65e7b10/tasks")
.then(response => response.json())
.then((tasksList) => {
    tasksList.forEach(task => {
        const item = document.createElement('li');
        item.innerHTML = `${task.description} <button onClick="${remove(task._id)}">X</button>`;
        tasks.appendChild(item);
    })
})
document.getElementById('addTaskButton').addEventListener('click', () => {
    const taskDescription = document.getElementById('taskInput').value;
    console.log(taskDescription);
    fetch("https://crudcrud.com/api/25a6602a8ee848a9b729ac72d65e7b10/tasks", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: taskDescription })
    })
    .then(response => {
        response.json()
        console.log(response.json());
        return response.json();
    }) 
    .then((task) => {
        const item = document.createElement('li');
        item.innerHTML = `${task.description} <button onClick="${remove(task._id)}">X</button>`;
        tasks.appendChild(item);
    });
});
function remove(id) {
    fetch(`https://crudcrud.com/api/25a6602a8ee848a9b729ac72d65e7b10/tasks/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        const item = document.querySelector(`button[onClick="remove(${id})"]`).parentElement;
        tasks.removeChild(item);
        window.location.reload();
    });
}