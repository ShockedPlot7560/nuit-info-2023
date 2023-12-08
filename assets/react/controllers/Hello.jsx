// assets/react/controllers/Hello.jsx
import React from 'react';
import {Button} from "primereact/button";

export default function (props) {
    return (
        <div className="home-container bg-home">
            <h1>Bienvenue !</h1>
            <span>Découvrez la vérité à propos du réchauffement climatique en commençant votre aventure au sein d'un escape game ludique et éducatif.</span>
            <Button label="Commencer" text raised />
        </div>
    )
}