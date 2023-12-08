import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Autunm from "./Autunm";
import "../../../styles/Fruits.css";

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
  const [isRoundFinished, setIsRoundFinished] = useState(false);

  const onButtonClick = (fruitOrVegetable) => {
    if (rSummer.includes(fruitOrVegetable)) {
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
          label="Citrouille"
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
          label="Fraise"
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
          label="Tomate"
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
          label="Olive"
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
