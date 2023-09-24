import { useContext } from "react";
import { InputData } from "../../components/InputData/InputData";
import { CalculateContext } from "../../context/CalculateContext";
import { Table } from "../../components/Table/Table";

export const LCG = () => {
  const { currentMethodResult } = useContext(CalculateContext);
  console.log(currentMethodResult);
  const { xn, rn } = currentMethodResult;
  return (
    <div className="w-9/10 bg-gray-200  shadow md:border rounded-xl md:w-4/5 p-4 md:p-8">
      <InputData page="/LCG" />
      <Table
        tableName={"Números generados"}
        configuration={[
          {
            name: "Xn",
            values: xn,
          },
          {
            name: "Rn",
            values: rn,
          }
        ]}
      />
    </div>
  );
};
