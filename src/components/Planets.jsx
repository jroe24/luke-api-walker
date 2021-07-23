import React from 'react';

const Planets = ({showData}) => {    
    return(
        <div>
            <h1>{showData.name}</h1>
            <p>Climate: {showData.climate} </p>
            <p>Terrain: {ShowData.terrain}</p>
            <p>Surface Water: {ShowData.surface_water}</p>
            <p>Population: {ShowData.population}</p>
        </div>
    )
}

export default Planets;