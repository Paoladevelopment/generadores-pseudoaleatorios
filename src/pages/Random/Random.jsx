import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { CalculateContext } from "../../context/CalculateContext";

import { randomGenerator } from "../../helpers/generadores";

export const RandomInputData = () => {
  const navigation = useNavigate();
  const { setCurrentValues, currentValues, setCurrentMethodResult, setIsJavaScriptGenerator } =
    useContext(CalculateContext);
  const { register, handleSubmit } = useForm({
    defaultValues: currentValues,
  });
  const onSubmit = (data) => {
    setIsJavaScriptGenerator(true);
    console.log(data);
    setCurrentValues({
      n: Number(data.n),
    });
    navigation("/Generador");
  };

  useEffect(() => {
    const result = randomGenerator(currentValues.n);
    console.log(result);
    setCurrentMethodResult(result);
  }, [currentValues]);

  return (
    <div className="h-screen flex flex-column items-center justify-center random-input">
      <div className="w-9/10 bg-gray-200 shadow md:border rounded-xl md:w-4/5 p-4 md:p-8">
      <p className="text-3xl text-gray-700 font-bold mb-5">
          Generador de JavaScript.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 w-full lg:grid-cols-3 px-3 my-6 text-lg">
            <div className="border-b border-sky-500 py-2">
              <input
                type="number"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                id="n"
                placeholder="Ingresa #datos a generar"
                {...register("n")}
              />
            </div>
            <div className="justify-self-center flex gap-4">
              <button
                type="submit"
                className="text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-lg text-sm w-full sm:w-auto px-2.5 lg:px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700"
              >
                Generar números
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
