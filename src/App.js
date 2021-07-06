import React, {useState} from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import SearchResults from './components/SearchResults';
import YoutubeSearch from './components/api';
import icon from './design/youtube.png'

function App() {

  const [videos, setVideos] = useState([]);

  // useEffect(()=>{
  //   console.log(videos);
  //   videos.map( video => console.log(video));
  // }, [videos]);

  const Search = async (text) => {
    // console.log("Handling Submit");
    // console.log(text);
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
        <img src={icon} alt="youtube logo"></img>
        <h1>Welcome to Youtube Search App</h1>
      </header>
      <section className="main">
      <Searchbar Search={Search}/>
      <SearchResults videos={videos}/>
      </section>
    </div>
  );
}

export default App;
