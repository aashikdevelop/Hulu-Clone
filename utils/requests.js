const API_KEY = process.env.NEXT_PUBLIC_BASE_URL;
export default {
  fetchTrending: {
    param: "fetchTrending",
    title: "Trending",
    url: `/trending/all/week?api_key=d03f369840fb0921fca1eb9b542edf9c&language=en-US`,
  },
  fetchTopRated: {
    param: "fetchTopRated",
    title: "Top Rated",
    url: `/movie/top_rated?api_key=d03f369840fb0921fca1eb9b542edf9c&language=en-US`,
  },
  fetchActionMovies: {
    param: "fetchActionMovies",
    title: "Action",
    url: `/discover/movie?api_key=d03f369840fb0921fca1eb9b542edf9c&with_genres=28`,
  },
  fetchComedyMovies: {
    param: "fetchComedyMovies",
    title: "Comedy",
    url: `/discover/movie?api_key=d03f369840fb0921fca1eb9b542edf9c&with_genres=70`,
  },
  fetchHorrorMovies: {
    param: "fetchHorrorMovies",
    title: "Horror",
    url: `/discover/movie?api_key=d03f369840fb0921fca1eb9b542edf9c&with_genres=27`,
  },
  fetchRomanceMovies: {
    param: "fetchRomanceMovies",
    title: "Romance",
    url: `/discover/movie?api_key=d03f369840fb0921fca1eb9b542edf9c&with_genres=10749`,
  },
  fetchMystery: {
    param: "fetchMystery",
    title: "Mystery",
    url: `/discover/movie?api_key=d03f369840fb0921fca1eb9b542edf9c&with_genres=9648`,
  },
  fetchSciFi: {
    param: "fetchSciFi",
    title: "Sci-Fi",
    url: `/discover/movie?api_key=d03f369840fb0921fca1eb9b542edf9c&with_genres=878`,
  },
  fetchWestern: {
    param: "fetchWestern",
    title: "Western",
    url: `/discover/movie?api_key=d03f369840fb0921fca1eb9b542edf9c&with_genres=37`,
  },
  fetchAnimation: {
    param: "fetchAnimation",
    title: "Animation",
    url: `/discover/movie?api_key=d03f369840fb0921fca1eb9b542edf9c&with_genres=16`,
  },
  fetchTV: {
    param: "fetchTV",
    title: "TV Movie",
    url: `/discover/movie?api_key=d03f369840fb0921fca1eb9b542edf9c&with_genres=10770`,
  },
};
