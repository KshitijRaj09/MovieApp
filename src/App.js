import axios from 'axios';
import React,{useState, useEffect} from 'react'; 
import MovieList from './component/MovieList';
import './App.css';
import Header from './component/Header';

export default ()=> {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
    useEffect(() => {
      async function searchMovies(){
          try{
            const {data} = await axios.get(`http://api.tvmaze.com/shows`);
            setMovies(data);
            console.log(data);
          }
          catch(error){
            setLoading(false);
            console.log(error.message, loading);
          }
        }
        searchMovies();
        // eslint-disable-next-line
      }, [])
    
  const addToFavourite=()=>{ 
  }    
  return (
    <div>
    <Header/>
      {movies.length>0&&<MovieList movies={movies} addToFavourite={addToFavourite}/>}
    </div>
    );
}
