const x2_criticos = [
  3.841, 5.991, 7.815, 9.488, 11.07, 12.592, 14.067, 15.507, 16.919, 18.307,
  19.675, 21.026, 22.362, 23.685, 24.996, 26.296, 27.587, 28.869, 30.144, 31.41,
];

const generar_rangos = (n_rangos) => {
  const rangos = [];
  for (let i = 0; i < n_rangos; i++) {
    const limiteInf = i / n_rangos;
    const limiteSup = (i + 1) / n_rangos;
    rangos.push({ limiteInf, limiteSup });
  }

  return rangos;
};

export const prueba_chiCuadrado = (datos, nroRangos) => {
  const nDatos = datos.length;
  const FE = Array.from({ length: nroRangos }, () => nDatos / nroRangos);
  const rangos = generar_rangos(nroRangos);
  const FO = rangos.map((rango) => {
    let contador = 0;
    for (let dato of datos) {
      if (dato >= rango.limiteInf && dato < rango.limiteSup) contador++;
    }
    return contador;
  });

  const X2_calculado = [];
  let X2_calculado_sum = 0;
  for (let i = 0; i < rangos.length; i++) {
    const res_error = (FE[i] - FO[i]) ** 2 / FE[i];
    X2_calculado_sum += res_error;
    X2_calculado.push(res_error);
  }
  const X2_critico = x2_criticos[rangos.length - 2];
  return {
    rangos,
    FO,
    FE,
    X2_calculado,
    X2_calculado_sum,
    X2_critico,
  };
};
