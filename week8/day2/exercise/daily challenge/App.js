import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const handleVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div className="App">
      <h1>Vote Your Language!</h1>
      <div className="vote-container">
        {languages.map((language, index) => (
          <div key={index} className="vote-card">
            <span> {language.votes} </span>
            <span> {language.name} </span>
            <button onClick={() => handleVote(index)}>Click Here</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
