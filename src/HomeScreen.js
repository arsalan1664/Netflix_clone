import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import requests from './Requests'
import Row from './Row'

function HomeScreen() {
  return (
    <div className='homeScreen'> 

     <Nav/>

     <Banner/>

     <Row title='NETFLIX ORIGINAL' fetchURl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title='Trending Now' fetchURl={requests.fetchTrending}/>
     <Row title='Top Rated' fetchURl={requests.fetchTopRated}/>
     <Row title='Action Movies' fetchURl={requests.fetchActionMovies}/>
     <Row title='Comedy Movies' fetchURl={requests.fetchComedyMovies}/>
     <Row title='horror Movies' fetchURl={requests.fetchHorrorMovies}/>
     <Row title='Romentic Movies' fetchURl={requests.fetchRomenticMovies}/>
     <Row title='Documenties' fetchURl={requests.fetchDocumentaries}/>

    </div>
  )
}

export default HomeScreen