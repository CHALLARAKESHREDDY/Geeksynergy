import React from 'react'
import './ListItem.css'

const ListItem = React.memo(({ item }) => {
  const { title, genre, language, stars, poster, voting, pageViews } = item;

  return (
    <div className="list-item">
      <div className="votes-section">
        <div className="votes-count">{voting}</div>
        <div className="votes-label">Votes</div>
      </div>
      <img className="poster-image" src={poster} alt={title} />
      <div className="details-section">
        <h2 className="title">{title}</h2>
        <p className="genre">Genre: {genre}</p>
        <p className="language">Language: {language}</p>
        <p className="director">Director: {stars.join(', ')}</p>
        <p className="views">Views: {pageViews}</p>
        <button className="trailer-button">Watch Trailer</button>
      </div>
    </div>
  );
});

export default ListItem;
