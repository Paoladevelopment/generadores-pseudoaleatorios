import { createContext, useMemo, useState } from "react";

export const CalculateContext = createContext();

const initialData = {
  x0: "",
  a: "",
  c: "",
  m: "",
}

const initialSol = {
  xn: [],
  rn: [],
  periodo: null
}
export const CalculateProvider = ({ children }) => {
  const [currentMethod, setCurrentMethod] = useState("");
  const [currentMethodResult, setCurrentMethodResult] = useState(initialSol);
  const [currentValues, setCurrentValues] = useState(initialData);
  window.scrollTo(0, 0);

  const values = useMemo(
    () => ({
      currentMethod,
      setCurrentMethod,
      currentMethodResult,
      setCurrentMethodResult,
      currentValues,
      setCurrentValues
    }),
    [
      currentMethod,
      setCurrentMethod,
      currentMethodResult,
      setCurrentMethodResult,
      currentValues,
      setCurrentValues
    ]
  );

  return (
    <CalculateContext.Provider value={values}>
      {children}
    </CalculateContext.Provider>
  );
};
