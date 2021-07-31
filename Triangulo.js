"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    ///    
    function Triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    ;
    ////
    Triangulo.prototype.getVertice1 = function () {
        return this.vertice1;
    };
    ;
    Triangulo.prototype.setVertice1 = function (nuevoVertice1) {
        this.vertice1 = nuevoVertice1;
    };
    ;
    Triangulo.prototype.getVertice2 = function () {
        return this.vertice2;
    };
    ;
    Triangulo.prototype.setVertice2 = function (nuevoVertice2) {
        this.vertice2 = nuevoVertice2;
    };
    ;
    Triangulo.prototype.getVertice3 = function () {
        return this.vertice3;
    };
    ;
    Triangulo.prototype.setVertice3 = function (nuevoVertice3) {
        this.vertice3 = nuevoVertice3;
    };
    ;
    Triangulo.prototype.calcularLongitudLados = function () {
        var calculoTrianguloLados;
        var primerLado = this.vertice1.calcularDistancia(this.vertice2);
        var segundoLado = this.vertice2.calcularDistancia(this.vertice3);
        var tercerLado = this.vertice3.calcularDistancia(this.vertice1);
        return calculoTrianguloLados = [primerLado, segundoLado, tercerLado];
    };
    ;
    return Triangulo;
}());
exports.Triangulo = Triangulo;
