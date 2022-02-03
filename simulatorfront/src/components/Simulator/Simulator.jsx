import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Simulator.css";

const Simulator = () => {
  const [vehicle, setVehicle] = useState([]);
  const [type, setType] = useState();
  const [id_regions, setId_regions] = useState();
  const [isClick, SetIsClick] = useState(false);

  const showPrice = () => SetIsClick(!isClick);

  const getOneVehicle = () => {
    axios
      .get(
        `http://localhost:8000/api/vehicles?type=${type}&id_regions=${id_regions}`
      )
      .then((response) => setVehicle(response.data));
  };

  useEffect(() => {
    getOneVehicle();
  }, []);

  /* appel axios type de vehicule
    appel axios des régions 
    useEffect qui écoute le changement de state*/

  return (
    /*map type de vehicule dans un select onchange add event listener pour modifier le state du type de vehicule */
    /*map type de region dans un select add event listener pour modifier le state de la region */
    <div>
      Simulator
      {type.map((result) => (
        <div>
          <label for="vehicle-select">Choose a vehicle:</label>
          <select name="vehicles" id="vehicle-select">
            <option value="">--Please choose an option--</option>
            <option value="Profile">Profile</option>
            <option value="Integral">Integral</option>
            <option value="Capucine">Capucine</option>
            <option value="Fourgon">Fourgon</option>
            <option value="Van">Van</option>
          </select>
        </div>
      ))}
      ;
      {id_regions.map((result) => (
        <div></div>
      ))}
      ;
      {vehicle.map((result) => (
        <div>
          <p className={isClick ? "complete" : "incomplete"}>
            Pour votre véhicule {result.type} localisé {result.id_regions} :
            Vous pouvez louer en moyenne {result.price} € par jour
          </p>
        </div>
      ))}
      ;
      <input
        onClick={showPrice}
        class="favorite styled"
        type="button"
        value="Voir le prix"
      ></input>
    </div>
  );
};

/*<div className='type-vehicle'>
<label for="vehicle-select">Choose a vehicle:</label>
  <select name="vehicles" id="vehicle-select">
      <option value="">--Please choose an option--</option>
      <option value="Profile">Profile</option>
      <option value="Integral">Integral</option>
      <option value="Capucine">Capucine</option>
      <option value="Fourgon">Fourgon</option>
      <option value="Van">Van</option>
    </select>
</div
<div className='region'>
<label for="region-select">Choose a region:</label>
  <select name="regions" id="region-select">
      <option value="">--Please choose an option--</option>
      <option value="1">Aquitaine</option>
      <option value="2">Auvergne</option>
      <option value="3">Andalousie</option>
      <option value="4">Galice</option>
    </select>
</div> */

export default Simulator;
