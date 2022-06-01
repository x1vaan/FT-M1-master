'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let divisor = 2;
  while(num > 1){
  if(num % divisor === 0){
       array.push(divisor);
      num = num/divisor;
   }
   else{
     divisor++
   }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
   for(var i = 0; i< array.length  ; i++){
     for(var x = 0; x<array.length ; x++){
        if (array[x] > array[x+1]){
           var temp = array[x];
           array[x] = array[x+1]
           array[x+1] = temp;
        }  
      }
   }
   return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
   //       i   
  //1,3,5,4,2,4,5 
//        x x+1
 //      i 
// 1,3,5,2,4,4,5 
 //    x x+1    
  for(var i = 1  ;i<array.length  ;i++){
      var x = i-1;
      while (x>=0 && array[x+1] < array[x]){
        var respaldo = array[x+1]
        array[x+1] = array[x];
        array[x] = respaldo;
        x--;
      }
 }
 return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 //   i 
  // [3,2,6,8,1]
//           min            
for(var i = 0 ; i<array.length ; i++){
   var min = i;
   for(var x=i+1  ;x<array.length ; x++){
     if(array[x]<array[min]){
        min = x;
     }
   }
    let respaldo = array[i]
    array[i] = array[min]
    array[min] = respaldo;
 } 
 return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
