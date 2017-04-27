'use strict'

/**
* Creación de paquetes npm - Triangle
*
* https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-gabriel-danid-danir-l1-rectangle
*
* Gabriel Fernández Castro
*
* Team: gabriel-danid-danir-l1
* 
* Modulo npm con el código de la clase Rectangle un método para calcular el área
* 
* @class Rectangle
* @param {hash} options Ancho y Alto 
*/
let Shape = require('../lib/shapesarea.js');
class Rectangle extends Shape {
    constructor(options) {
      super(options)
    }
    /**
     * La función area calcula el área de un rectángulo
     * @param hereda directamente de Shape
     * @return {number} devuelve el área de un rectángulo
    */
    area() {
      return this.width * this.height;
    }
}
Shape.Shapes.Rectangle = Rectangle;
module.exports = Rectangle;
