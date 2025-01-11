const div = document.getElementById("pokemon-container");
const path = "https://pokeapi.co/api/v2/pokemon/";

const fetchBtn = document.createElement("button");
fetchBtn.textContent = "Fetch";
fetchBtn.classList.add("bg-gray-300", "rounded-full", "p-2", "outline-1");
div.append(fetchBtn);
fetchBtn.addEventListener("click", async () => {
    for (let i = 1; i < 151; i++) {
        fetch(`${path}${i}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                const li = document.createElement("li");
                li.innerHTML = `<div class='capitalize'>${json.name}</div><img src='${json.sprites.front_default}'/><p>${json.types[0].type.name}</p>`;
                div.append(li);
            });
    }
});
