import React, { Component } from 'react';
import TvShows from './TvShows';

class App extends Component {
  state = { 
    tvShows: [
      { id: 1, name: 'Arcane', watched: false },
      { id: 2, name: 'The Gilded Age', watched: false },
      { id: 3, name: 'Euphoria', watched: true },
    ]
  }

  render() { //destructuring
    const { tvShows } = this.state;
 //tvShows = tvShows is assigning a variable for Shows class 
    return (
      <div>
        
      {<TvShows name="Shows to Watch" tvShows={tvShows} />}
   
      </div>
    );
  }
}

export default App;