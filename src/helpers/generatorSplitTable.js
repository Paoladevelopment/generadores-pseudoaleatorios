import { RANGE_GROUPS } from "../constants/generatorRange";

const splitRowData = (rowData) => {
  const dataAmount = rowData.length;
  if (dataAmount <= RANGE_GROUPS) return rowData;
  const newPairs = [];
  for (let i = 0; i < dataAmount; i += RANGE_GROUPS) {
    let group;
    if (i === 0) group = rowData.slice(0, RANGE_GROUPS);
    if (i !== 0) group = rowData.slice(i, i + RANGE_GROUPS);
    newPairs.push(group);
  }
  return newPairs;
};

export default splitRowData;
