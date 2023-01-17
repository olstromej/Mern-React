import React, { useState, useEffect } from "react";
import { deleteCharacter } from "../services/characters.js";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [modalToggle, setModalToggle] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    apiCall();
  }, [toggle]);

  function apiCall() {
    fetch("https://project-2-api-production.up.railway.app/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }

  function display() {
    setModalToggle((prev) => !prev);
  }

  function handleClick(charInfo) {
    setCharacter(charInfo);
    display();
  }

  async function handleDelete(id) {
    await deleteCharacter(id);
    setToggle((prev) => !prev);
  }

  return (
    <>
      <div className="characters-list">
        {characters.map((character, index) => (
          <div
            className="character-container"
            onClick={() => handleClick(character)}
            key={index}
          >
            <img
              className="image"
              src={character.imageUrl}
              alt={character.firstName}
            />
          </div>
        ))}
      </div>
      {modalToggle ? (
        <div className="modal">
          <div className="modal-content">
            <p>Name - {character.fullName}</p>
            <p>Title - {character.title}</p>
            <p>Family - {character.family}</p>
            <button onClick={display}>Return</button>
            <button onClick={() => handleDelete(character._id)}>Delete!</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
