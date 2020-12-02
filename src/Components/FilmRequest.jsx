import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Film from "./Film";

const FilmRequest = ({film}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [films, setFilms] = useState({movie: {}});

    useEffect(() => {
        // setTimeout(() => {
            axios.get("http://www.omdbapi.com/?apikey=eefde6d1&t=" + film,
            )
                // .then(res => res)
                .then((result) => {
                    setLoaded(true);
                    console.log(result.data);
                    let info = result.data;
                    setFilms(info);
                    console.log(info);
                }, (error) => {
                    setLoaded(true);
                    setError(error);
                })
        // }, 4000)
    }, [film])

       if (error) {
        return <p>Oops.. something has happened... {error.message}</p>
    } else if (!isLoaded) {
        return <p> Please wait.... we are loading your information</p>
    } else {
        return (
            <>
                <p> Film found in database: </p>
                
                {
                    <Film key={films.Title} obj={films} />
                }
            </>
        )
    }
}
export default FilmRequest;