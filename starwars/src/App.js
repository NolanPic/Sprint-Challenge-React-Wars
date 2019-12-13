import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Container } from './components/styles';
import CharacterList from './components/CharacterList';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState(null);

  // sets the pagination information from the API
  const [paginationConfig, setPaginationConfig] = useState(null);

  // keeps track of what page the user is on
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if(paginationConfig.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if(paginationConfig.previous) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        setCharacters(res.data.results);
        setPaginationConfig({
          count: res.data.count,
          next: res.data.next,
          previous: res.data.previous
        });
        console.log('data', res.data);
      })
      .catch(err => console.warn(err));
  }, [currentPage]);

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
