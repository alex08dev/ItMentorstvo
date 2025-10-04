/*
- getElementById -> prosledite ID, dobijete element
- gerElementByClassName -> Prosledite klasi i dobijete array sa elemntima
----------------------------------------------------------------------------
- querySelector -> "#name", ".name" -> Vraca 1 elment
- querySelectorAll -> "#name", ".name" -> Vraca array sa elementima
 */

let elements = document.getElementsByClassName("description")
console.log(elements);

elements[0].style.color = "red";
elements[1].style.color = "blue";

let hTitle = document.getElementsByClassName("title");

hTitle[0].style.color = "green";

// Vezba Koliko elemenata imamo sa klasom description

console.log(elements.length);

// Vezba moj nacin

for(let i = 0; i < elements.length; i++) {
    elements[i].innerText = i ;
}

// Vezba skolski nacin

for(let e in elements) {
    elements[e].innerText = e;
}

