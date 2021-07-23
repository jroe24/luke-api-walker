import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import axios from 'axios';
import People from './components/People';
import Planets from './components/Planets';
import Search from './components/Search';

function App() {
  
  const [showData, setShowData] = useState('');
  
  const handleClick = (selected, number) => {
    axios.get(`http://swapi.dev/api/${selected}/${number}`)
      .then(response => {
        setShowData(response.data);
        navigate(`/${selected}/${number}`);
      })
  }

  return (
    <div className="App">
      <Search handleClick={handleClick} />
      <Router>
        <People path="/people/:number" showData={showData} />
        <Planets path="/planets/:number" showData={showData} />
      </Router>
    </div>
  );
}

export default App;