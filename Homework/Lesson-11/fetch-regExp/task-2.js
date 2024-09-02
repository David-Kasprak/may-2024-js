const recipesDiv = document.getElementById('recipesDiv');

fetch('https://dummyjson.com/recipes')
.then((response) => response.json())
.then((recipe) => {
    const {recipes} = recipe;

    for (const recipe of recipes) {
        const div = document.createElement("div")

        for (const recipeKey in recipe) {
            if (Array.isArray(recipe[recipeKey])) {
                const arrayAndTitleDiv = document.createElement("div");
                const ol = document.createElement("ol");
                const h3 = document.createElement("h3");
                h3.innerText = recipeKey;
                const array = recipe[recipeKey];
                for (const item of array) {
                    arrayAndTitleDiv.append(h3, ol);
                   const li = document.createElement("li");
                    li.innerText = item;
                    ol.appendChild(li);
                }
                div.appendChild(arrayAndTitleDiv)
            } else {
                const keyDiv = document.createElement("div");
                div.appendChild(keyDiv)
                keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`
                recipesDiv.appendChild(div);
            }
        }

    }
})