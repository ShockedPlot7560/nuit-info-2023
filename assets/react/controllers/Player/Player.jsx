import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Card } from "primereact/card";
import { ColorPicker } from "primereact/colorpicker";
import "../../../styles/Player.css";
import Cookies from 'js-cookie';
import i18n from '../../../utils/i18n';

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
    Cookies.set('avatar', avatar);
    document.location.href = "/fruits";
  };

  const onPseudoChange = (e) => {
    setPseudo(e.target.value);
    Cookies.set('pseudo', e.target.value);
  }

  return (
    <div className="player-form">
        <div id={"playerName-container"} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "rgba(0,0,0,1)",
            gap: "2rem"
        }}>
            <span className="p-float-label">
                <InputText
                    id="pseudo"
                    value={pseudo}
                    onChange={onPseudoChange}
                />
                <label htmlFor="pseudo">{i18n.t("player.pseudo")}</label>
            </span>
            <Button
                className="button"
                type="button"
                label={i18n.t("player.next")}
                onClick={() => {
                    document.getElementById("playerName-container").style.display = "none";
                    document.getElementById("playerAvatar-container").style.display = "flex";
                }}
            />
        </div>
        <div id={"playerAvatar-container"} style={{
            display: "none",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            overflow: "auto",
            backgroundColor: "rgba(0,0,0,1)"
        }}>
            <h3 style={{color:"white"}}>{i18n.t("player.select_avatar")}</h3>
            <div className="avatars-grid" style={{width: "50%", height: "50%"}}>
                {avatars.map((avatar) => (
                    <Card
                        key={avatar}
                        className={`avatar-card ${selectedAvatar === avatar ? "selected" : ""}`}
                        onClick={() => onAvatarClick(avatar)}
                        style={{width: "30%"}}
                    >
                        <img
                            src={`/img/avatars/${avatar}`}
                            alt={`Avatar ${avatar.split(".")[0]}`}
                            style={{ filter: `fill(${hairColor})` }}
                        />
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Player;