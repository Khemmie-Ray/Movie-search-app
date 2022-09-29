let userInput = document.getElementById("searchTitle");
let searchBtn = document.getElementById("btn-search");
let movieContent = document.querySelector("#movies");
let moviePoster = document.querySelector(".heroImg")


function movieLists() {
    let query = (userInput.value);

    fetch(`https://www.omdbapi.com/?t=${query}&apikey=57b8a098`)
        .then(response => response.json())
        .then(data => {
            movieContent.innerHTML = 
                `<div class="heroImg">
                    <img src=${data.Poster} alt="">
                </div>
                <div class="movie-info" id="moviedata">
                    <h2>${data.Title}</h2>
                    <ul>
                        <li>Year: ${data.Year}</li>
                        <li>Type: N/A</li>
                        <li>Ratings: ${data.Rated}</li>
                        <li>Released: ${data.Released}</li>
                    </ul>
                    <p>Genre: ${data.Genre}</p>
                    <p>Writer: ${data.Writer}.</p>
                    <p>Actors: ${data.Actors}.</p>
                    <p>Language: ${data.Language}.</p>
                    <p>Awards: ${data.Awards}.</p>
                    <p>Plot: ${data.Plot}.</p>
                </div>`
        })
}

searchBtn.addEventListener("click", movieLists);

