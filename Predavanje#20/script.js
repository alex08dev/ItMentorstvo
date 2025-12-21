

const mealDbAPI = "https://themealdb.com/api/json/v1/1/";

const data = await getMEalDBData("categories.php");

const categorySelect = document.getElementById("foodCategories");


for(let category of data.categories){
  appendCategory(category);
}

const mealHolder = document.getElementById("mealsHolder");

categorySelect.addEventListener("change", async()=>{

    mealHolder.innerHTML = "";
    const mealsJson = await getMEalDBData("filter.php?c="+categorySelect.value);

    for(let meal of mealsJson.meals){

        let mealDiv = showMeal(meal);

        mealDiv.addEventListener("click", async()=>{
            let recipe = await getMEalDBData("lookup.php?i="+meal.idMeal);

            let cocktail = await getRandomCocktail();

            document.getElementById("recipeText").innerText = recipe.meals[0].strInstructions;
            document.getElementById('cocktail').innerText ="Sugessted Drink: "+ cocktail.drinks[0].strDrink;
            document.getElementById('popup').style.display="flex";

        })

    }


})

// close popup

document.getElementById("closePopup").addEventListener("click",()=>{
    document.getElementById('popup').style.display="none";
})

// functions
// create meal div with content
function showMeal(meal){
    let mealDiv = document.createElement("div");
    mealDiv.classList ="singleMeal";

    let mealImage = document.createElement("img");
    mealImage.setAttribute("src", meal.strMealThumb);
    mealImage.classList="mealImage";

    let mealName = document.createElement("h5");
    mealName.innerText = meal.strMeal;

    mealDiv.append(mealImage);
    mealDiv.append(mealName);
    mealHolder.append(mealDiv);

    return mealDiv;
}
//append meal options to the select menu

function appendCategory(category){
    let categoryElement = document.createElement("option");
    categoryElement.value = category.strCategory;
    categoryElement.textContent = category.strCategory;
    categorySelect.appendChild(categoryElement);
}

async function getRandomCocktail(){
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    return await response.json();
}


async function getMEalDBData(endpoint){
    let response = await fetch(mealDbAPI+endpoint);
    return await response.json();
}