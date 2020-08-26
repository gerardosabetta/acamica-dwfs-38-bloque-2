const API_KEY = "7fb789f2";

async function getMovieByTitle(title) {
  let url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`;
  const response = await fetch(url);
  const responseJSON = await response.json();

  console.log(responseJSON);
}

getMovieByTitle("The matrix");
