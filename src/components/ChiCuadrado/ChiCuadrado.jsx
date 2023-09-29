import { useContext, useState } from 'react';
import { prueba_chiCuadrado } from '../../helpers/chiCuadrado';
import { CalculateContext } from '../../context/CalculateContext';
import { Table } from '../Table/Table';
import { rowsGeneration } from '../../helpers/formatTable';

export const ChiCuadrado = () => {
  const { currentMethodResult } = useContext(CalculateContext);
  const [NClases, setNClases] = useState(10);
  const resultadoChiCuadrado = prueba_chiCuadrado(
    currentMethodResult.rn,
    NClases
  );
  const { rangos, FO, FE, X2_calculado } = resultadoChiCuadrado;
  const rowsData = rowsGeneration(rangos, FO, FE, X2_calculado);
  return (
    <>
      <h3 className='text-base text-center mb-4 font-medium'>Chi cuadrado</h3>
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
        tableCols={['Clases', 'FO', 'FE', '(FE-FO)^2 /FE']}
        tableRows={rowsData}
      />
      <div className='flex justify-between mb-2'>
        <p>
          <span className='text-sky-700 font-medium'>X^2 critico = </span>
          {resultadoChiCuadrado.X2_critico}
        </p>
        <p>
          <span className='text-sky-700 font-medium'>X^2 calculado = </span>
          {resultadoChiCuadrado.X2_calculado_sum}
        </p>
      </div>
      <p className='text-center'>
        {resultadoChiCuadrado.X2_calculado_sum <=
        resultadoChiCuadrado.X2_critico
          ? 'Se acepta hipótesis de uniformidad en el conjunto de datos.'
          : 'No se acepta hipótesis de uniformidad en el conjunto de datos.'}
      </p>
    </>
  );
};
