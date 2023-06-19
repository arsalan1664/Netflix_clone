import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from './axios'

function Row({title,fetchURl, isLargeRow=false}) {

    const[movies,setMovies] = useState([])
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURl)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchURl]);
    
    console.log(movies);
    


  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row__posters'>


            {movies.map((movie)=>(
                (((isLargeRow && movie.poster_path) || 
                (!isLargeRow && movie.poster_path)) && (

                <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    key={movie.id} 
                    src={`${baseUrl}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                    alt={movie.name}

                />))

            
            ))}

        </div>
        
    </div>
  )
}

export default Row