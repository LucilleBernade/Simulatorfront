import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Simulator = () => {
    const [vehicle, setVehicle] = useState([]);
    const type = 'Van';
    const id_regions = '4';

  const getOneVehicle = () => {
    axios
      .get(`http://localhost:8000/api/vehicles?type=${type}&id_regions=${id_regions}`)
      .then((response) => setVehicle(response.data));
  };

  useEffect(() => {
    getOneVehicle();
  }, []);

    return (
        <div>
            Simulator

            {vehicle.map((result) => (
                <div>
                <p>{result.type}</p>
                <p>{result.id_regions}</p>
                <p>Vous pouvez louer en moyenne {result.price} € par jour</p>
                </div>

            ))}
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