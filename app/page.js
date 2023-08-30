import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import requests from "@/utils/requests";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre;
  const res = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }.json`
  );
  // const res = await fetch(
  //   `https://api.themoviedb.org/3/trending/all/week?api_key=d03f369840fb0921fca1eb9b542edf9c&language=en-US`
  // );

  const data = await res.json();
  const results = data.results;


  return (
    <main>
      {/*HEADER*/}
      <Header />
      {/*NAV*/}
      <Nav />
      {/*RESULTS*/}
      <Results results={results} />
    </main>
  );
}
