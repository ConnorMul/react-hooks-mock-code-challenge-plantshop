import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const mappedPlants = plants.map((plant) => {
    return (
      <PlantCard 
        key={plant.id}
        plant={plant}
      />
    )
  })
  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;
