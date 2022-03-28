let locales = parseInt(prompt("Ingrese la la cantidad de locales comerciales"));
function sumLoc() {
  let i;
  let suma = 0;
  let num;
  let promedio;
  for(i = 1; i <= locales; i++){
      num = parseInt(prompt('Ingrese la cantidad recaudada en el local ' + i));
      suma += num;
  }
  promedio = suma / locales;
    alert('El promedio de venta en las tiendas es de: '+ promedio);  
}
sumLoc();

