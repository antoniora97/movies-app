const APILINK = 'https://api.themoviedb.org/3/discover/movie?api_key=194024e8f400882185b9e4cd46777243';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=194024e8f400882185b9e4cd46777243&query=';


const main = document.getElementById("peliculas");
const form = document.getElementById("form");
const search = document.getElementById("buscador");

returnMovies(APILINK);
function returnMovies (url) {
    fetch(url).then(res => res.json()).then(function(data) {
        console.log(data.results)
        data.results.forEach(element => {
            const div_pelicula = document.createElement('div');
            div_pelicula.setAttribute("class", "pelicula");

            const image = document.createElement('img');
            const title = document.createElement('h3');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            div_pelicula.appendChild(image);
            div_pelicula.appendChild(title);
            main.appendChild(div_pelicula);
        })
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = "";

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
})