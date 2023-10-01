const valorPokerCritico = {
  3: 7.815,
  5: 12.592,
};

const probabilidadK3 = [0.72, 0.27, 0.01];

const categoriaK3 = [
  'Todos diferentes (TD)',
  'Exactamente 1 par (1P)',
  'Tercia (T)',
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

export const poker = (datos, tipoPoker) => {
  switch (tipoPoker) {
    case 3:
      return pruebaPoker3(datos);
  }
};
