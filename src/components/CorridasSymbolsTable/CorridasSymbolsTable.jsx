import PropTypes from "prop-types";
import { useState, useRef } from "react";

import CORRIDAS_RANGE_TABLE from "../../constants/corridasSymbolsRange";

export const CorridasTable = ({ currentCorridas }) => {
  const [, setCorridasIndexTable] = useState(0);

  const allCorridas = useRef(currentCorridas.slice(0, CORRIDAS_RANGE_TABLE));

  const addMoreResults = () => {
    setCorridasIndexTable((prev) => {
      if (prev + CORRIDAS_RANGE_TABLE >= currentCorridas.length - 1)
        return prev;
      const nextResult = prev + CORRIDAS_RANGE_TABLE;
      allCorridas.current = currentCorridas.slice(
        nextResult,
        nextResult + CORRIDAS_RANGE_TABLE
      );
      return nextResult;
    });
  };

  const removeMoreResults = () => {
    setCorridasIndexTable((prev) => {
      if (prev === 0) return prev;
      const nextResult = prev - CORRIDAS_RANGE_TABLE;
      allCorridas.current = currentCorridas.slice(nextResult, prev);
      return nextResult;
    });
  };

  return (
    <>
      <div className="corridas-information">
        {allCorridas.current &&
          allCorridas.current.map((corrida, key) => (
            <div key={key}>
              <p>{corrida}</p>
            </div>
          ))}
      </div>
      <div className="pagination-table__buttons">
        <button
          onClick={removeMoreResults}
          className="text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-lg text-sm w-full sm:w-auto px-2.5 lg:px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700"
        >
          Anterior
        </button>
        <button
          onClick={addMoreResults}
          className="text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-lg text-sm w-full sm:w-auto px-2.5 lg:px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700"
        >
          Siguiente
        </button>
      </div>
    </>
  );
};

CorridasTable.propTypes = {
  currentCorridas: PropTypes.arrayOf(PropTypes.string),
};
