import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Summer from "./Summer"
import "../../../styles/Fruits.css";
import i18n from "../../../utils/i18n";

function Fruits(props) {
  const toastRef = useRef();
  const [season, setSeason] = useState("spring.svg");
  const [pSpring] = useState([
    "eggplant",
    "pear",
    "artichoke",
    "tomato",
    "carrot",
    "potato",
  ]);
  const [rSpring] = useState(["pear", "carrot", "potato"]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [nbButtons, setnbButtons] = useState(0);
  const [nbRightAns, setnbRightAns] = useState(0);
  const [isRoundFinished, setIsRoundFinished] = useState(false);

  const onButtonClick = (fruitOrVegetable) => {
    if (rSpring.includes(fruitOrVegetable)) {
      toastRef.current.show({
        severity: "success",
        summary: i18n.t("toast.good_answer"),
        detail: i18n.t("toast.good_more"),
      });
      const right = nbRightAns;
      setnbRightAns(right + 1)
      if (nbRightAns === 2) {
        setIsRoundFinished(true)
      }
    } else {
      toastRef.current.show({
        severity: "error",
        summary: i18n.t("toast.bad_answer"),
        detail: i18n.t("toast.bad_more"),
      });
    }
    setDisabledButtons((prevButtons) => [...prevButtons, fruitOrVegetable]);
    const button = nbButtons;
    setnbButtons(button + 1);
    if (nbButtons === 5) {
      setIsRoundFinished(true)
    }
  };

  const isButtonDisabled = (fruitOrVegetable) => {
    return disabledButtons.includes(fruitOrVegetable);
  };

  if (isRoundFinished) {
    return <Summer />;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
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
          label="Aubergine"
          className="mr-2 w-48"
          onClick={() => onButtonClick("eggplant")}
          disabled={isButtonDisabled("eggplant")}
        >
          <img
            alt="Aubergine"
            src="/img/vegetables/eggplant.svg"
            className="h-2rem img"
          ></img>
        </Button>
        <Button
          label="Poire"
          className="mr-2 w-48"
          onClick={() => onButtonClick("pear")}
          disabled={isButtonDisabled("pear")}
        >
          <img
            alt="Poire"
            src="/img/fruits/pear.svg"
            className="h-2rem img"
          ></img>
        </Button>
        <Button
          label="Artichaut"
          className="mr-2 w-48"
          onClick={() => onButtonClick("artichoke")}
          disabled={isButtonDisabled("artichoke")}
        >
          <img
            alt="Artichaut"
            src="/img/vegetables/artichoke.svg"
            className="h-2rem img"
          ></img>
        </Button>
        <Button
          label="Tomate"
          className="mr-2 w-48"
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
          label="Carotte"
          className="mr-2 w-48"
          onClick={() => onButtonClick("carrot")}
          disabled={isButtonDisabled("carrot")}
        >
          <img
            alt="Carotte"
            src="/img/vegetables/carrot.svg"
            className="h-2rem img"
          ></img>
        </Button>
        <Button
          label="Pomme de terre"
          className="mr-2 w-48"
          onClick={() => onButtonClick("potato")}
          disabled={isButtonDisabled("potato")}
        >
          <img
            alt="Pomme de terre"
            src="/img/vegetables/potato.svg"
            className="h-2rem img"
          ></img>
        </Button>
      </div>
    </div>
  );
}

export default Fruits;