// assets/react/controllers/Hello.jsx
import React, {useEffect, useState} from 'react';
import arrayShuffle from 'array-shuffle';
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import i18n from '../../../utils/i18n';
import {Card} from "primereact/card";
import {Chart} from "primereact/chart";

const data = {
    apples: {
        value: 0.396, text: ""
    }, shoes: {
        value: 15, text: ""
    }, tennis_racket: {
        value: 23, text: ""
    }, jean: {
        value: 25, text: i18n.t("industry.goods.jean")
    }, ebook_reader: {
        value: 44, text: ""
    }, garden_furniture: {
        value: 224, text: ""
    }, fridge: {
        value: 343, text: i18n.t("industry.goods.fridge")
    }, tv: {
        value: 374, text: i18n.t("industry.goods.tv")
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
    const [chartData, setChartData] = useState({})

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

        const documentStyle = getComputedStyle(document.documentElement);
        const correction = {
            labels: Object.keys(data).reverse().map(item => i18n.t(`industry.names.${item}`)), datasets: [{
                label: i18n.t("industry.results.2"),
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: Object.keys(data).reverse().map(item => data[item].value)
            },]
        };

        setChartData(correction)
    }, [])

    const updateBoard = (selected) => {
        const otherAnswer = board[step][subStep][0] === selected ? board[step][subStep][1] : board[step][subStep][0]
        let correction = data[selected].value < data[otherAnswer].value ? selected : otherAnswer

        setIsRight(correction !== selected)
        setValueCorrection(data[correction].value)
        setTextCorrection(data[correction].text)
        setDisplayCorrection(true)

        let newBoard = {...board}

        if (step > 1) {
            let newNewCouple = [...newCouple]
            newNewCouple.push(selected)

            if (newNewCouple.length === 2) {
                newBoard[step / 2].push(newNewCouple)
                setNewCouple([])
            } else {
                setNewCouple(newNewCouple)
            }
        }

        setBoard(newBoard)

        if (subStep + 1 < step / 2) {
            setSubStep(subStep + 1)
        } else {
            if (step - 1 > 1) {
                setSubStep(0)

                setStep(step / 2)
            } else {
                setIsGameEnded(true)
            }

        }
    }

    return (<>
        {!isGameEnded ? <div className="home-container bg-home gap-5">
                    <span id="industry-question"
                          className="text-4xl font-bold text-white">{i18n.t("industry.question")}</span>
            <div className="flex flex-row gap-5">
                {Object.keys(board).length > 0 && board[step][subStep].map((boardSubStep, index) => {
                    return (<Button key={index} label={i18n.t(`industry.names.${boardSubStep}`)} text raised
                                    onClick={() => updateBoard(boardSubStep)}/>)
                })}
            </div>
        </div> : !displayCorrection && <div className="home-container bg-home gap-5">
            <Card title={i18n.t("industry.results.1")} style={{width: '50vw'}}>
                <Chart type="bar" data={chartData} options={{
                    indexAxis: "y", maintainAspectRatio: false, aspectRatio: 0.8, scales: {
                        x: {
                            grid: {
                                display: false,
                            }, border: {
                                display: false,
                            }, ticks: {
                                display: false,
                            },
                        }, y: {
                            grid: {
                                display: false,
                            }, border: {
                                display: false,
                            },
                        },
                    },
                }}/>

                <Button style={{alignSelf: 'center'}} label={i18n.t("industry.continue")}
                        onClick={() => window.location.replace("/player")}/>
            </Card>
        </div>}

        <Dialog header={i18n.t("industry.modal.title")} visible={displayCorrection} style={{width: '35vw'}}
                onHide={() => setDisplayCorrection(false)} draggable={false}>
            <p className="m-0 text-center flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                        <span
                            className={isRight ? "font-bold text-green-500 text-lg" : "font-bold text-red-500 text-lg"}>{isRight ? i18n.t("industry.good_answer") : i18n.t("industry.bad_answer")}</span>
                    <span>{`${i18n.t("industry.modal.1")} ${valueCorrection} kg`}</span>
                </div>
                {textCorrection !== "" && <div className="flex flex-col gap-2">
                    <b>{i18n.t("industry.modal.2")}</b>
                    {textCorrection}
                </div>}
            </p>
        </Dialog>
    </>)
}