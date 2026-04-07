import React, { useState } from "react";

function CheckboxExample() {
  const [skills, setSkills] = useState([]);

  const handleCheckbox = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      // add value
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h2>Select your own Skills</h2>

      <label>
        <input
          type="checkbox"
          value="HTML"
          onChange={handleCheckbox}
        />
        HTML
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          value="CSS"
          onChange={handleCheckbox}
        />
        CSS
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          value="JavaScript"
          onChange={handleCheckbox}
        />
        JavaScript
      </label>
      <br />

      <h3>Selected Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxExample;