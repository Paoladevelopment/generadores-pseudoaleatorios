const LCG_not_nDatos = (x0, a, c, m) => {
  const xn = [x0];
  const rn = [x0 / m];
  let x_index = 0;
  while (true) {
    let next_value = (a * xn[x_index] + c) % m;
    if (xn.includes(next_value)) break;
    xn.push(next_value);
    rn.push(next_value / m);
    x_index++;
  }
  return {
    xn,
    rn,
    periodo: xn.length,
  }
};


const LCG_nDatos = (x0, a, c, m, n) => {
  const xn = [x0];
  const rn = [x0 / m];
  let seRepite = false;
  let periodo= null;
  for (let x_index = 0; x_index < n-1; x_index++) {
    let next_value = (a * xn[x_index] + c) % m;
    if (xn.includes(next_value) && !seRepite) {
      periodo = xn.length;
      seRepite = true;
    }
    xn.push(next_value);
    rn.push(next_value / m);
  }

  return {
    xn,
    rn,
    periodo,
  }
}

export const LCG = (x0, a, c, m, n = 0) => {
  console.log(x0);
  if(x0 === 0) return {error: "Se debe ingresar una semilla mayor a 0"};
  if(a === 0) return {error: "Se debe ingresar un valor de a mayor a 0"};
  if(x0 === 0 && a === 0) return {error: "Se debe ingresar un valor de a y una semilla mayor a 0"};
  if(n === 0) return LCG_not_nDatos(x0, a, c, m);
  return LCG_nDatos(x0,a,c,m,n);

}
