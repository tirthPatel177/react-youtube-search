import React, {useState, useEffect} from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import SearchResults from './components/SearchResults';
import YoutubeSearch from './components/api';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    console.log(videos);
    videos.map( video => console.log(video));
  }, [videos]);

  const Search = async (text) => {
    console.log("Handling Submit");
    console.log(text);
    const response = await YoutubeSearch.get('/search', {
      params: {
          q: text
      }
    })

    setVideos(response.data.items)
  };


  return (
    <div className="App">
      <header>
        <img></img>
      </header>
      <Searchbar Search={Search}/>
      <SearchResults videos={videos}/>
    </div>
  );
}

export default App;
