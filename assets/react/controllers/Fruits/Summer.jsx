import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Autunm from "./Autunm";
import "../../../styles/Fruits.css";
import i18n from "../../../utils/i18n";

function Summer(props) {
  const toastRef = useRef();
  const [season, setSeason] = useState("summer.svg");
  const [pSummer] = useState([
    "pumpkin",
    "strawberry",
    "tomato",
    "pepper",
    "olive",
  ]);
  const [rSummer] = useState(["tomato", "strawberry", "pepper"]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [nbButtons, setnbButtons] = useState(0);
  const [nbRightAns, setnbRightAns] = useState(0);
  let [isRoundFinished, setIsRoundFinished] = useState(false);

    window.addEventListener(('keydown'), (e) => {
        if (e.key === 'Enter' && document.getElementById("dialog")) {
            document.getElementById("dialog").remove();
        }
    });

  const onButtonClick = (fruitOrVegetable) => {
    if (rSummer.includes(fruitOrVegetable)) {
      toastRef.current.show({
        severity: "success",
          summary: i18n.t("market.toast.valid"),
          detail: i18n.t("market.toast.success"),
      });
      const right = nbRightAns;
      setnbRightAns(right + 1);
      if (nbRightAns === 2) {
        setIsRoundFinished(true);
      }
    } else {
      toastRef.current.show({
        severity: "error",
          summary: i18n.t("market.toast.invalid"),
          detail: i18n.t("market.toast.error"),
      });
    }
    setDisabledButtons((prevButtons) => [...prevButtons, fruitOrVegetable]);
    const button = nbButtons;
    setnbButtons(button + 1);
    if (nbButtons === 4) {
      isRoundFinished = true;
    }
  };

  const isButtonDisabled = (fruitOrVegetable) => {
    return disabledButtons.includes(fruitOrVegetable);
  };

  if (isRoundFinished) {
    return <Autunm />;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
        <div style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: "50"
        }} id={"dialog"}>
            <div className={"p-3"} style={{width: "50%", backgroundColor: "whitesmoke", textAlign: "center", border: "1px solid gray", borderRadius: "0.5rem"}}>
                <p>{i18n.t('market.dealers.summer')}</p>
                <p><small className={"animate-pulse"}>{i18n.t('narration.enter_continue')}</small></p>
            </div>
        </div>
      <div className="h-fit w-fit">
        <Toast ref={toastRef} />
        <img
          className="svg"
          src={`/img/etals/${season}`}
          alt={`Etal ${season}`}
        />
      </div>

      <div className="flex mt-4">
        <Button
          label={i18n.t("market.fruit.citrouille")}
          className="mr-2"
          onClick={() => onButtonClick("pumpkin")}
          disabled={isButtonDisabled("pumpkin")}
        >
          <img
            alt="Citrouille"
            src="/img/vegetables/pumpkin.svg"
            className="h-2rem img"
          ></img>
        </Button>
        <Button
          label={i18n.t("market.fruit.fraise")}
          className="mr-2"
          onClick={() => onButtonClick("strawberry")}
          disabled={isButtonDisabled("strawberry")}
        >
          <img
            alt="Fraise"
            src="/img/fruits/strawberry.svg"
            className="h-2rem img"
          ></img>
        </Button>
        <Button
          label={i18n.t("market.fruit.tomate")}
          className="mr-2"
          onClick={() => onButtonClick("tomato")}
          disabled={isButtonDisabled("tomato")}
        >
          <img
            alt="Tomate"
            src="/img/vegetables/tomato.svg"
            className="h-2rem img"
          ></img>
        </Button>
        <Button
          label={i18n.t("market.fruit.poivron")}
          className="mr-2"
          onClick={() => onButtonClick("pepper")}
          disabled={isButtonDisabled("pepper")}
        >
          <img
            alt="Poivron"
            src="/img/vegetables/pepper.svg"
            className="h-2rem img"
          ></img>
        </Button>
        <Button
          label={i18n.t("market.fruit.olive")}
          className="mr-2"
          onClick={() => onButtonClick("olive")}
          disabled={isButtonDisabled("olive")}
        >
          <img
            alt="Pomme de terre"
            src="/img/vegetables/olive.svg"
            className="h-2rem img"
          ></img>
        </Button>
      </div>
    </div>
  );
}

export default Summer;