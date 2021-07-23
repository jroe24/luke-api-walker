import React from 'react';

const People = ({showData}) => {   
    return(
        <div>
            <h1>{showData.name}</h1>
            <p>Height: {showData.height}</p>
            <p>Mass: {showData.mass} kg</p>
            <p>Skin Color: {showData.skin_color}</p>
            <p>Hair Color: {showData.hair_color}</p>
        </div>
    )
}

export default People;