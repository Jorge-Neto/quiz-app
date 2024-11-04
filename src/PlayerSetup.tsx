import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

const PlayerSetup: React.FC<{ onStart: (players: string[]) => void }> = ({
  onStart,
}) => {
  const [playerNames, setPlayerNames] = useState(["", ""]);
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);

  const handleNameChange = (index: number, name: string) => {
    const updatedNames = [...playerNames];
    updatedNames[index] = name;
    setPlayerNames(updatedNames);
  };

  const handleStart = () => {
    const validNames = playerNames.filter((name) => name.trim() !== "");
    if (validNames.length >= 2) {
      onStart(validNames);
    }
  };

  return (
    <div>
      <h1>Configuração do Jogo</h1>
      <label>
        Número de Jogadores:
        <Select
          style={{
            marginBottom: "8px",
            marginLeft: "8px",
            backgroundColor: "#f3f5eb",
          }}
          value={numberOfPlayers}
          onChange={(e) => setNumberOfPlayers(Number(e.target.value))}
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </label>
      {Array.from({ length: numberOfPlayers }).map((_, index) => (
        <div key={index}>
          <TextField
            type="text"
            placeholder={`Nome do Jogador ${index + 1}`}
            value={playerNames[index]}
            onChange={(e) => handleNameChange(index, e.target.value)}
            style={{ backgroundColor: "#f3f5eb", marginBottom: "8px" }}
          />
        </div>
      ))}
      <Button variant="contained" onClick={handleStart}>
        Iniciar Quiz
      </Button>
    </div>
  );
};

export default PlayerSetup;
