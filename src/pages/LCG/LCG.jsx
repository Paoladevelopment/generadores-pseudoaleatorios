import { useContext } from 'react';
import { InputData } from '../../components/InputData/InputData';
import { CalculateContext } from '../../context/CalculateContext';
import { Table } from '../../components/Table/Table';
import { rowsGeneration } from '../../helpers/formatTable';
import { Pruebas } from '../../components/Pruebas/Pruebas';

export const LCG = () => {
  const { currentMethodResult } = useContext(CalculateContext);
  console.log(currentMethodResult);
  const { xn, rn, periodo } = currentMethodResult;
  const rowsData = rowsGeneration(xn, rn);
  return (
    <div className='py-4'>
      <div className='w-9/10 h-9/10 bg-gray-200 mx-auto shadow md:border rounded-xl md:w-4/5 p-4 md:p-8'>
        <h1 className='text-xl text-center font-bold text-sky-500'>
          Generador linear congruente
        </h1>
        <InputData page='/LCG' />
        <p className='text-xl text-center mb-4'>
          <span className='text-sky-500 font-bold '>Periodo:</span> {periodo}
        </p>
        <Table
          tableName={'Números generados'}
          tableCols={['Xn', 'Rn']}
          tableRows={rowsData}
        />
        <h2 className='text-xl text-center font-bold text-sky-500'>
          Elige una prueba de bondad <br /> para evaluar tus números
          pseudoaleatorios.
        </h2>

        <div className='basis-10/12 flex justify-center flex-wrap border rounded-full my-4 mx-auto select-none'>
          <div className='py-3 my-auto px-5 bg-sky-500 text-white text-sm font-semibold mr-3'>
            Pruebas
          </div>
          <label className='flex radio p-2 cursor-pointer'>
            <input
              className='cursor-pointer my-auto transform scale-125 mr-2'
              type='checkbox'
            />
            X^2
          </label>
          <label className='flex radio p-2'>
            <input
              className='cursor-pointer my-auto transform scale-125 mr-2'
              type='checkbox'
            />
            Kolmogorov
          </label>
          <label className='flex radio p-2 cursor-pointer'>
            <input
              className='cursor-pointer my-auto transform scale-125 mr-2'
              type='checkbox'
            />
            Corridas
          </label>
          <label className='flex radio p-2 cursor-pointer'>
            <input
              className='cursor-pointer my-auto transform scale-125 mr-2'
              type='checkbox'
            />
            Series
          </label>
          <label className='flex radio p-2 cursor-pointer'>
            <input
              className='cursor-pointer my-auto transform scale-125 mr-2'
              type='checkbox'
            />
            Póker
          </label>
        </div>
        <Pruebas />
      </div>
    </div>
  );
};
