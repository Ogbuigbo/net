import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav'
import Banner from '../Banner';
import requests from '../Request';
import Row from '../Row';

function HomeScreen() {

  return (
    <div className='homescreen'>
        {/* NavBar */}
        <Nav />
        
        {/* Banner */}
        <Banner />

        {/* Row */}
        <Row
        title = 'NETFLIX_ORIGINALS'
        fetchUrl = {requests.fetchNetflixOriginals}
        isLarge
         />
         <Row
        title = 'Trending_Now'
        fetchUrl = {requests.fetchTrending}
        
         />
         <Row
        title = 'Action Movies'
        fetchUrl = {requests.fetchActionMovies}
        
         />
         <Row
        title = 'Comedy Movies'
        fetchUrl = {requests.fetchComedyMovies}
         />

         <Row
        title = 'Horror Movies'
        fetchUrl = {requests.fetchHorrorMovies}
         />

        <Row
        title = 'Romance Movies'
        fetchUrl = {requests.fetchRomanceMovies}
         />

        <Row
        title = 'Documentaries'
        fetchUrl = {requests.fetchDocumentaries}
         />
        

    </div>
  )
}

export default HomeScreen