"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    //
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    //
    Punto.prototype.toString = function () {
        var coordenadaX = this.x.toString();
        var coordenadaY = this.y.toString();
        return ("(" + coordenadaX + "," + coordenadaY + ")");
    };
    ;
    Punto.prototype.getX = function () {
        return this.x;
    };
    ;
    Punto.prototype.setX = function (nuevaX) {
        this.x = nuevaX;
    };
    ;
    Punto.prototype.getY = function () {
        return this.y;
    };
    ;
    Punto.prototype.setY = function (nuevaY) {
        this.y = nuevaY;
    };
    ;
    Punto.prototype.distanciaAlOrigen = function () {
        var distancia = Math.sqrt((Math.pow(this.getX(), 2)) + (Math.pow(this.getY(), 2)));
        return distancia;
    };
    ;
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var distanciaOtroPunto = Math.sqrt(Math.pow((this.getX() - otroPunto.getX()), 2)
            + Math.pow((this.getY() - otroPunto.getY()), 2));
        return distanciaOtroPunto;
    };
    ;
    Punto.prototype.calcularCuadrante = function () {
        if (this.getX() == 0 || this.getY() == 0) {
            return "Devuelve 0";
        }
        else if (this.getX() > 0 && this.getY() > 0) {
            return "Devuelve 1";
        }
        else if (this.getX() < 0 && this.getY() > 0) {
            return "Devuelve 2";
        }
        else if (this.getX() < 0 && this.getY() < 0) {
            return "Devuelve 3";
        }
        else if (this.getX() > 0 && this.getY() < 0) {
            return "Devuelve 4";
        }
    };
    ;
    Punto.prototype.calcularMasCercano = function (punto1) {
        var cercanoPunto;
        for (var i = 0; i < punto1.length - 1; i++) {
            if (this.calcularDistancia(punto1[i]) < this.calcularDistancia(punto1[0])) {
                cercanoPunto = punto1[i];
            }
            ;
        }
        ;
        return cercanoPunto;
    };
    ;
    return Punto;
}());
exports.Punto = Punto;
