import React, { useContext, useState } from "react";
import { CalculateContext } from "../../context/CalculateContext";
import { PruebasForm } from "../PruebasForm/PruebasForm";
import { Kolmogorov } from "../Kolmogorov/Kolmogorov";
import { Corridas } from "../Corridas/Corridas";
import { Series } from "../Series/Series";
import { Poker } from "../Poker/Poker";
import { ChiCuadrado } from "../ChiCuadrado/chiCuadrado";

export const Pruebas = () => {
  const { selectedTests } = useContext(CalculateContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const pruebaRenderizar = {
    x2: <ChiCuadrado />,
    kolmogorov: <Kolmogorov />,
    corridas: <Corridas />,
    series: <Series />,
    poker: <Poker />,
  };

  return (
    <>
      <PruebasForm />
      <div className="flex flex-col w-9/10">
        {pruebaRenderizar[selectedTests[currentIndex]]}
        <div className="flex w-100 justify-center sm:justify-end">
          <div className="flex flex-wrap sm:inline-flex rounded-md shadow-sm">
            {selectedTests.map((test, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`px-4 py-2 text-sm font-medium text-sky-700 hover:bg-gray-100 focus:bg-gray-100 focus:border-b focus:border-sky-700 focus:text-sky-700 ${
                  index === currentIndex? "bg-gray-100 border-b border-sky-700 text-sky-700": "bg-white"
                }`}
              >
                {test}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
