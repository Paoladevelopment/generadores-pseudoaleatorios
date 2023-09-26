import { InputData } from '../../components/InputData/InputData';

export const Calculate = () => {
  return (
    <div className='h-screen flex flex-column items-center justify-center'>
      <div className='w-9/10 bg-gray-200 shadow md:border rounded-xl md:w-4/5 p-4 md:p-8'>
        <p className='text-3xl text-gray-700 font-bold mb-5'>
          Entorno de prueba de generadores.
        </p>
        <p className='text-gray-500 text-lg'>
          <span className='text-sky-600'>Sigue las instrucciones.</span> <br />
          <span className='text-sky-600'>1.</span> Ingresa los valores para x0,
          a, c y m. <br />
          <span className='text-sky-600'>2.</span> Ingresa la cantidad de datos
          que desea generar. (Esto es opcional).
          <br />
          <span className='text-sky-600'>3.</span> Elige entre el generador de
          estándar mínimo o el generador lineal congruente. Al hacerlo, se
          generarán los números pseudoaleatorios.
        </p>
        <InputData page='/' />
      </div>
    </div>
  );
};
