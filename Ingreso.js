import Dato from './Dato';

class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }

    get id() {
        return this._id;
    }
}

export default Ingreso;
