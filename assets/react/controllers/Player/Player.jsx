import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Card } from "primereact/card";
import { ColorPicker } from "primereact/colorpicker";
import "../../../styles/Player.css";

const avatars = Array.from({ length: 6 }, (_, i) => `${i + 1}.svg`);

function Player(props) {
  const [pseudo, setPseudo] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [hairColor, setHairColor] = useState("#534741"); // Couleur par défaut
  const toastRef = useRef();

  const onButtonClick = () => {
    if (pseudo === "") {
      toastRef.current.show({
        severity: "error",
        summary: "Erreur",
        detail: "Merci de saisir un pseudo",
      });
    }
  };

  const onAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  return (
    <div className="player-form">
      <Toast ref={toastRef} />
      <span className="p-float-label">
        <InputText
          id="pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
        <label htmlFor="pseudo">Pseudo</label>
      </span>
      <br />

      <div className="avatars-grid">
        {avatars.map((avatar) => (
          <Card
            key={avatar}
            className={`avatar-card ${selectedAvatar === avatar ? "selected" : ""}`}
            onClick={() => onAvatarClick(avatar)}
          >
            <img
              src={`/img/avatars/${avatar}`}
              alt={`Avatar ${avatar.split(".")[0]}`}
              style={{ filter: `fill(${hairColor})` }}
            />
          </Card>
        ))}
      </div>

      <ColorPicker
        value={hairColor}
        onChange={(e) => setHairColor(e.value)}
        style={{ marginTop: "16px" }}
      />

      <Button
        className="button"
        type="button"
        label="Valider"
        onClick={onButtonClick}
      />
    </div>
  );
}

export default Player;
