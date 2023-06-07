import React, { useState, useEffect } from 'react';

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  const handleShowDetails = (show) => {
    console.log("Show details:", show);
    // Implement your logic for displaying show details
  };

  return (
    <div className="container">
      <h2>TV Shows</h2>
      <div className="show-list">
        {shows.map((show) => (
          <div className="show-card" key={show.show.id}>
            <img
              className="show-poster"
              src={show.show.image.medium}
              alt={show.show.name}
            />
            <h3>{show.show.name}</h3>
            <p>Language: {show.show.language}</p>
            <p>Genres: {show.show.genres.join(", ")}</p>
            <p>Rating: {show.show.rating.average || "N/A"}</p>
            <button onClick={() => handleShowDetails(show.show)}>
              More Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
