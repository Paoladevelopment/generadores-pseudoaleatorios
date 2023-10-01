import { useContext } from 'react';

import { CalculateContext } from '../../context/CalculateContext';

import { Table } from '../Table/Table';

import prueba_independencia_corridas from '../../helpers/corridas';
import { rowsGeneration } from '../../helpers/formatTable';

import './Corridas.css';

export const Corridas = () => {
  const { currentMethodResult } = useContext(CalculateContext);
  const corridasResult = prueba_independencia_corridas(currentMethodResult.rn);
  const { n1, n2, cantCorridas, media, varianza, z, zObs, signos, conclusion } =
    corridasResult;
  const corridasShown = ['*', ...signos];
  const newZTable = `[${z[0]}-${z[1]}}]`;
  const rowDataCorridas = rowsGeneration(corridasShown);
  const rowData = rowsGeneration(
    [n1],
    [n2],
    [media],
    [varianza],
    [zObs],
    [newZTable]
  );
  return (
    <section>
      {corridasResult && (
        <>
          <Table tableCols={['Corridas']} tableRows={rowDataCorridas} />
          <div className='table-information__corridas'>
            <Table
              tableCols={['n1', 'n2', 'Media', 'Varianza', 'Zobs', 'Z']}
              tableRows={rowData}
            />
          </div>
          <div className='flex justify-between mb-2'>
            <p>
              <span className='text-sky-700 font-medium'>
                Catidad de corridas ={' '}
              </span>
              {cantCorridas}
            </p>
          </div>
          <p className='text-center'>{conclusion}</p>
        </>
      )}
    </section>
  );
};
