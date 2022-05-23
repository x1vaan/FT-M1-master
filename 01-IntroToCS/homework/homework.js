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
  while(num > 0){
        nuevoarray.unshift(num % 2)
        num = Math.floor(num/2);
  }
  return nuevoarray.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}