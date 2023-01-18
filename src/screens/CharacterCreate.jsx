import { useState } from "react";
import { createCharacter } from "../services/characters.js";

export default function CharacterCreate() {
  const [character, setCharacter] = useState({
    charId: 0,
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCharacter(character);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);

    setCharacter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  return (
    <div>
      <h2>Create GOT Character</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Please enter your CharID"
          name="charId"
          value={character.charId}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please enter your First Name"
          name="firstName"
          value={character.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please enter your Last Name"
          name="lastName"
          value={character.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please enter your Full Name"
          name="fullName"
          value={character.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please enter your Title"
          name="title"
          value={character.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please enter your Family"
          name="family"
          value={character.family}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please enter Image Name"
          name="image"
          value={character.image}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please enter the Image URL"
          name="imageUrl"
          value={character.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">Create New GOT Character!!</button>
      </form>
    </div>
  );
}
