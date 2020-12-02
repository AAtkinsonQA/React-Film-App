import React, { useState} from 'react';
import FilmInput from "./FilmInput";
import FilmRequest from "./FilmRequest";
const Home = () => {
    const [filmTitle, setFilmTitle] = useState('');

    const handleFilmTitle = e => {
        setFilmTitle(e.target.value);
    }
    return( 
        <>
        <h1>Film Library</h1>
        <h2>Search for a film: </h2>
        <FilmInput film={filmTitle} updateState={handleFilmTitle} />
        <FilmRequest film={filmTitle} />
        </>
    );
}
export default Home;