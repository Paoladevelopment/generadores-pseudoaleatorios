export const generar_rangos = (n_rangos) => {
  const rangos = [];
  for (let i = 0; i < n_rangos; i++) {
    const limiteInf = i / n_rangos;
    const limiteSup = (i + 1) / n_rangos;
    rangos.push({ limiteInf, limiteSup });
  }
  return rangos;
};

export const string_rangos = (rangos) => {
  return rangos.map((rango) => `[${rango.limiteInf} - ${rango.limiteSup})`);
};
