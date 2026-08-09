let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const recipeList = document.getElementById("recipe-list");
const recipeDetail = document.getElementById("recipe-detail");

const detailImage = document.getElementById("detail-image");
const detailName = document.getElementById("detail-name");
const detailIngredients = document.getElementById("detail-ingredients");
const detailSteps = document.getElementById("detail-steps");

const backBtn = document.getElementById("backBtn");

function displayRecipes(recipeArray){

    recipeList.innerHTML = "";

    recipeArray.forEach(recipe => {

        let heart = favorites.includes(recipe.name) ? "❤️" : "🤍";

        recipeList.innerHTML += `
        <div class="card">

            <img src="${recipe.image}" onclick="openRecipe('${recipe.name}')">

            <h2>${recipe.name}</h2>

            <button onclick="toggleFavorite('${recipe.name}')">
                ${heart}
            </button>

        </div>
        `;

    });

}

displayRecipes(recipes);

function openRecipe(recipeName){

    const recipe = recipes.find(r => r.name === recipeName);

    recipeList.style.display = "none";
    recipeDetail.classList.remove("hidden");

    detailImage.src = recipe.image;
    detailName.innerText = recipe.name;

    detailIngredients.innerHTML = "";

    recipe.ingredients.forEach(item => {
        detailIngredients.innerHTML += `<li>${item}</li>`;
    });

    detailSteps.innerHTML = "";

    recipe.steps.forEach(step => {
        detailSteps.innerHTML += `<li>${step}</li>`;
    });

}

backBtn.onclick = function(){

    recipeDetail.classList.add("hidden");
    recipeList.style.display = "grid";

}

function searchRecipe(){

    let keyword = document.getElementById("search").value.toLowerCase();

    let result = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(keyword)
    );

    displayRecipes(result);

}

function filterCategory(category){

    if(category==="All"){

        displayRecipes(recipes);

        return;

    }

    let filtered = recipes.filter(recipe =>
        recipe.category===category
    );

    displayRecipes(filtered);

}

function toggleFavorite(recipeName){

    if(favorites.includes(recipeName)){
        favorites = favorites.filter(name => name !== recipeName);
    }else{
        favorites.push(recipeName);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    displayRecipes(recipes);

}

function showFavorites(){

    let favRecipes = recipes.filter(recipe =>
        favorites.includes(recipe.name)
    );

    displayRecipes(favRecipes);

}

function showAllRecipes(){

    displayRecipes(recipes);

}
const darkBtn =
document.getElementById("darkBtn");

darkBtn.onclick = function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

}

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

}

function enterWebsite(){

    document.getElementById("landing-page").style.display = "none";

    document.getElementById("main-page").style.display = "block";

}