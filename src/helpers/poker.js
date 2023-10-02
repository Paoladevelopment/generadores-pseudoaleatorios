const countOcurrence = (datos, dato) => {
  let count = 0;
  for (let i = 0; i < datos.length; i++) {
    if (datos[i] == dato) count += 1;
  }

  return count;
};

const add0toString = (num) => {
  const cifras = num.toString().split('').length;
  let formattedNum = num.toString();
  for (let i = cifras; i <= 6; i++) {
    formattedNum += '0';
  }

  console.log(formattedNum);
  return formattedNum;
};

const valorPokerCritico = {
  3: 7.815,
  5: 12.592,
};

const probabilidadK3 = [0.72, 0.27, 0.01];
const probabilidadK5 = [0.3024, 0.504, 0.108, 0.009, 0.072, 0.0045, 0.0001];

const categoriaK3 = [
  'Todos diferentes (TD)',
  'Exactamente 1 par (1P)',
  'Tercia (T)',
];

const categoriaK5 = [
  'Todos diferentes (TD)',
  'Exactamente 1 par (1P)',
  '2 pares (2P)',
  '1 tercia y 1 par (TP)',
  'Tercia (T)',
  'Póker (P)',
  'Quintilla (Q)',
];

const getFEfor3 = (nDatos) => {
  const FE = [];
  for (const probabilidad of probabilidadK3) {
    FE.push(probabilidad * nDatos);
  }

  return FE;
};

const getFOfor3 = (datos) => {
  const FO = [];
  let tercia = 0;
  let par = 0;
  let pachuca = 0;
  for (const dato of datos) {
    const primer_digito = Math.floor((dato * 10) % 10);
    const segundo_digito = Math.floor((dato * 100) % 10);
    const tercer_digito = Math.floor((dato * 1000) % 10);
    const par1 = primer_digito === segundo_digito;
    const par2 = primer_digito === tercer_digito;
    const par3 = segundo_digito === tercer_digito;
    if (primer_digito === segundo_digito && segundo_digito === tercer_digito) {
      tercia += 1;
    }
    if (
      (par1 && primer_digito !== tercer_digito) ||
      (par2 && primer_digito !== segundo_digito) ||
      (par3 && segundo_digito !== primer_digito)
    ) {
      par += 1;
    }
    if (
      primer_digito !== segundo_digito &&
      primer_digito !== tercer_digito &&
      segundo_digito !== tercer_digito
    ) {
      pachuca += 1;
    }
  }
  FO.push(pachuca);
  FO.push(par);
  FO.push(tercia);

  return FO;
};

const getFEfor5 = (nDatos) => {
  const FE = [];
  for (const probabilidad of probabilidadK5) {
    FE.push(probabilidad * nDatos);
  }

  return FE;
};

const getFOfor5 = (datos) => {
  const FO = [];
  let quintilla = 0; //todos iguales: 0.88888
  let poker = 0; //4 digitos iguales, 1 diferente: 0.99991
  let tercia = 0; //3 digitos iguales, 2 diferentes: 0.57000
  let full = 0; //1par, 1 tercia: 0.44411
  let dosPares = 0; //2 pares, 2 pares, 1 diferente: 0.88969
  let par = 0; //1 par, 3 diferentes
  let pachuca = 0; //todos diferentes: 0.56329
  for (const num of datos) {
    const digitos = add0toString(num)
      .split('')
      .slice(2, 7)
      .map((digito) => parseInt(digito, 10));

    if (new Set(digitos).size === 1) {
      quintilla += 1;
    }

    if (new Set(digitos).size === 5) {
      pachuca += 1;
    }

    const repeticionNum = digitos.map(
      (digito) => digitos.filter((d) => d === digito).length
    );

    console.log(repeticionNum);

    if (repeticionNum.includes(4) && repeticionNum.includes(1)) {
      poker += 1;
    }
    if (repeticionNum.includes(3) && repeticionNum.includes(1)) {
      tercia += 1;
    }

    if (repeticionNum.includes(3) && repeticionNum.includes(2)) {
      full += 1;
    }

    if (repeticionNum.includes(2) && repeticionNum.includes(1)) {
      if (countOcurrence(repeticionNum, 1) === 3) par += 1;

      if (countOcurrence(repeticionNum, 1) === 1) dosPares += 1;
    }
  }

  FO.push(pachuca);
  FO.push(par);
  FO.push(dosPares);
  FO.push(full);
  FO.push(tercia);
  FO.push(poker);
  FO.push(quintilla);

  return FO;
};

const getX2calculado = (FE, FO) => {
  const X2_calculado = [];
  let X2_calculado_sum = 0;
  for (let i = 0; i < FE.length; i++) {
    const res_error = (FE[i] - FO[i]) ** 2 / FE[i];
    X2_calculado_sum += res_error;
    X2_calculado.push(res_error);
  }

  return [X2_calculado, X2_calculado_sum];
};

const pruebaPoker3 = (datos) => {
  const FE = getFEfor3(datos.length);
  const FO = getFOfor3(datos);
  const [X2_calculado, X2_calculado_sum] = getX2calculado(FE, FO);
  return {
    categorias: categoriaK3,
    FO,
    FE,
    X2_calculado,
    X2_calculado_sum,
    X2_critico: valorPokerCritico['3'],
  };
};

const pruebaPoker5 = (datos) => {
  const FE = getFEfor5(datos.length);
  const FO = getFOfor5(datos);
  const [X2_calculado, X2_calculado_sum] = getX2calculado(FE, FO);
  return {
    categorias: categoriaK5,
    FO,
    FE,
    X2_calculado,
    X2_calculado_sum,
    X2_critico: valorPokerCritico['5'],
  };
};

export const poker = (datos, tipoPoker) => {
  switch (tipoPoker) {
    case 3:
      return pruebaPoker3(datos);

    case 5:
      return pruebaPoker5(datos);
  }
};

/*const datos = [
  0.72484, 0.48999, 0.50502, 0.39528, 0.36782, 0.90234, 0.7189, 0.61234,
  0.86322, 0.94134, 0.99872, 0.27657, 0.34565, 0.02345, 0.67347, 0.10987,
  0.25678, 0.25593, 0.82345, 0.12387, 0.05389, 0.82474, 0.59289, 0.36782,
  0.03991, 0.10461, 0.93716, 0.16894, 0.98953, 0.73231,
];
console.log(poker(datos, 5));
*/
