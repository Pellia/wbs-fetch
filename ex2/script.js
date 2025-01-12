// Get DOM Elements
const h1 = document.querySelector("h1");
const div = document.getElementById("pokemon-container");

// Fetch URL
const path = "https://pokeapi.co/api/v2/pokemon/";

// Fetch Data
async function getData() {
    for (let i = 1; i < 152; i++) {
        try {
            const res = await fetch(`${path}${i}`);
            if (!res.ok) throw new Error("Something went wrong");
            const data = await res.json();

            // Data
            const name = data.name;
            const sprite = data.sprites.front_default;
            let type = "";
            for (let i = 0; i < data.types.length; i++) {
                const rawType = data.types[i].type.name;
                if (type) {
                    type += " | " + rawType[0].toUpperCase() + rawType.slice(1);
                } else {
                    type += rawType[0].toUpperCase() + rawType.slice(1);
                }
            }

            // li item
            const li = document.createElement("li");
            li.classList.add("bg-white", "list-none", "my-2", "p-2", "flex", "flex-col", "rounded-md", "border", "shadow-md");
            li.innerHTML = `<p class='capitalize'>${name}</div><img class='mx-auto' src='${sprite}'/><p class='capitalize'>${type}</p>`;

            // Append
            div.append(li);
        } catch (error) {
            console.error(error);
        }
    }
}

// Fetch Button
const fetchBtn = document.createElement("button");
fetchBtn.textContent = "Fetch";
fetchBtn.classList.add("bg-gray-600", "rounded-lg", "p-2", "outline-1", "text-white", "text-lg");
h1.after(fetchBtn);
fetchBtn.addEventListener("click", () => getData());
