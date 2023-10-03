import { useContext } from "react";

import { CalculateContext } from "../../context/CalculateContext";

import { Table } from "../Table/Table";

import { rowsGeneration } from "../../helpers/formatTable";
import prueba_series from "../../helpers/series";
import { generar_rangos, string_rangos } from "../../helpers/manejoRangos";
import NUMBER_OF_INTERVALS from "../../constants/bidimensionalSeries";

import "./Series.css";

export const Series = () => {
  const { currentMethodResult } = useContext(CalculateContext);
  const seriesResult = prueba_series(currentMethodResult.rn);
  const {
    cellProbability,
    chiCritico,
    clases,
    conclusion,
    fE,
    gl,
    matrizChiCuadrado,
    suma,
    matriz,
  } = seriesResult;
  const intervalColumn = string_rangos(generar_rangos(NUMBER_OF_INTERVALS));
  const rowDataFe = rowsGeneration(
    [...intervalColumn],
    matriz[0],
    matriz[1],
    matriz[2],
    matriz[3],
    matriz[4]
  );
  const rowData = rowsGeneration(
    [...intervalColumn],
    matrizChiCuadrado[0],
    matrizChiCuadrado[1],
    matrizChiCuadrado[2],
    matrizChiCuadrado[3],
    matrizChiCuadrado[4]
  );
  const dataInformation = rowsGeneration(
    [fE],
    [gl],
    [cellProbability],
    [clases]
  );

  return (
    <section>
      {seriesResult && (
        <div className="series-table__result">
          <Table tableCols={["", ...intervalColumn]} tableRows={rowData} />
          <Table tableCols={["", ...intervalColumn]} tableRows={rowDataFe} />
          <div className="series-table__result--informataion">
            <Table
              tableCols={["FE", "gl", "Probabilidad celda", "Clases"]}
              tableRows={dataInformation}
            />
          </div>
          <div className="flex justify-between mb-2">
            <p>
              <span className="text-sky-700 font-medium">ChiCrítico = </span>
              {chiCritico}
            </p>
            <p>
              <span className="text-sky-700 font-medium">ChiCálculado = </span>
              {suma}
            </p>
          </div>
          <p className="text-center">{conclusion}</p>
        </div>
      )}
    </section>
  );
};
