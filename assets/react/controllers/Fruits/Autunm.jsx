import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import "../../../styles/Fruits.css";
import Winter from "./Winter";
import i18n from "../../../utils/i18n";

function Autunm(props) {
  const toastRef = useRef();
  const [season, setSeason] = useState("autumn.svg");
  const [pAutunm] = useState(["pumpkin", "pear", "onion", "apple", "potato"]);
  const [rAutunm] = useState(["apple", "onion", "pumpkin"]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [nbButtons, setnbButtons] = useState(0);
  const [nbRightAns, setnbRightAns] = useState(0);
  const [isRoundFinished, setIsRoundFinished] = useState(false);

  const onButtonClick = (fruitOrVegetable) => {
    if (rAutunm.includes(fruitOrVegetable)) {
      toastRef.current.show({
        severity: "success",
        summary: i18n.t("toast.good_answer"),
        detail: i18n.t("toast.good_more"),
      });
      const right = nbRightAns;
      setnbRightAns(right + 1);
      if (nbRightAns === 2) {
        setIsRoundFinished(true);
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
    if (nbButtons === 4) {
      setIsRoundFinished(true);
    }
  };

  const isButtonDisabled = (fruitOrVegetable) => {
    return disabledButtons.includes(fruitOrVegetable);
  };

  if (isRoundFinished) {
    return <Winter />;
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
          className="mr-2 w-48"
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
          label="Onion"
          className="mr-2 w-48"
          onClick={() => onButtonClick("onion")}
          disabled={isButtonDisabled("onion")}
        >
          <img
            alt="Onion"
            src="/img/vegetables/onion.svg"
            className="h-2rem img"
          ></img>
        </Button>
        <Button
          label="Pomme"
          className="mr-2 w-48"
          onClick={() => onButtonClick("apple")}
          disabled={isButtonDisabled("apple")}
        >
          <img
            alt="Apple"
            src="/img/fruits/apple.svg"
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

export default Autunm;