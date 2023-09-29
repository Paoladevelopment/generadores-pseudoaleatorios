import { generar_rangos, string_rangos } from './manejoRangos';

const getFOA = (FO) => {
  const FOA = [FO[0]];
  for (let i = 1; i < FO.length; i++) {
    FOA.push(FOA[i - 1] + FO[i]);
  }
  return FOA;
};

const getPOA = (FOA) => {
  const totalData = FOA[FOA.length - 1];
  const POA = [];
  for (let i = 0; i < FOA.length; i++) {
    POA.push(FOA[i] / totalData);
  }
  return POA;
};

const getPEA = (FE, totalData) => {
  const PEA = [FE[0] / totalData];
  for (let i = 1; i < FE.length; i++) {
    const nextValue = parseFloat(PEA[i - 1]) + FE[i] / totalData;
    PEA.push(nextValue.toFixed(1));
  }

  return PEA;
};

const getDMcalc = (POA, PEA) => {
  const DMcalc = [];
  for (let i = 0; i < POA.length; i++) {
    DMcalc.push(Math.abs(PEA[i] - POA[i]));
  }

  return DMcalc;
};

export const prueba_kolmogorov = (datos, nroRangos) => {
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

  const FOA = getFOA(FO);
  const POA = getPOA(FOA);
  const PEA = getPEA(FE, nDatos);
  const DMcalc = getDMcalc(POA, PEA);
  const DM_critico = 1.36 / Math.sqrt(nDatos);
  return {
    rangos: string_rangos(rangos),
    FO,
    FOA,
    POA,
    PEA,
    DMcalc,
    DM_critico,
    DMcalcValue: Math.max(...DMcalc),
  };
};
