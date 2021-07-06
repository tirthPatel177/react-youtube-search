import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import SearchResults from './components/SearchResults';

function App() {

  const Search = (s) => {
    console.log("Handling Submit");
    console.log(s);
  };

  return (
    <div className="App">
      <header>
        <img></img>
      </header>
      <Searchbar Search={Search}/>
      <SearchResults />
    </div>
  );
}

export default App;
