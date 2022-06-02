"use strict";

const { convertErrorToString } = require("@11ty/eleventy/src/EleventyErrorUtil");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value,
  this.left = null,
  this.right = null;
}

BinarySearchTree.prototype.size = function(){ 
      if(!this.value) return 0;
       var suma = 0;
       suma++
       if(this.left && this.right){
         return suma + this.left.size() + this.right.size();
       }
       if(this.left){
         return suma + this.left.size();
       }
       if(this.right){
         return suma + this.right.size()
       }
       return suma;
}

BinarySearchTree.prototype.insert = function(value){
    if(value < this.value){
        if(!this.left){
          this.left = new BinarySearchTree(value);
          return;
        }
           var raiz = this.left ;       
        return raiz.insert(value)
    }
    else {value > this.value}{
      if(!this.right){
        this.right = new BinarySearchTree(value)
        return;
      }
      var raiz2 = this.right;
      return raiz2.insert(value)
    }
}

BinarySearchTree.prototype.contains = function(value){
      if(this.value ===  value){
        return true;
      }
     else if(this.left && this.right){
        return this.left.contains(value) || this.right.contains(value)
     }
    else if(this.left){
       return this.left.contains(value);
     }
    else if(this.right){
       return this.right.contains(value);
     }
     return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, traversal){
  if (traversal === 'in-order') {
    if(this.left) this.left.depthFirstForEach(cb, traversal);
     cb(this.value);
     if(this.right) this.right.depthFirstForEach(cb, traversal);
     return;
   }
     else if (traversal === 'pre-order'){
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb, traversal);
     if(this.right) this.right.depthFirstForEach(cb, traversal);
     return;
     }
     else if(traversal === 'post-order'){
      if(this.left) this.left.depthFirstForEach(cb, traversal);
      if(this.right) this.right.depthFirstForEach(cb, traversal);
      cb(this.value);
      return;
     }
     if(this.left) this.left.depthFirstForEach(cb, traversal);
     cb(this.value);
     if(this.right) this.right.depthFirstForEach(cb, traversal);
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
  cb(this.value);
    if(!this.left && !this.right){
      array.push(this.left) ;
      array.push(this.right);
      return this.left.breadthFirstForEach(cb,array) && this.right.breadthFirstForEach(cb)
    }
    
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
