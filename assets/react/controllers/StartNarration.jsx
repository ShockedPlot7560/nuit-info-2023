import { TypeAnimation } from 'react-type-animation';
import React, {useState} from 'react';

function printContinue(bool) {
    if (bool) {
        document.getElementById("continue").style.display = "block";
    } else {
        document.getElementById("continue").style.display = "none";
    }
}

async function finishTyping() {
    printContinue(true);
    await waitEnter();
    printContinue(false);
}

async function waitEnter() {
    let enter = false;
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            enter = true;
        }
    });
    await new Promise(async (resolve) => {
        while (!enter) {
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        resolve();
    });
}

export default function(props) {
    let sequence = [];
    for (let i = 0; i < props.sequence.length; i++) {
        sequence.push(props.sequence[i]);
        sequence.push(5);
        sequence.push(finishTyping);
    }
    sequence.push(5);
    sequence.push("");
    sequence.push(() => {
        // fade out the 'start narration' div
        document.getElementById("start-narration").style.opacity = "0";
    })
    return (
        <div
            id={"start-narration"}
            className={"transition-opacity duration-1000"}
            style={{ display: 'flex', flexDirection: "column", position: 'absolute', width: "100%", height: "100%", zIndex: '100', justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(0,0,0,1)", color: "white" }}
        >
            <TypeAnimation
                sequence={sequence}
                wrapper="span"
                speed={20}
                style={{ fontSize: '2em' }}
                deletionSpeed={70}
                omitDeletionAnimation={false}
            />

            <p id={"continue"} style={{
                display: "none"
            }} className={"text-gray-600 animate-pulse"}>Appuyer sur entrée pour continuer</p>
        </div>
    );
};