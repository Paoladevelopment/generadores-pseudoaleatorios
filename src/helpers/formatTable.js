export const rowsGeneration = (...columnsValues) => {
  const lengths = columnsValues.map((values) => values.length);
  const maxLength = Math.max(...lengths);
  const rows = [];

  for (let i = 0; i < maxLength; i++) {
    const rowData = columnsValues.map((values) => values[i]);
    rows.push(rowData);
  }

  return rows;
};
