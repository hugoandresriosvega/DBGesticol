import React from 'react';
import imagenPrincipal from "../imagenPrincipal.jpg";
import fondo from "../fondo.jpg";
import gesticol from "../gesticol.png";
import salud from "../salud.png";
import pension from "../pension.png";
import ARL from "../ARL.png";
import CajaP from "../CajaP.png";

function HomePage() {
  return (
    <div className="bg-traspanent flex flex-col items-center min-h-[calc(100vh-100px)] border border-white">
  <div className="border border-white mb-4">
    <img src={gesticol} className="w-full h-full object-cover rounded-md"/>
  </div>

  <div className="flex flex-wrap justify-center">
    <div className="flex flex-col items-center p-5 mx-1 mt-1">
      <div>Salud</div>
      <img src={salud} className="w-full h-24 object-cover rounded-md"/>
    </div>

    <div className="flex flex-col items-center p-5 mx-1 mt-1">
      <div>Pension</div>
      <img src={pension} className="w-full h-24 object-cover rounded-md"/>
    </div>

    <div className="flex flex-col items-center p-5 mx-1 mt-1">
      <div>ARL</div>
      <img src={ARL} className="w-full h-24 object-cover rounded-md"/>
    </div>

    <div className="flex flex-col items-center p-5 mx-1 mt-1">
      <div>Caja de compensación</div>
      <img src={CajaP} className="w-full h-24 object-cover rounded-md"/>
    </div>
  </div>
</div>
  );
}

export default HomePage;