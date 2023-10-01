import { useContext, useState } from 'react';
import { CalculateContext } from '../../context/CalculateContext';
import { poker } from '../../helpers/poker';
import { Table } from '../Table/Table';
import { rowsGeneration } from '../../helpers/formatTable';

export const Poker = () => {
  const { currentMethodResult } = useContext(CalculateContext);
  const [NPoker, setNPoker] = useState(3);
  const resultadoPoker = poker(currentMethodResult.rn, NPoker);
  const { categorias, FO, FE, X2_calculado } = resultadoPoker;
  const rowsData = rowsGeneration(categorias, FO, FE, X2_calculado);
  return (
    <>
      <h3 className='text-base text-center mb-4 font-medium'>Poker</h3>
      <div className='flex gap-2 justify-center items-center mb-4'>
        <span>#Nro poker:</span>
        <button
          className='bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded"'
          onClick={() => setNPoker(3)}
        >
          3
        </button>
        <button
          className='bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded"'
          onClick={() => setNPoker(5)}
        >
          5
        </button>
      </div>
      <Table
        tableCols={['Categorías', 'FO', 'FE', '(FE-FO)^2 /FE']}
        tableRows={rowsData}
      />
      <div className='flex justify-between mb-2'>
        <p>
          <span className='text-sky-700 font-medium'>X2 critico = </span>
          {resultadoPoker.X2_critico}
        </p>
        <p>
          <span className='text-sky-700 font-medium'>X2 calculado = </span>
          {resultadoPoker.X2_calculado_sum}
        </p>
      </div>
      <p className='text-center'>
        {resultadoPoker.X2_calculado_sum <= resultadoPoker.X2_critico
          ? 'Se acepta hipótesis de independencia en el conjunto de datos.'
          : 'No se acepta hipótesis de independencia en el conjunto de datos.'}
      </p>
    </>
  );
};
