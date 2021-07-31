import { Punto } from "./punto";

export class Triangulo{
    private vertice1: Punto;
    private vertice2: Punto;
    private vertice3: Punto;
///    
    constructor(vertice1: Punto, vertice2: Punto, vertice3: Punto){
        this.vertice1= vertice1;
        this.vertice2= vertice2;
        this.vertice3= vertice3;
    };
////
    public getVertice1(): Punto{
        return this.vertice1;
    };
    public setVertice1(nuevoVertice1: Punto){
        this.vertice1 = nuevoVertice1;
    };
    public getVertice2(): Punto{
        return this.vertice2;
    };
    public setVertice2(nuevoVertice2: Punto){
        this.vertice2 = nuevoVertice2;
    };
    public getVertice3(): Punto{
        return this.vertice3;
    };
    public setVertice3(nuevoVertice3: Punto){
        this.vertice3 = nuevoVertice3;
    };
    public calcularLongitudLados(){
        let calculoTriLados: number[];
        let primerLado= this.vertice1.calcularDistancia(this.vertice2);
        let segundoLado= this.vertice2.calcularDistancia(this.vertice3);
        let tercerLado= this.vertice3.calcularDistancia(this.vertice1);
        return calculoTriLados = [primerLado,segundoLado,tercerLado];
    };
}