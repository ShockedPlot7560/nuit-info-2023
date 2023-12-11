// assets/react/controllers/Hello.jsx
import React from 'react';
import {Button} from "primereact/button";
import i18n from "../../utils/i18n";

export default function (props) {
    return (
        <div>
            <div className="home-container bg-home">
                <h1 className="text-5xl font-black text-white" style={{textShadow: "3px 3px 7px rgba(0, 0, 0, 0.8)"}}>{i18n.t("home.welcome")}</h1>
                <span className="text-xl text-white" style={{textShadow: "3px 3px 7px rgba(0, 0, 0, 0.8)", maxWidth: "55vw", textAlign: "center"}}>{i18n.t("home.subtitle")}</span>
                <Button style={{zIndex: 11}} className="mt-5" size="large" label={i18n.t("home.start")} text raised onClick={() => {
                    document.location.href = "/intro";
                }} />
            </div>
            <img style={{position: "absolute", bottom: 0, left: 0, maxWidth: "100vw", maxHeight: "100vh"}} src={"/img/homepage/plant.svg"} />
            <img style={{position: "absolute", top: 0, right: 0, transform: "rotate(180deg)", maxWidth: "100vw", maxHeight: "100vh"}} src={"/img/homepage/plant.svg"} />
        </div>
    )
}