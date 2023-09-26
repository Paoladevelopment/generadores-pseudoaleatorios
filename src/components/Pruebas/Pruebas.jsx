import { useContext } from 'react';
import { prueba_chiCuadrado } from '../../helpers/chiCuadrado';
import { CalculateContext } from '../../context/CalculateContext';

export const Pruebas = () => {
  const { currentMethodResult } = useContext(CalculateContext);
  const resultadoChiCuadrado = prueba_chiCuadrado(currentMethodResult.rn, 5);
  console.log(resultadoChiCuadrado);
  return <div>Pruebas</div>;
};
