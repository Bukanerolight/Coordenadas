export class Punto{
    private x: number;
    private y: number;
//
    constructor(x: number, y: number){
        this.x= x;
        this.y= y;
    };
//
    public toString(): string{   
        let coordenadaX= this.x.toString();
        let coordenadaY=this.y.toString();
        return ("("+coordenadaX + "," + coordenadaY+")")
    };
    public getX(): number{
        return this.x;
    };
    public setX(nuevaX: number){
        this.x = nuevaX;
    };
    public getY(): number{
        return this.y;
    };
    public setY(nuevaY: number) {
        this.y = nuevaY;
    };
    public distanciaAlOrigen(): number{   
        let distancia:number= Math.sqrt((this.getX()**2)+(this.getY()**2));
        return distancia;
    };
    public calcularDistancia(otroPunto:Punto): number{
        let distanciaOtroPunto: number= Math.sqrt((this.getX()-otroPunto.getX())**2
                                                +(this.getY()-otroPunto.getY())**2);
        return distanciaOtroPunto
    };
    public calcularCuadrante(): string{
        if (this.getX()==0 || this.getY()==0){
            return "Devuelve 0";
        }
        else if(this.getX()>0 && this.getY()>0){
            return "Devuelve 1";
        }
        else if(this.getX()<0 && this.getY()>0){
            return "Devuelve 2";
        }
        else if(this.getX()<0 && this.getY()<0){
            return "Devuelve 3"
        }
        else if(this.getX()>0 && this.getY()<0){
            return "Devuelve 4"
        }
    };
    public calcularMasCercano(punto1: Punto[]): Punto{
        let cercanoPunto: Punto;
        for(let i=0; i<punto1.length -1; i++ ){
            if (this.calcularDistancia(punto1[i])<this.calcularDistancia(punto1[0])){
                 cercanoPunto=punto1[i];
            };
        };
        return cercanoPunto;
    };
}  