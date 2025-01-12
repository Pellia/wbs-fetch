// Get DOM Elements
const h1 = document.querySelector("h1");
const ul = document.getElementById("todo-list");

// Fetch URL
const path = "https://jsonplaceholder.typicode.com/todos/";
let id = 1;

// Fetch Data
async function getData() {
    try {
        const res = await fetch(`${path}${id}`);
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        const flagColor = data.completed === true ? "text-green-600" : "text-red-600";

        // li item
        const li = document.createElement("li");
        li.classList.add("bg-white", "list-none", "my-2", "p-2", "flex", "justify-between", "rounded-md", "border", "shadow-md");
        li.innerHTML = `<span>#${data.id} | ${data.title}</span><span>Status: <span class="${flagColor}">${data.completed}</span></span>`;

        // Append
        ul.append(li);
        id++;
    } catch (error) {
        console.error(error);
    }
}

// Fetch Button
const fetchBtn = document.createElement("button");
fetchBtn.textContent = "Fetch";
fetchBtn.classList.add("bg-gray-600", "rounded-lg", "p-2", "outline-1", "text-white", "text-lg");
h1.after(fetchBtn);
fetchBtn.addEventListener("click", () => getData());
