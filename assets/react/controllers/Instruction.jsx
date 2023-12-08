// assets/react/controllers/Hello.jsx
import React from 'react';
import i18n from '../../utils/i18n';

export default function (props) {
    return <div
        style={{position: "absolute", top: 0, left: 0, right: 0, display: "flex", color: "white", fontSize: "2em", justifyContent: "center", alignItems: "center", height: "5rem"}}
    >
        <p style={{backgroundColor: "rgba(0,0,0,0.2)", padding: "0.5rem 1.5rem", borderRadius: "1rem", width: "fit-content"}}>{i18n.t(props.instructions)}</p>
    </div>;
}