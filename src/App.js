import React, { useState, useEffect } from 'react';
import './App.css'

export default function Characters() {
    const [characters, setCharacters] = useState([])
    const [character, setCharacter] = useState({})
    let [modalToggle, setModalToggle] = useState(false)


useEffect(() => {
    apiCall()
}, [])

function apiCall() {
    fetch("https://project-2-api-production.up.railway.app/characters")
    .then((res) => res.json())
    .then((data) => setCharacters(data))
}

function display() {
    setModalToggle(prev => !prev)
}

function handleClick(charInfo) {
    setCharacter(charInfo)
    display()
}

return (
    <div className="Body">
      <div className="characters-list">
        {characters.slice(0, 36).map((character, index) => (
          <div className="character-container" onClick={() => handleClick(character)} key={index}>
            <img className="image" src={character.imageUrl} alt={character.firstName}/>
          </div>
        ))}
      </div>
      {modalToggle ?
        <div className="modal">
          <div className="modal-content">
            <p>Name - {character.fullName}</p>
            <p>Title - {character.title}</p>
            <p>Family - {character.family}</p>
            <button onClick={display}>Return</button>
          </div>
        </div>
        :
        null
      }
    </div>
);
}

