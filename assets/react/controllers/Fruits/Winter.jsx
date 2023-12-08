import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import "../../../styles/Fruits.css";
import i18n from "../../../utils/i18n";

function Winter(props) {
  const toastRef = useRef();
  const [season, setSeason] = useState("winter.svg");
  const [pSpring] = useState([
    "watermelon",
    "lemon",
    "radish",
    "olive",
    "pepper",
    "peach",
  ]);
  const [rSpring] = useState(["olive", "lemon", "radish"]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [nbButtons, setnbButtons] = useState(0);
  const [nbRightAns, setnbRightAns] = useState(0);
  const [isRoundFinished, setIsRoundFinished] = useState(false);


    window.addEventListener(('keydown'), (e) => {
        if (e.key === 'Enter' && document.getElementById("dialog")) {
            document.getElementById("dialog").remove();
        }
    });
  const onButtonClick = (fruitOrVegetable) => {
    if (rSpring.includes(fruitOrVegetable)) {
      toastRef.current.show({
        severity: "success",
          summary: i18n.t("market.toast.valid"),
          detail: i18n.t("market.toast.success"),
      });
      const right = nbRightAns;
      setnbRightAns(right + 1);
      if (nbRightAns === 2) {
        setIsRoundFinished(true);
        document.location.href = "/house";
      }
    } else {
      toastRef.current.show({
        severity: "error",
          summary: i18n.t("market.toast.invalid"),
          detail: i18n.t("market.toast.error"),
      });
    }
    setDisabledButtons((prevButtons) => [...prevButtons, fruitOrVegetable]);
    setnbButtons((prevNbButton) => prevNbButton++);
    const button = nbButtons;
    setnbButtons(button + 1);
    if (nbButtons === 5) {
      setIsRoundFinished(true)
    }
  };

  const isButtonDisabled = (fruitOrVegetable) => {
    return disabledButtons.includes(fruitOrVegetable);
  };

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
                <p>{i18n.t('market.dealers.winter')}</p>
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
          label={i18n.t("market.fruit.pasteque")}
          className="mr-2"
          onClick={() => onButtonClick("watermelon")}
          disabled={isButtonDisabled("watermelon")}
        >
          <img
            alt="Pastèque"
            src="/img/fruits/watermelon.svg"
            className="h-2rem img"
          ></img>
        </Button>
        <Button
          label={i18n.t("market.fruit.citron")}
          className="mr-2"
          onClick={() => onButtonClick("lemon")}
          disabled={isButtonDisabled("lemon")}
        >
          <img
            alt="Citron"
            src="/img/fruits/lemon.svg"
            className="h-2rem img"
          ></img>
        </Button>
        <Button
          label={i18n.t("market.fruit.radis")}
          className="mr-2"
          onClick={() => onButtonClick("radish")}
          disabled={isButtonDisabled("radish")}
        >
          <img
            alt="Radis"
            src="/img/vegetables/radish.svg"
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
            alt="Olive"
            src="/img/vegetables/olive.svg"
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
          label={i18n.t("market.fruit.onion")}
          className="mr-2"
          onClick={() => onButtonClick("onion")}
          disabled={isButtonDisabled("onion")}
        >
          <img
            alt="Onion"
            src="/img/vegetables/onion.svg"
            className="h-2rem img"
          ></img>
        </Button>
      </div>
      
    </div>
  );
}

export default Winter;
