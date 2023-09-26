import PropTypes from 'prop-types';

import './Table.css';

export const Table = ({ tableCols, tableRows }) => {
  return (
    <section className='h-[21.25rem] overflow-y-auto mb-4'>
      <table className='table-fixed min-w-full divide-y'>
        <thead className='bg-sky-600'>
          <tr>
            {tableCols &&
              tableCols.map((tableColumn, key) => (
                <th
                  key={key}
                  className='py-3 px-6 text-2xs text-white font-medium tracking-wider'
                >
                  {tableColumn}
                </th>
              ))}
          </tr>
        </thead>
        <tbody className='bg-gray-100'>
          {tableRows &&
            tableRows.map((rowColumn, key) => (
              <tr key={key} className='border-b dark:border-neutral-500'>
                {rowColumn.map((data, key) => (
                  <td
                    key={key}
                    className='py-3 px-6 text-2xs font-medium tracking-wider text-center'
                  >
                    {data}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

Table.propTypes = {
  tableCols: PropTypes.arrayOf(PropTypes.string).isRequired,
  tableRows: PropTypes.array.isRequired,
};
