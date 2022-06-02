import React, { useState, useEffect } from "react";
import Plant from "./Plant";
import { Container } from "react-bootstrap";

const Plants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("https://plants.hoppingadventure.com/api/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data.data);
      })
      .catch(console.log);
  }, []);

  return (
    <Container>
      <center>
        <h1 className="mt-4 mb-4">Plant List</h1>
      </center>
      <div className="d-flex flex-wrap justify-content-center">
        {plants?.map((plant) => (
          <Plant key={plant.id} plantId={plant.id} showLink={true} />
        ))}
      </div>
    </Container>
  );
};

export default Plants;
