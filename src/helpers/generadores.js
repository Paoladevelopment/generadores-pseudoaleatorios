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

const GEM_not_nDatos = (x0, a, m) => {
  let r = m % a;
  let q = Math.floor(m / a);
  m = a * q + r;
  let xn_actual = x0;
  const xn = [];
  const rn = [];
  while (true) {
    if (a * (x0 % q) - r * Math.floor(x0 / q) >= 0) {
      xn_actual = (a * (xn_actual % q) - r * Math.floor(x0 / q)) % m;
    } else {
      xn_actual = (a * (xn_actual % q) - r * Math.floor(x0 / q) + m) % m;
    }
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

const GEM_nDatos = (x0, a, m, n) => {
  let r = m % a;
  let q = Math.floor(m / a);
  m = a * q + r;
  let xn_actual = x0;
  const xn = [];
  const rn = [];
  let seRepite = false;
  let periodo = null;
  for (let x_index = 0; x_index < n; x_index++) {
    if (a * (x0 % q) - r * Math.floor(x0 / q) >= 0) {
      xn_actual = (a * (xn_actual % q) - r * Math.floor(x0 / q)) % m;
    } else {
      xn_actual = (a * (xn_actual % q) - r * Math.floor(x0 / q) + m) % m;
    }
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
  if (n === 0 && c !== 0) return LCG_not_nDatos(x0, a, c, m);
  if (c !== 0) return LCG_nDatos(x0, a, c, m, n);
  if (n === 0 && c === 0) return GEM_not_nDatos(x0, a, m);
  return GEM_nDatos(x0, a, m, n);
};

export const randomGenerator = (n) => {
  const xn = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.random();
    xn.push(randomNumber);
  }
  const rn = xn;
  return {
    xn,
    rn,
  };
};
