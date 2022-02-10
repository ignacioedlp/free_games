export function crearMatriz(datos) {
  //crear una funcion que haga una matriz de 20x20 con los datos
  var cantidad = datos.length / 30;
  var matriz = [];
  for (var i = 0; i < cantidad; i++) {
    matriz[i] = [];
    for (var j = 0; j < 30; j++) {
      if (datos[i * 30 + j] != undefined) {
        matriz[i][j] = datos[i * 30 + j];
      } else {
        matriz[i][j] = {};
      }
    }
  }

  return matriz;
}
