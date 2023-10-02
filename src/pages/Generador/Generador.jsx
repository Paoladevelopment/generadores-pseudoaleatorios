import { useContext } from "react";

import { InputData } from "../../components/InputData/InputData";
import { RandomInputData } from "../Random/Random";
import { CalculateContext } from "../../context/CalculateContext";
import { Table } from "../../components/Table/Table";
import { rowsGeneration } from "../../helpers/formatTable";
import { Pruebas } from "../../components/Pruebas/Pruebas";

import "./Generador.css";

export const Generador = () => {
  const { currentMethodResult, isJavaScriptGenerator } =
    useContext(CalculateContext);
  console.log(currentMethodResult);
  const { xn, rn, periodo } = currentMethodResult;
  const rowsData = rowsGeneration(xn, rn);

  return (
    <div className="py-4">
      <div className="w-9/10 h-9/10 bg-gray-200 mx-auto shadow md:border rounded-xl md:w-4/5 p-4 md:p-8">
        <h1 className="text-xl text-center font-bold text-sky-500">
          Generador linear congruente
        </h1>
        {isJavaScriptGenerator ? (
          <RandomInputData />
        ) : (
          <InputData page="/LCG" />
        )}
        <p className="text-xl text-center mb-4">
          <span className="text-sky-500 font-bold ">Periodo:</span> {periodo}
        </p>
        <Table tableCols={["Xn", "Rn"]} tableRows={rowsData} isPagination />
        <Pruebas />
      </div>
    </div>
  );
};
