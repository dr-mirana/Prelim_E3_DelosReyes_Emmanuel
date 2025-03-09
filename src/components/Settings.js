import React, { useState } from "react";

function Settings({ darkMode, toggleDarkMode, updateUserName }) {
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSaveName = () => {
    updateUserName(newName);
    setNewName("");
  };

  return (
    <div className="form-container">
      <div>
        <label>
          Name:
          <input
            type="text"
            value={newName}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </label>
        <button onClick={handleSaveName}>Save Name</button>
      </div>

      <div>
        <label>Dark Mode: </label>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Settings;
