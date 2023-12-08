// assets/react/controllers/Hello.jsx
import React from 'react';
import {Button} from "primereact/button";
import i18n from "../../utils/i18n";

export default function (props) {
    return (
        <div>
            <div className="home-container bg-home">
                <h1>{i18n.t("home.welcome")}</h1>
                <span>{i18n.t("home.subtitle")}</span>
                <Button label={i18n.t("home.start")} text raised onClick={() => {
                    document.location.href = "/intro";
                }} />
            </div>
            <img style={{position: "absolute", bottom: 0, left: 0}} src={"/img/homepage/plant.svg"} />
            <img style={{position: "absolute", top: 0, right: 0, transform: "rotate(180deg)"}} src={"/img/homepage/plant.svg"} />
        </div>
    )
}