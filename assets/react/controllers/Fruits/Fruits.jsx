import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import "../../../styles/Fruits.css";

function Fruits(props) {
  const toastRef = useRef();
  const [season, setSeason] = useState("spring.svg");

  function onButtonClick(event) {
    const clickedElement = document.elementFromPoint(
      event.clientX,
      event.clientY
    );
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-fit w-fit">
        <Toast ref={toastRef} />
        <img
          className="svg"
          src={`/img/etals/${season}`}
          alt={`Etal ${season}`}
          onClick={onButtonClick}
        />
        <div className="red-square"></div>
        <div className="green-square"></div>
        <div className="blue-square"></div>


      </div>
    </div>
  );
}

export default Fruits;
