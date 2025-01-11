const div = document.querySelector("div");
const ul = document.getElementById("todo-list");
const path = "https://jsonplaceholder.typicode.com/todos/";
let id = 1;

const fetchBtn = document.createElement("button");
fetchBtn.textContent = "Fetch";
fetchBtn.classList.add("bg-gray-300", "rounded-full", "p-2", "outline-1");
div.append(fetchBtn);
fetchBtn.addEventListener("click", () => {
    fetch(`${path}${id}`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            id++;
            console.log(json);
            const li = document.createElement("li");
            li.textContent = `ID: ${json.id} | Title: ${json.title} | Status: ${json.completed}`;
            ul.append(li);
        });
});
