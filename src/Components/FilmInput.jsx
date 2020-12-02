import React from 'react';

const FilmInput = ({film, updateState}) => {

    return (
        <>
            <form>
                <label>Enter a film title: </label>
                <input
                    type="text"
                    name="film"
                    value={film}
                    onChange={updateState}
                />
            </form>
        </>
    )
}

export default FilmInput;