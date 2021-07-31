import { Punto } from "./punto";
import {Triangulo} from "./triangulo";

let coordenadas1: Punto = new Punto(10,5);

console.log("Imprimir Coordenadas");
console.log(coordenadas1.toString());

console.log("Distancia al origen (0.0)");
console.log(coordenadas1.distanciaAlOrigen());

let coordenadas2: Punto = new Punto(25,15);

console.log("Distancia al Punto 2");
console.log(coordenadas1.calcularDistancia(coordenadas2));

let coordenadas3: Punto = new Punto(1,3);
let arrayPuntos = [coordenadas2,coordenadas3];

console.log("Cuadrante");
console.log(coordenadas3.calcularCuadrante());
console.log("Calcular mas cercanos");
console.log(coordenadas1.calcularMasCercano(arrayPuntos));

let arrayLados: Triangulo = new Triangulo(coordenadas1, coordenadas2, coordenadas3);

console.log("Calcular lados triangulo");
console.log(arrayLados.calcularLongitudLados());