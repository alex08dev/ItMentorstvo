

// Vezba 1 moj nacin


/*
let mainDiv = document.getElementById('recipes');

fetch('https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc')
    .then(response => response.json())
.then(function (data) {
    for (let recepie of data.recipes){
        listRecepies (recepie)
    }
    }
)

function listRecepies (recepie){

    let recepiesDiv = document.createElement('div');

    let recepieName = document.createElement('h1');
    recepieName.textContent = recepie.name;
    let recepieCuisine = document.createElement('p');
        recepieCuisine.textContent = recepie.cuisine;

    let recepieInstructions = document.createElement('p');
    recepieInstructions.textContent = recepie.instructions;

    recepiesDiv.append(recepieName, recepieCuisine ,recepieInstructions);
    mainDiv.append(recepiesDiv);
}
*/

//Skolski

let recepieHolder = document.getElementById('recipes');
let tagsHolder = document.getElementById('tagsHolder');

let params = new URLSearchParams(window.location.search);
let category = params.get('category');
console.log(category);

if (category === null) {
    fetch('https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc')
        .then(response => response.json())
        .then(function (data) {
                for (let recepie of data.recipes){
                    appendCookingRecipe(recepie)

                }
            }
        )
} else {
    let apiUrl = 'https://dummyjson.com/recipes/tag/'+category;
    fetch(apiUrl).then(response => response.json())
        .then(function (data) {
            recepieHolder.innerHTML ="";
            for (let recepie of data.recipes){
                appendCookingRecipe(recepie)
            }
        })
}


fetch('https://dummyjson.com/recipes/tags')
    .then(res => res.json())
    .then(function (data) {
        appendTag(data)
    });

tagsHolder.addEventListener('change', function() {
    let apiUrl = 'https://dummyjson.com/recipes/tag/'+this.value;
    fetch(apiUrl).then(response => response.json())
    .then(function (data) {
        recepieHolder.innerHTML ="";
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

// Vezba

function appendCookingRecipe(recepie) {
    let cookingInstructions = buildInstructionElements(recepie.instructions)

    let singleRecipe = document.createElement('div');

    let recepieTitle = document.createElement('h1');
    recepieTitle.textContent = recepie.name;

    let recepieCuisine = document.createElement('p');
    recepieCuisine.textContent = recepie.cuisine;

    let permalinkElement = document.createElement('a');
    permalinkElement.innerText = "Show recipe";
    permalinkElement.href="permalink.html?id="+recepie.id;

    singleRecipe.append(recepieTitle, recepieCuisine, cookingInstructions, permalinkElement);
    recepieHolder.append(singleRecipe);
}

function appendTag(data) {
    for(tag of data) {
        let tagElement = document.createElement('option');
        tagElement.innerText = tag;
        tagElement.value = tag;
        tagsHolder.append(tagElement);
    }
}

