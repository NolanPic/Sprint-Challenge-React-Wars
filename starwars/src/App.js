import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Container } from './components/styles';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState(null);

  // sets the pagination information from the API
  const [paginationConfig, setPaginationConfig] = useState(null);

  // keeps track of what page the user is on
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const [loading, setLoading] = useState(true);

  const handleNextPage = () => {
    if(paginationConfig.next) {
      setLastPage(currentPage);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if(paginationConfig.previous) {
      setLastPage(currentPage);
      setCurrentPage(currentPage - 1);
    }
  };

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    let paginatedRequest = null;
    if(paginationConfig) {
      if(lastPage < currentPage) {
        paginatedRequest = paginationConfig.next;
      }
      else if (lastPage > currentPage) {
        paginatedRequest = paginationConfig.previous;
      }
    }

    setLoading(true);

    cachedAxiosGet(paginatedRequest ? paginatedRequest : 'https://swapi.co/api/people/?page=1')
      .then(res => {
        setCharacters(res.data.results);
        setPaginationConfig({
          count: res.data.count,
          next: res.data.next,
          previous: res.data.previous
        });
        console.log('data', res.data);
        setLoading(false);
      })
      .catch(err => console.warn(err));
  }, [lastPage, currentPage]);

  return (
    <Container>
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {!loading ? (
          <CharacterList characters={characters} />
        ) :
        (<p>Loading...</p>)}
        {paginationConfig && (
          <Pagination
            config={paginationConfig} 
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        )}
      </div>
    </Container>
  );
}


function cachedAxiosGet(url) {

  // grab previous requests
  let requests = getRequestsFromStorage();

  if(requests) {
    // if there have been previous requests, see if this request
    // has already been made
    let promiseToGetOld = null;
    requests.forEach(request => {
      if(request.url === url) {
        // if this request has already been made, return
        // a promise with the request body
        promiseToGetOld = new Promise((resolve) => resolve(request.body));
      }
    });
    if(promiseToGetOld) {
      return promiseToGetOld;
    }
  }

  // this request has not been made yet--continue on to
  // use axios to make the request
  const promiseToGetNew = new Promise((resolve, reject) => {
    axios.get(url)
      .then(res => {
        // once the request has been made,
        // cache it in local storage
        setRequestInStorage(url, res);
        resolve(res);
      })
      .catch(err => reject(err));
  });

  return promiseToGetNew;
}

/**
 * Gets network requests that have been made from local storage
 */
function getRequestsFromStorage() {
  if(sessionStorage.getItem('requests')) {
    return JSON.parse(sessionStorage.getItem('requests'));
  }
  else {
    return null;
  }
}

/**
 * Sets a new request url and resulting body in local storage
 * @param {*} url 
 * @param {*} body 
 */
function setRequestInStorage(url, body) {
  const requests = getRequestsFromStorage() || [];
  requests.push({
    url,
    body
  });
  sessionStorage.setItem('requests', JSON.stringify(requests));
}

export default App;
