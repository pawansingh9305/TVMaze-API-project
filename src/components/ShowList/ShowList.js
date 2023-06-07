import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => (
  
  <div className="show-list-container">
    <h2 className="tv-shows-title">TV Shows</h2>
    <div className="show-list">
    {shows.map((show) => (
      <div className="show-card" key={show.id}>
        <img src={show.image.medium} alt={show.name} />
        <h3>{show.name}</h3>
        <p>Language: {show.language}</p>
        <p>Genres: {show.genres.join(', ')}</p>
        <Link to={`/show/${show.id}`} state={{ show }}>
          <button className='btn-primary'>More Details</button>
        </Link>
      </div>
    ))}
      </div>
    </div>
  
);

export default ShowList;
