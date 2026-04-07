import React, { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");

  const [city, setCity] = useState("Delhi"); 

  const [gender, setGender] = useState("");

  return (
    <div>
      <h2>Radio Button Example</h2>
      {}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

     <h3>Select Gender:</h3>
      {}
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={gender === "Male"}
        onChange={(e) => setGender(e.target.value)}
      /> Male

      <br />

      <input
        type="radio"
        name="gender"
        value="Female"
        checked={gender === "Female"}
        onChange={(e) => setGender(e.target.value)}
      /> Female

      <br /><br />

      
      {}
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="Delhi">Delhi</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Noida">Noida</option>
        <option value="Ghaziabad">Ghaziabad</option>
      </select>

      <h3>Output:</h3>
      <p>Name: {name}</p>
      <p>City: {city}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}

export default FormExample;