import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css'

function Row({title, fetchUrl, isLarge = false}) {

    const[movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";


    useEffect(()=>{
         
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }

        fetchData();
    }, [fetchUrl]);

  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row__posters'> 
        {movies.map((movie) => 
            ((isLarge && movie.poster_path) ||
            (!isLarge && movie.backdrop_path))&& (
                <img 
            className={`row__poster ${isLarge && "row__posterlarge"} `}
            key={movie.id}
            src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            )
            )}
        </div>
        
    </div>
  )
}

export default Row