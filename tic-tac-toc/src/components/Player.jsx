import { useState } from "react";
export default function Player({ initialName, symbol }) {
    
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.currentTarget.value);
  }

  //   let btnCaption = "Edit";
  let editableName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editableName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{editableName}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
