import React from "react";
import Thumbnails from "./Thumbnails";


function Results({ results }) {
 

  return (
    <div className=" px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-3xl:flex flex-wrap justify-center gap-3">
      {results.map((result) => (
        <Thumbnails key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
