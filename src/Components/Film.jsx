import React from 'react';
const Film = ({obj}) => {
return( 

    <>
        <li>Title: {obj.Title}</li>
        <li>Genre: {obj.Genre}</li>
        <li>Rating: {obj.Rated}</li>
        <li>Released: {obj.Released}</li>
        <li>Plot: {obj.Plot}</li>
    </>


 );
}
export default Film;