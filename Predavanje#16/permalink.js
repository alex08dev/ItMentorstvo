
let params = new URLSearchParams(window.location.search);
let tagsHolder = document.getElementById('tagsHolder');

let recipeId = params.get('id');
let recipeElement = document.getElementById('recipes');


// vezba moj nacin
/*
let backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', function(){
    window.location.href="index.html";
})
*/

// Domaci

fetch("https://dummyjson.com/recipes/"+recipeId)
.then(res => res.json())
.then(function(data) {
    let recipeName = document.createElement("h1");
    recipeName.innerText = data.name

    recipeElement.appendChild(recipeName);
})

fetch('https://dummyjson.com/recipes/tags')
    .then(res => res.json())
    .then(function (data) {
        for(let tag of data){
            let tagElement = document.createElement('option');
            tagElement.innerText = tag;
            tagElement.value = tag;
            tagsHolder.append(tagElement);
        }
    });

tagsHolder.addEventListener('change', function(){
    window.location.href="index.html?category="+this.value;
})




/* Domaci
function appendTag(data) {
    for(let tag of data) {
        let tagElement = document.createElement('option');
        tagElement.innerText = tag;
        tagElement.value = tag;
        tagsHolder.append(tagElement);
    }
}
tagsHolder.addEventListener('change', function() {
   let url = 'https://dummyjson.com/recipes/tag/'+this.value;
    recipeElement.innerHTML ="";
    fetch(url).then(response => response.json())
        .then(function (data) {

            for (let recepie of data.recipes){
                appendCookingRecipe(recepie)
            }
        })
})
function buildInstructionElements(instructions) {
    let recepieInstructions = document.createElement('ul');

    for(let instruction of instructions){
        let instructionElem = document.createElement('li');
        instructionElem.innerText = instruction;

        recepieInstructions.appendChild(instructionElem);
    }
    return recepieInstructions;
}

function appendCookingRecipe(recepie) {
    let cookingInstructions = buildInstructionElements(recepie.instructions)

    let singleRecipe = document.createElement('div');

    let recepieTitle = document.createElement('h1');
    recepieTitle.textContent = recepie.name;

    let recepieCuisine = document.createElement('p');
    recepieCuisine.textContent = recepie.cuisine;



    singleRecipe.append(recepieTitle, recepieCuisine, cookingInstructions, );
    recipeElement.append(singleRecipe);
}
*/
