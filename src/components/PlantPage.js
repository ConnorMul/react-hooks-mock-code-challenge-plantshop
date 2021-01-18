import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plantObjs => setPlants(plantObjs))
  }, [])

  const searchedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main>
      <NewPlantForm plants={searchedPlants} onAddPlant={setPlants} />
      <Search search={search} onSearch={setSearch}/>
      <PlantList plants={searchedPlants} />
    </main>
  );
}

export default PlantPage;
