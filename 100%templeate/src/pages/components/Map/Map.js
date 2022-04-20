import React from "react";
import "./Map.css";
import Mapa from "./Mapa";

const Map = () => {

  return (
    <div className="MapContainer">
      <div className="MapSections">
        <section>
          <div className="Cabañas">
            <p>Cabañas</p>
          </div>
          <div className="Casas">
            <p>Casas</p>
          </div>
        </section>
      </div>
      <div className="Mapaa">
        <Mapa></Mapa>
      </div>
    </div>
  );
};

export default Map;
