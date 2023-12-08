// assets/react/controllers/Hello.jsx
import React from 'react';
import {Button} from "primereact/button";
import i18n from "../../utils/i18n";

export default function (props) {
    return (
        <div className="home-container bg-home">
            <h1>{i18n.t("home.welcome")}</h1>
            <span>{i18n.t("home.subtitle")}</span>
            <Button label={i18n.t("home.start")} text raised />
        </div>
    )
}