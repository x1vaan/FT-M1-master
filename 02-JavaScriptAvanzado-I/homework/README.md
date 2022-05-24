
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;  // variable del contexto global
var a = 5;
var b = 10;
var c = function(a, b, c) {  // a = 8, b = 9, c = 10//   
  var x = 10;  // variable del contexto de esta funcion
  console.log(x); // 10
  console.log(a);  //  8 
  var f = function(a, b, c) {  // a= 8, b = 9, c = 10
    b = a; // b = 8
    console.log(b); // 8
    b = c; // 10
    var x = 5;
  }
  f(a,b,c); 
  console.log(b); // 9 
}
c(8,9,10); 
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // Error , esto no fue hoisteado entonces tira error
foo(); // 'Hola!'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);  // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco 
   }
})();
console.log(instructor); // Tony 
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";  
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The flash
console.log(pm); // Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 3 
"2" * "3" // 6 
4 + 5 + "px" // '9px' 
"$" + 4 + 5 // '$45'
"4" - 2   // 2 
"4px" - 2 // 2px
7 / 0 // infinity
{}[0]  
parseInt("09") // 9
5 && 2 //  2
2 && 5 //  5
5 || 0 //  0 
0 || 5 //  5
[3]+[3]-[10] // '33' - 10 = 23
3>2>1 //  true > true = false // 1 es true en binario
[] == ![]  // false
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined 
   console.log(foo()); // 2 

   var a = 1;
   function foo() {
      return 2;
   }
}
// console.log(a) es undefined por que fue hosteada y su valor fue inicializado en undefined, y al intentar acceder a la variable antes de su declaracion en linea, dara undefined.

//Y foo fue hoisteada pero  guardo su contenido entonces se puede acceder a ella antes de ser ejectuada.
test();  
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // va a devolver Meow Mix por que la condicion fue falsa entonces no se ejecuta ese codigo, y como no tenemos definido snack dentro del contexto function, se hace un scoping buscando a la variable snack del contexto global, en caso de que la condicion sea true se devuelte : Friskies 
                              // Meow Mix
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname; // Aurelio De Rosa
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname; // no se coloco el parentesis entonces lo que se guardo en esta variable fue la funcion, no fue invocada.

console.log(test()); // // Juan Perez por que getFullname: function() {
        //                                            return this.fullname; } hace referencia al objeto global 

        
      

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);  // primero
   setTimeout(function() { console.log(2); }, 1000); // cuarto
   setTimeout(function() { console.log(3); }, 0); // tercero
   console.log(4); //segundo 
}

printing();  // 1 , 4 , 3 , 2 
// printing va a devolver 1 y manda al web api  a console.log (2) y tambien a console.log(3) , va a terminar primero el 3 por que demoro menos tiempo , este se manda al event queue y atras de este 2 , cuando termine de devolver 4 y la pila este vacia, entra 3 y despues 2. 
```
