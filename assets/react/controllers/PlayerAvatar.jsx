import React, {useEffect, useState} from "react";
import FlagIcon from "./FlagIcon";
import i18n from "../../utils/i18n";
import Cookies from 'js-cookie';

const languages = i18n.languages;
const LANGUAGE_SELECTOR_ID = "language-selector";

export default function PlayerAvatar() {
    let avatar = Cookies.get('avatar');
    const name = Cookies.get('pseudo');
    const superSayen = Cookies.get('superSayen', false);
    if (superSayen == true){
        avatar = "7.svg";
    }

    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    
    return (
        <div style={{zIndex: 110, position: "absolute", top: 0, right: 0, margin: "1rem"}}>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "0.5rem",
                color: "white",
                backgroundColor: superSayen ? "" : "rgba(0,0,0,0.6)",
            }} className={`${superSayen ? "rainbow" : ""}`}>
                <img
                    style={{
                        width: "5rem",
                        marginBottom: "-1.5rem",
                    }}
                    src={`/img/avatars/${avatar}`}
                    alt={"User avatar"}
                />
                <p>{name}</p>
            </div>
        </div>
    )
}