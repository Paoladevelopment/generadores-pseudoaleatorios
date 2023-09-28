import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CalculateContext } from "../../context/CalculateContext";

export const PruebasForm = () => {
  const { register, watch } = useForm();
  const {setSelectedTests} = useContext(CalculateContext);
  const tests = ["x2", "kolmogorov", "corridas", "series", "poker"];

  useEffect(() => {
    const updatedTests = tests.filter((test) => watch(test));
    setSelectedTests(updatedTests);
  }, tests.map((test) => watch(test)));


  return (
    <form >
      <h2 className="text-xl text-center font-bold text-sky-500">
        Elige una prueba de bondad <br /> para evaluar tus números
        pseudoaleatorios.
      </h2>

      <div className="basis-10/12 flex justify-center flex-wrap border rounded-full my-4 mx-auto select-none">
        <div className="py-3 my-auto px-5 bg-sky-500 text-white text-sm font-semibold mr-3">
          Pruebas
        </div>
        <label className="flex radio p-2 cursor-pointer">
          <input
            className="cursor-pointer my-auto transform scale-125 mr-2"
            type="checkbox"
            {...register("x2")}
          />
          X^2
        </label>
        <label className="flex radio p-2">
          <input
            className="cursor-pointer my-auto transform scale-125 mr-2"
            type="checkbox"
            {...register("kolmogorov")}
          />
          Kolmogorov
        </label>
        <label className="flex radio p-2 cursor-pointer">
          <input
            className="cursor-pointer my-auto transform scale-125 mr-2"
            type="checkbox"
            {...register("corridas")}
          />
          Corridas
        </label>
        <label className="flex radio p-2 cursor-pointer">
          <input
            className="cursor-pointer my-auto transform scale-125 mr-2"
            type="checkbox"
            {...register("series")}
          />
          Series
        </label>
        <label className="flex radio p-2 cursor-pointer">
          <input
            className="cursor-pointer my-auto transform scale-125 mr-2"
            type="checkbox"
            {...register("poker")}
          />
          Póker
        </label>
      </div>
    </form>
  );
};
