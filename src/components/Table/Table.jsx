import PropTypes from "prop-types";
import { useState, useRef } from "react";

import splitRowData from "../../helpers/generatorSplitTable";

import "./Table.css";

export const Table = ({ tableCols, tableRows, isPagination }) => {
  const [shownResultIndex, setShownResultIndex] = useState(0);

  const allShownResults = useRef([]);

  const splitedResults = splitRowData(tableRows);

  allShownResults.current = splitedResults[shownResultIndex];

  const addMoreResults = () => {
    setShownResultIndex((prev) => {
      if (prev >= splitedResults.length - 1) return prev;
      const nextResult = prev + 1;
      allShownResults.current.push([splitedResults[nextResult]].flat());
      return nextResult;
    });
  };

  const removeMoreResults = () => {
    setShownResultIndex((prev) => {
      if (prev === 0) return prev;
      const nextResult = prev - 1;
      allShownResults.current.push([splitedResults[nextResult]].flat());
      return nextResult;
    });
  };

  const isValidArray =
    isPagination &&
    !allShownResults.current?.includes(NaN) &&
    Array.isArray(allShownResults.current) &&
    allShownResults.current.length > 0;

  return (
    <section className="h-[21.25rem] overflow-y-auto mb-4">
      <table className="table-fixed min-w-full divide-y">
        <thead className="bg-sky-600">
          <tr>
            {tableCols &&
              tableCols.map((tableColumn, key) => (
                <th
                  key={key}
                  className="py-3 px-6 text-2xs text-white font-medium tracking-wider"
                >
                  {tableColumn}
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {!isPagination &&
            tableRows &&
            tableRows.map((rowColumn, key) => (
              <tr key={key} className="border-b dark:border-neutral-500">
                {rowColumn.map((data, key) => (
                  <td
                    key={key}
                    className="py-3 px-6 text-2xs font-medium tracking-wider text-center"
                  >
                    {data}
                  </td>
                ))}
              </tr>
            ))}
          {isValidArray &&
            allShownResults.current.map((rowColumn, key) => (
              <tr key={key} className="border-b dark:border-neutral-500">
                {Array.isArray(rowColumn) &&
                  rowColumn.map((data, key) => (
                    <td
                      key={key}
                      className="py-3 px-6 text-2xs font-medium tracking-wider text-center"
                    >
                      {data}
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
      {isValidArray && (
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
      )}
    </section>
  );
};

Table.propTypes = {
  tableCols: PropTypes.arrayOf(PropTypes.string).isRequired,
  tableRows: PropTypes.array.isRequired,
  isPagination: PropTypes.bool,
};
