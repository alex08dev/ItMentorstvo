const apiUrl = "http://www.omdbapi.com/";
let apiKey = "e30ef0d6";

// Domaci skolski nacin

document.getElementById("searchBtn").addEventListener("click", async () => {
  let movieName = document.getElementById("searchInput").value.trim();
  let searchError = document.getElementById("searchError");
  searchError.innerText = "";

  if (movieName === "") return alert("Morate uneti ime filma");

  let response = await callOMDbApi("s=" + movieName);

  if (response.Response === "False") {
    searchError.innerText = response.Error;
  } else {
    const movieList = document.getElementById("moviesDiv");

    for (let movie of response["Search"]) {
      let movieHolder = document.createElement("div");
      movieHolder.classList = "movieHolder";
      let movieTitle = document.createElement("h3");
      movieTitle.innerText = movie.Title;
      let moviePoster = document.createElement("img");
      moviePoster.setAttribute("src", movie.Poster);
      let movieType = document.createElement("p");
      movieType.innerText = movie.Type;
      let movieYear = document.createElement("p");
      movieYear.innerText = movie.Year;

      movieHolder.append(movieTitle, moviePoster, movieType, movieYear);

      movieList.append(movieHolder);
    }
  }
});

let terminatorResponse = await callOMDbApi("t=Terminator");
console.log(terminatorResponse);

let homeAloneSearch = await callOMDbApi("s=Home Alone&y=1990");
console.log(homeAloneSearch);

/* Domaci Moj nacin

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let div = document.getElementById("moviesDiv");
searchBtn.addEventListener("click", async function () {
  let inputValue = searchInput.value;
  console.log(inputValue);

  let searchMovie = await callOMDbApi("s=" + inputValue);
  displayMovieCard(searchMovie);
});

function displayMovieCard(searchMovie) {
  for (const movie of searchMovie.Search) {
    let movieCard = document.createElement("div");
    let movieImage = document.createElement("img");
    let movieTitle = document.createElement("h1");
    let movieYear = document.createElement("h3");

    movieImage.src = movie.Poster;
    movieImage.alt = movie.Title;
    movieTitle.textContent = movie.Title;
    movieYear.textContent = movie.Year;

    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieYear);

    moviesDiv.appendChild(movieCard);
  }
}

*/

async function callOMDbApi(params) {
  const url = apiUrl + "?apiKey=" + apiKey + "&" + params;

  const response = await fetch(url);

  return await response.json();
}
