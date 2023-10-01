const LCG_not_nDatos = (x0, a, c, m) => {
  let xn_actual = x0;
  const xn = [];
  const rn = [];
  while (true) {
    xn_actual = (a * xn_actual + c) % m;
    if (xn.includes(xn_actual)) break;
    xn.push(xn_actual);
    rn.push(xn_actual / m);
  }
  return {
    xn,
    rn,
    periodo: xn.length,
  };
};

const LCG_nDatos = (x0, a, c, m, n) => {
  let xn_actual = x0;
  const xn = [];
  const rn = [];
  let seRepite = false;
  let periodo = null;
  for (let x_index = 0; x_index < n; x_index++) {
    xn_actual = (a * xn_actual + c) % m;
    if (xn.includes(xn_actual) && !seRepite) {
      periodo = xn.length;
      seRepite = true;
    }
    xn.push(xn_actual);
    rn.push(xn_actual / m);
  }

  return {
    xn,
    rn,
    periodo,
  };
};

export const generador = (x0, a, c, m, n = 0) => {
  if (a === 0) return { error: 'Se debe ingresar un valor de a mayor a 0' };
  if (n === 0) return LCG_not_nDatos(x0, a, c, m);
  return LCG_nDatos(x0, a, c, m, n);
};
