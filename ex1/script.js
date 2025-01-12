const h1 = document.querySelector("h1");
const ul = document.getElementById("todo-list");
const path = "https://jsonplaceholder.typicode.com/todos/";
let id = 1;

const fetchBtn = document.createElement("button");
fetchBtn.textContent = "Fetch";
fetchBtn.classList.add("bg-gray-600", "rounded-lg", "p-2", "outline-1", "text-white", "text-lg");
h1.after(fetchBtn);
fetchBtn.addEventListener("click", async () => {
    try {
        const res = await fetch(`${path}${id}`);
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        id++;
        console.log(data);
        const li = document.createElement("li");
        li.textContent = `ID: ${data.id} | Title: ${data.title} | Status: ${data.completed}`;
        ul.append(li);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
});
