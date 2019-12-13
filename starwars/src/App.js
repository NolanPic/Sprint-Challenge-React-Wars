import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Container } from './components/styles';
import CharacterList from './components/CharacterList';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState(null);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        setCharacters(res.data.results);
        console.log('data', res.data.results);
      })
      .catch(err => console.warn(err));
  }, []);

  return (
    <Container>
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {characters ? (
          <CharacterList characters={characters} />
        ) :
        (<p>Loading...</p>)}
      </div>
    </Container>
  );
}

export default App;
