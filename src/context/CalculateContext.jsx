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
  const [selectedTests, setSelectedTests] = useState([]);

  const values = useMemo(
    () => ({
      currentMethod,
      setCurrentMethod,
      currentMethodResult,
      setCurrentMethodResult,
      currentValues,
      setCurrentValues,
      selectedTests,
      setSelectedTests
    }),
    [
      currentMethod,
      setCurrentMethod,
      currentMethodResult,
      setCurrentMethodResult,
      currentValues,
      setCurrentValues,
      selectedTests,
      setSelectedTests
    ]
  );

  return (
    <CalculateContext.Provider value={values}>
      {children}
    </CalculateContext.Provider>
  );
};
