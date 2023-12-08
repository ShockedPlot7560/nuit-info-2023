import React, {useEffect, useState} from "react";
import FlagIcon from "./FlagIcon";
import i18n from "../../utils/i18n";
import Cookies from 'js-cookie';

const languages = i18n.languages;
const LANGUAGE_SELECTOR_ID = "language-selector";

export default function PlayerAvatar() {
    const avatar = Cookies.get('avatar');
    const name = Cookies.get('pseudo');
    
    return (
        <div style={{zIndex: 110, position: "absolute", top: 0, right: 0, margin: "1rem"}}>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(0,0,0,0.6)", borderRadius: "0.5rem", color: "white"}}>
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