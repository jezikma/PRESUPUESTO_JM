import Egreso from './Egreso.js';
import Ingreso from './Ingreso.js';

//Convertir "un valor" a MX
const formatoMoneda = valor => {
    return valor.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
};
//Convertir "un valor" a porcentaje c/2 dígitos
const formatoPorcentaje = valor => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2
    });
};

let ingresos =[
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000)
];

let egresos=[
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
];
  
const cargarCabecero = () => {

    const totalIngresos = () => {
        let totalIngreso = 0;
        for (let i of ingresos) {
            totalIngreso += i.valor;
        }
        return totalIngreso;
    }

    const totalEgresos = () => {
        let totalEgreso = 0;
        for (let egreso of egresos) {
            totalEgreso += egreso.valor;
        }
        return totalEgreso;
    }

    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
};

const cargarApp = () =>{
  cargarCabecero();
}


cargarApp();
