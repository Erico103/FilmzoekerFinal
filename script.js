let movieCard = document.getElementById("movie-card");
let searcher = document.getElementById("searcher");
let radioButtons = document.querySelectorAll("input");
const removed = document.querySelectorAll(".movie");
const main = document.getElementById("main-movie-container");

// get URL
const imdbURL = id => {
  return "http://www.imdb.com/title/" + id;
};

function showMovies(movieArray) {
  movieCard.innerHTML = "";
  movieArray.forEach(movie => {
    const list = document.createElement("div");
    list.classList.add("movie");

    const image = document.createElement("img");
    image.classList.add("poster");
    const title = document.createElement("p");
    const link = document.createElement("a");
    title.textContent = movie.Title;
    image.src = movie.Poster;
    link.href = imdbURL(movie.imdbID);
    link.target = "blank";

    list.appendChild(link);
    link.appendChild(image);
    list.appendChild(title);
    movieCard.appendChild(list);
  });
}

showMovies(movies);

function showRadioButtons() {
  radioButtons.forEach(radioBtn => {
    radioBtn.addEventListener("change", () => {
      showMovieChoice(event);
    });
  });
}

showRadioButtons();

const showMovieChoice = event => {
  switch (event.target.value) {
    case "batman":
      filterMovies("Batman");

      console.log("ik ben batman");
      break;
    case "avengers":
      filterMovies("Avengers");

      console.log("ík ben een Avenger");
      break;
    case "x-men":
      filterMovies("X-Men");

      console.log("ik ben een x man");
      break;
    case "princess":
      filterMovies("Princess");

      console.log("ik ben een princess");
      break;
    case "newreleases":
      filterLatestMovies();

      console.log("ik ben willekeurig");
      break;
    default:
      showMovies(movies);
      break;
  }
};

const filterMovies = wordInMovieTitle => {
  const result = movies.filter(item => {
    return item.Title.includes(wordInMovieTitle);
  });
  showMovies(result);
  console.log(result);
};

// filterLatestMovies
const filterLatestMovies = () => {
  const result = movies.filter(movie => {
    return parseInt(movie.Year) >= 2014;
  });
  showMovies(result);
  console.log(result);
};

// searchField
searcher.addEventListener("keyup", () => {
  filterMovies(
    searcher.value.charAt(0).toUpperCase() + searcher.value.slice(1)
  );
});
