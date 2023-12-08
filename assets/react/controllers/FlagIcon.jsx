import React from "react";

export default function FlagIcon({countryCode}) {
    console.log(countryCode)
    return (
        <span className={`fi fi-${countryCode}`}/>
    )
}