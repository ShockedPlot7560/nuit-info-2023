import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";

const citiesData = [
    {
      id: 1,
      illustration: "/img/transport/train.svg",
      departureCity: "Vannes",
      arrivalCity: "Rennes",
      travelTime: "2 heures 30 minutes",
      schedule: "8h00",
    },
    {
      id: 2,
      illustration: "/img/transport/car.svg",
      departureCity: "Vannes",
      arrivalCity: "Rennes",
      travelTime: "1 heure 30 minutes",
      schedule: "10h00",
    },
    {
      id: 3,
      illustration: "/img/transport/train.svg",
      departureCity: "Le Mans",
      arrivalCity: "Paris",
      travelTime: "2 heures 30 minutes",
      schedule: "15h00",
    },
      {
      id: 4,
      illustration: "/img/transport/train.svg",
      departureCity: "Vannes",
      arrivalCity: "Rennes",
      travelTime: "1h",
      schedule: "11h",
    },
    {
      id: 5,
      illustration: "/img/transport/bus.svg",
      departureCity: "Redon",
      arrivalCity: "Nantes",
      travelTime: "1 heure",
      schedule: "14h00",
    },
    {
      id: 6,
      illustration: "/img/transport/car.svg",
      departureCity: "Vannes",
      arrivalCity: "Paris",
      travelTime: "5 heures",
      schedule: "12h00",
    },
    {
      id: 7,
      illustration: "/img/transport/train.svg",
      departureCity: "Le Mans",
      arrivalCity: "Paris",
      travelTime: "2 heures 20 minutes",
      schedule: "09h30",
    },
    {
      id: 8,
      illustration: "/img/transport/bus.svg",
      departureCity: "Redon",
      arrivalCity: "Nantes",
      travelTime: "1 heure",
      schedule: "14h00",
    },
    {
      id: 9,
      illustration: "/img/transport/bus.svg",
      departureCity: "Rennes",
      arrivalCity: "Le Mans",
      travelTime: "3 heure",
      schedule: "10h00",
    },
    {
      id: 10,
      illustration: "/img/transport/car.svg",
      departureCity: "Nantes",
      arrivalCity: "Paris",
      travelTime: "5 heures",
      schedule: "12h00",
    },
  ];

const MultiSelectList = () => {
  const [selectedCities, setSelectedCities] = useState([]);

  const cityTemplate = (option) => {
    return (
      <div className="p-clearfix">
        <img
          alt={option.departureCity}
          src={option.illustration}
          style={{
            width: "50px",
            display: "inline-block",
            marginRight: "10px",
          }}
        />
        <div style={{ fontSize: "14px", float: "right", marginTop: "10px" }}>
          {`${option.departureCity} - ${option.arrivalCity} (${option.travelTime})`}
          <br />
          <span style={{ color: "dimgray" }}>{`Heure de départ: ${option.schedule}`}</span>
        </div>
      </div>
    );
  };

  const optionLabel = (option) => option.departureCity;

  return (
    <div className="p-grid p-justify-center p-align-center full-height">
      <div className="p-col-8">
        <h3>Trouver le meilleur itinéraire</h3>
        <MultiSelect
          value={selectedCities}
          options={citiesData}
          optionLabel={optionLabel}
          itemTemplate={cityTemplate}
          style={{ width: "100%" }}
          onChange={(e) => setSelectedCities(e.value)}
          filter={false}
        />
      </div>
      <div className="p-col-8 p-mt-2">
        <button className="p-button p-button-primary" onClick={() => console.log(selectedCities)}>
          Valider
        </button>
      </div>
    </div>
  );
};

export default MultiSelectList;
