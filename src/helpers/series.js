function prueba_series(datos) {
  const tabla = [
    3.841, 5.991, 7.815, 9.488, 11.07, 12.592, 14.067, 15.507, 16.919, 18.307,
    19.675, 21.026, 22.362, 23.685, 24.996, 26.296, 27.587, 28.869, 30.144,
    31.41, 32.671, 33.924, 35.172, 36.415, 37.652, 38.885, 40.113, 41.337,
    42.557, 43.773,
  ];
  const k = 2;
  const numGrupos = Math.floor(datos.length / k);
  const clases = Math.ceil(Math.sqrt(numGrupos));
  const intervalos = Math.ceil(Math.pow(Math.sqrt(numGrupos), 1 / k));
  const fE = numGrupos / clases;
  const gl = clases - 1;
  let conclusion = 'El generador no es bueno porque el chi-cálculado es mayor al chi-cuadrado crítico';

  // Generar los límites
  const amplitud = 1 / 5;
  let limiteInf = 0;
  const limites = [];
  for (let i = 0; i < 5; i++) {
    const par = [limiteInf, limiteInf + amplitud];
    limites.push(par);
    limiteInf += amplitud;
  }

  // Organizar los números en pares
  const pares = [];
  for (let i = 0; i < datos.length; i += 2) {
    const par = [datos[i], datos[i + 1]];
    pares.push(par);
  }

  // Llenar la matriz de ceros
  const matriz = [];
  for (let i = 0; i < 5; i++) {
    const fila = Array(5).fill(0);
    matriz.push(fila);
  }

  // Hallar la frecuencia obtenida para cada intervalo
  for (let i = 0; i < numGrupos; i++) {
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        if (
          pares[i][0] >= limites[x][0] &&
          pares[i][0] < limites[x][1] &&
          pares[i][1] >= limites[y][0] &&
          pares[i][1] < limites[y][1]
        ) {
          matriz[x][y] += 1;
        }
      }
    }
  }

  // Llenar la matriz de ceros
  const matrizChiCuadrado = [];
  for (let i = 0; i < 5; i++) {
    const fila = Array(5).fill(0);
    matrizChiCuadrado.push(fila);
  }

  // Prueba chi-cuadrado
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const fO = matriz[i][j];
      matrizChiCuadrado[i][j] = Math.pow(fE - fO, 2) / fE;
    }
  }

  let suma = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      suma += matrizChiCuadrado[i][j];
    }
  }

 
  const cellProbability = 1 / clases
  const chiCritico = tabla[gl-1];

  if (suma <= tabla[gl - 1]) {
    conclusion = "El generador es bueno en cuanto a independencia"
  }

  return {
    matrizChiCuadrado,
    clases,
    intervalos,
    cellProbability,
    fE,
    gl,
    chiCritico,
    conclusion,
    suma
  };
}

export default prueba_series;
