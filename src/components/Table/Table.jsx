import "./Table.css";

export const Table = ({ tableName, configuration, testGenerator }) => {
  return (
    <section className="">
      <table className="table-fixed min-w-full divide-y overflow-y-auto">
        <caption>
          <h2 className="my-4">{tableName}</h2>
        </caption>
        <thead className="bg-red-500">
          <tr>
            {configuration &&
              configuration.map((tableColumn, key) => (
                <th
                  key={key}
                  className="py-3 px-6 text-2xs text-white font-medium tracking-wider text-left"
                >
                  {tableColumn.name}
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="flex flex-col hover:bg-gray-100 dark:hover:bg-gray-700">
          {configuration &&
            configuration.map((tableColumn, key) => (
              <tr key={key}>
                {tableColumn.values &&
                  tableColumn.values.map((value, key) => (
                    <td key={key} className="">{value}</td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};
