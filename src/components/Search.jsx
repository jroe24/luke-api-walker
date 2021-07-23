import React, { useState } from 'react';

const Search = (props) => {
    const [selected, setSelected] = useState();
    
    const handleSelect = (event) => {
        setSelected(event.target.value.toLowerCase())
    }

    const [number, setNumber] = useState();
    
    const handleNumber = (e) => {
        setNumber(e.target.value)
    }

    return(
        <div>
            <label>Search for: </label>
            <select id="select" name="select" onChange={handleSelect}>
                <option>Planets</option>
                <option>People</option> 
            </select>
            <label>ID: </label>
            <input type="number" value={number} onChange={handleNumber}></input>
            <button onClick={() => props.handleClick(selected, number)}>Search</button>
        </div>
    );
};

export default Search;