import React from 'react';

const TvShows = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      { props.tvShows.map( show => <li key={show.id}>{show.name}</li>) }
    </ul>
  </div>
);


export default TvShows;