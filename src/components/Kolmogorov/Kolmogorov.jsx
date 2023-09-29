import { useContext, useState } from 'react';
import { CalculateContext } from '../../context/CalculateContext';
import { prueba_kolmogorov } from '../../helpers/kolmogorov';
import { rowsGeneration } from '../../helpers/formatTable';
import { Table } from '../Table/Table';

export const Kolmogorov = () => {
  const { currentMethodResult } = useContext(CalculateContext);
  const [NClases, setNClases] = useState(10);
  const resultadoKolmogorov = prueba_kolmogorov(
    currentMethodResult.rn,
    NClases
  );
  const { rangos, FO, FOA, POA, PEA, DMcalc } = resultadoKolmogorov;
  const rowsData = rowsGeneration(rangos, FO, FOA, POA, PEA, DMcalc);
  return (
    <>
      <h3 className='text-base text-center mb-4 font-medium'>Kolmogorov</h3>
      <div className='flex gap-2 justify-center items-center mb-4'>
        <span>#Nro clases:</span>
        <button
          className='bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded"'
          onClick={() => setNClases(5)}
        >
          5
        </button>
        <button
          className='bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded"'
          onClick={() => setNClases(10)}
        >
          10
        </button>
        <button
          className='bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded"'
          onClick={() => setNClases(20)}
        >
          20
        </button>
      </div>
      <Table
        tableCols={['Clases', 'FO', 'FOA', 'POA', 'PEA', '|PEA-POA|']}
        tableRows={rowsData}
      />
      <div className='flex justify-between mb-2'>
        <p>
          <span className='text-sky-700 font-medium'>DM critico = </span>
          {resultadoKolmogorov.DM_critico}
        </p>
        <p>
          <span className='text-sky-700 font-medium'>DM calculado = </span>
          {resultadoKolmogorov.DMcalcValue}
        </p>
      </div>
      <p className='text-center'>
        {resultadoKolmogorov.DMcalcValue <= resultadoKolmogorov.DM_critico
          ? 'Se acepta hipótesis de uniformidad en el conjunto de datos.'
          : 'No se acepta hipótesis de uniformidad en el conjunto de datos.'}
      </p>
    </>
  );
};
