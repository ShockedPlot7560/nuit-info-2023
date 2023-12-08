import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import "../../../styles/Fruits.css";

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

  const onButtonClick = (fruitOrVegetable) => {
    if (rSpring.includes(fruitOrVegetable)) {
      toastRef.current.show({
        severity: "success",
        summary: "Valid",
        detail: `Bravo, c'est bien un aliment de saison`,
      });
      const right = nbRightAns;
      setnbRightAns(right + 1);
      if (nbRightAns === 2) {
        setIsRoundFinished(true);
      }
    } else {
      toastRef.current.show({
        severity: "error",
        summary: "Invalid",
        detail: `Non, ce n'est pas un alimenent de saison`,
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
          label="Pastèque"
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
          label="Citron"
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
          label="Radis"
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
          label="Olive"
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
          label="Poivron"
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
          label="Onion"
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
