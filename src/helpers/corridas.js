function prueba_independencia_corridas(datos) {
  const signos = [];
  const z = [-1.96, 1.96];
  let n1 = 0;
  let n2 = 0;
  let conclusion = "Se rechaza la hipotesis de independencia";

  for (let i = 0; i < datos.length - 1; i++) {
    if (datos[i] < datos[i + 1]) {
      signos.push("+");
      n1 += 1;
    } else {
      signos.push("-");
      n2 += 1;
    }
  }

  let cantCorridas = 1;
  for (let i = 0; i < signos.length - 1; i++) {
    if (signos[i] !== signos[i + 1]) {
      cantCorridas += 1;
    }
  }

  const n = datos.length;
  const media = (2 * n - 1) / 3;
  const varianza = Math.sqrt((16 * n - 29) / 90);
  const zObs = (cantCorridas - media) / varianza;

  if (zObs > z[0] && zObs < z[1]) {
    conclusion = "No hay evidencia para rechazar la hipotesis de independencia";
  }

  return {
    n1,
    n2,
    cantCorridas,
    media,
    varianza,
    zObs,
    z,
    signos,
    conclusion
  };
}

export default prueba_independencia_corridas;
