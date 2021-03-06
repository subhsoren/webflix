import React from 'react';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';
import requests from './requests';

function App() {
  return (
    <div className="app">
     <Navbar />
     <Banner/>


       <Row title = "WEBFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow
       />
        <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title = "Romanctic Movies" fetchUrl={requests.fetchRomanticMovies}/>
        <Row title = "Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  
   
  );
}

export default App;
