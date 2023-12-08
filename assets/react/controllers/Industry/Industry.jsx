// assets/react/controllers/Hello.jsx
import React, {useEffect, useState} from 'react';
import arrayShuffle from 'array-shuffle';
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";

const data = {
    apples: {
        value: 0.396,
        text: ""
    },
    shoes: {
        value: 15,
        text: ""
    },
    tennis_racket: {
        value: 23,
        text: ""
    },
    jean: {
        value: 25,
        text: "Lorsque les textiles sont synthétiques, c’est l’extraction de sa matière première (le pétrole) qui est de loin la plus contributrice du poids CO2. Lorsqu’il s’agit de matières naturelles (laine, coton...) c’est leur production."
    },
    ebook_reader: {
        value: 44,
        text: ""
    },
    garden_furniture: {
        value: 224,
        text: ""
    },
    fridge: {
        value: 343,
        text: "Les appareils de froid étant la première source de consommation électrique domestique (hormis bien sûr quand on se chauffe à l’électrique), la phase d’utilisation pèse beaucoup plus lourd pour un réfrigérateur !"
    },
    tv: {
        value: 374,
        text: "C’est vraiment la phase de production des matières premières et de fabrication des composants qui pèse le plus sur la planète. Plus les composants sont complexes, plus ils exigent des métaux rares. Les fabricants sont en train d'épuiser ces minerais précieux à un rythme inégalé."
    },
}

export default function (props) {
    const [board, setBoard] = useState({})
    const [step, setStep] = useState(8)
    const [subStep, setSubStep] = useState(0)
    const [newCouple, setNewCouple] = useState([])
    const [valueCorrection, setValueCorrection] = useState(0)
    const [textCorrection, setTextCorrection] = useState("")
    const [displayCorrection, setDisplayCorrection] = useState(false)
    const [isRight, setIsRight] = useState(false)
    const [isGameEnded, setIsGameEnded] = useState(false)

    useEffect(() => {
        const itemsList = Object.keys(data)
        const shuffledData = arrayShuffle(itemsList)

        let newBoard = {
            8: [[shuffledData[0], shuffledData[1]], [shuffledData[2], shuffledData[3]], [shuffledData[4], shuffledData[5]], [shuffledData[6], shuffledData[7]]],
            4: [],
            2: [],
            1: []
        }

        setBoard(newBoard)
    }, [])

    const updateBoard = (selected) => {
        const otherAnswer = board[step][subStep][0] === selected ? board[step][subStep][1] : board[step][subStep][0]
        let correction = data[selected].value < data[otherAnswer].value ? selected : otherAnswer

        setIsRight(correction !== selected)
        setValueCorrection(data[correction].value)
        setTextCorrection(data[correction].text)
        setDisplayCorrection(true)

        let newBoard = {...board}

        if(step > 1) {
            let newNewCouple = [...newCouple]
            newNewCouple.push(selected)

            if (newNewCouple.length === 2) {
                newBoard[step/2].push(newNewCouple)
                setNewCouple([])
            } else {
                setNewCouple(newNewCouple)
            }
        }

        setBoard(newBoard)

        if (subStep + 1 < step/2) {
            setSubStep(subStep + 1)
        } else {
            if(step - 1 > 1) {
                setSubStep(0)

                setStep(step / 2)
            } else {
                setIsGameEnded(true)
            }

        }

    }

    return (
        !isGameEnded ?
            <div className="home-container bg-home gap-5">
                <span id="industry-question" className="text-4xl font-bold text-white">Laquelle de ces deux propositions émet le plus de CO2 ?</span>
                <div className="flex flex-row gap-5">
                    {
                        Object.keys(board).length > 0 && board[step][subStep].map((boardSubStep, index) => {
                            return (
                                <Button key={index} label={boardSubStep} text raised onClick={() => updateBoard(boardSubStep)}/>
                            )
                        })
                    }
                </div>

                <Dialog header="En savoir plus" visible={displayCorrection} style={{ width: '35vw' }} onHide={() => setDisplayCorrection(false)} draggable={false}>
                    <p className="m-0 text-center flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <span className={isRight ? "font-bold text-green-500 text-lg" : "font-bold text-red-500 text-lg" }>{isRight ? "Bonne réponse !" : "Mauvaise réponse..."}</span>
                            <span>{`Quantité de CO2 rejetée par la proposition la moins émettrice : ${valueCorrection} kg`}</span>
                        </div>
                        { textCorrection !== "" &&
                            <div className="flex flex-col gap-2">
                                <b>A propos de la seconde proposition :</b>
                                {textCorrection}
                            </div>
                        }
                    </p>
                </Dialog>
            </div>
        :
            <div>

            </div>
    )
}