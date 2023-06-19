import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from './axios.js';
import requests from './Requests';

function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results
                [
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
                
            )
            return request;
        }

        fetchData();
    },[])

    // console.log(request.data.results.lenght);



    function truncate (string,n) {
        return string?.lenght > n ? string.substr(0, n-1 ) + '...' : string;
    }

  return (
    <header className='banner' style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'centre centre',
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'> {movie?.title || movie?.name || movie?.original_name} </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>


                <h1 className='banner__discription'>{truncate(movie?.overview,10)}</h1>
            </div>
            <div className='banner__fadebutton'/>

        
    </header>
  )
}

export default Banner


// https://image.tmdb.org/t/p/original//vYm3JDA5ZZbs9hvLs0mPQzqaY95.jpg

// console.log(movie?.title || movie?.name || movie?.original_name)