import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as generadores from '../../helpers/generadores';
import { useNavigate } from 'react-router-dom';
import { CalculateContext } from '../../context/CalculateContext';

export const InputData = ({ page }) => {
  const navigation = useNavigate();
  const {
    setCurrentValues,
    currentValues,
    setCurrentMethodResult,
    setIsJavaScriptGenerator,
  } = useContext(CalculateContext);
  const { register, handleSubmit } = useForm({
    defaultValues: currentValues,
  });
  const onSubmit = (data) => {
    setIsJavaScriptGenerator(false);
    console.log(data);
    setCurrentValues({
      x0: Number(data.x0),
      a: Number(data.a),
      c: Number(data.c),
      m: Number(data.m),
      n: Number(data.n),
    });
    navigation('/Generador');
  };

  useEffect(() => {
    const result =
      currentValues.n !== ''
        ? generadores.generador(
            currentValues.x0,
            currentValues.a,
            currentValues.c,
            currentValues.m,
            currentValues.n
          )
        : generadores.generador(
            currentValues.x0,
            currentValues.a,
            currentValues.c,
            currentValues.m
          );
    console.log(result);
    setCurrentMethodResult(result);
  }, [currentValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid sm:grid-cols-2 gap-2 sm:gap-4 w-full lg:grid-cols-3 px-3 my-6 text-lg'>
        <div className='border-b border-sky-500 py-2'>
          <input
            type='number'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            id='x0'
            placeholder='Ingresa valor de x0'
            min={0}
            {...register('x0', { required: true })}
          />
        </div>
        <div className='border-b border-sky-500 py-2'>
          <input
            type='number'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            id='a'
            placeholder='Ingresa valor de a'
            min={1}
            {...register('a', { required: true })}
          />
        </div>
        <div className='border-b border-sky-500 py-2'>
          <input
            type='number'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            id='c'
            placeholder='Ingresa valor de c'
            min={0}
            {...register('c')}
          />
        </div>

        <div className='border-b border-sky-500 py-2'>
          <input
            type='number'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            id='m'
            placeholder='Ingresa valor de m'
            min={1}
            {...register('m', { required: true })}
          />
        </div>
        <div className='border-b border-sky-500 py-2'>
          <input
            type='number'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            id='n'
            placeholder='Ingresa #datos a generar'
            {...register('n')}
          />
        </div>
        {page === '/' ? (
          <div className='justify-self-center flex gap-4'>
            <button
              type='submit'
              className='text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-lg text-sm w-full sm:w-auto px-2.5 lg:px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700'
            >
              Generar números
            </button>
          </div>
        ) : (
          <div className='justify-self-center flex gap-4'>
            <button
              type='submit'
              className='text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-lg text-sm w-full sm:w-auto px-2.5 lg:px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700'
            >
              cambiar datos
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

InputData.propTypes = {
  page: PropTypes.string,
};
