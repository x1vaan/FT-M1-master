'use strict'

function BinarioADecimal(num) {
  num = Array.from(num);
  num.reverse();
    var suma = 0;
  for(var i = 0	; i < num.length	; i++ ){
   suma = suma + num[i] * Math.pow(2,i);
   }
    return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
   var nuevoarray = [];
  while(Math.floor(num / 2 != 0)){
      nuevoarray.unshift(Math.floor(num % 2));
  }
  nuevoarray.join('');
  return nuevoarray;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}