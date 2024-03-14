import Egreso from "./Egreso.js";
import Ingreso from "./Ingreso.js";

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
        maximumFractionDigits:2
    });
};
const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
};


let ingresos =[
    new Ingreso('Salario', 20000),

    new Ingreso('Renta', 5000),
];
ingresos.push(new Ingreso('Bono', 3000))

let egresos=[
    new Egreso('Renta', 4000),
];
egresos.push(new Egreso('Despensa', 4500))

const d = document;

const cargarCabecero=()=>{

    const totalIngresos=()=>{
        let totalIngreso=0;
        for (let i of ingresos) {
            totalIngreso += i.valor;
        }
        return totalIngreso;
    }

    const totalEgresos=()=>{
        let totalEgreso=0;
        for (let egreso of egresos) {
            totalEgreso += egreso.valor;
        }
        return totalEgreso;
    }

    let presupuesto=(totalIngresos()-totalEgresos());
    let porcentajeEgreso= (totalEgresos()/totalIngresos());

d.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
d.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
d.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
d.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
return {totalIng: totalIngresos};
}

function crearIngresoHTML(ingreso) {
    let ingresoHTML = `
    <div id="lista_ingresos"
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="eliminarIngreso(${ingreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
};

function cargarIngresos() {
    let ingresosHTML='';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    const listaIngresos=d.getElementById('lista_ingresos').innerHTML = ingresosHTML;

    cargarEgresos(); 
}
function eliminarIngreso(id){
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id ===id);
    if(indiceEliminar !== -1){
        ingresos.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarIngresos();
        cargarEgresos();
    }
};

function crearEgresoHTML(egreso) {

    var cC = cargarCabecero();

    let egresoHTML = `
    <div id="lista_egresos"
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/cC.totalIng())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
};

function cargarEgresos() {
    let egresosHTML='';
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    const listaEgresos=d.getElementById('lista_egresos').innerHTML = egresosHTML;
}

function eliminarEgreso(id){
    let indiceEliminar = egresos.findIndex(egreso => egreso.id ===id);
    if(indiceEliminar !== -1){
        egresos.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarEgresos();
    }
}

function agregarDato() {

    const forma = d.getElementById('forma');
    const tipo = forma.querySelector('#tipo').value;
    const descripcion = forma.querySelector('#descripcion').value;
    const valor = forma.querySelector('#valor').value;
    

    if (descripcion.trim() !== '' && valor.trim() !== '') {

        if (tipo === 'ingreso') {
        ingresos.push(new Ingreso(descripcion, parseFloat(valor)));
        cargarCabecero();
        cargarIngresos();
        } else if (tipo === 'egreso') {
        egresos.push(new Egreso(descripcion, parseFloat(valor)));
        cargarCabecero();
        cargarEgresos();
        }
    }
};


const cargarApp=()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};

d.addEventListener("DOMContentLoaded", cargarApp());
window.eliminarEgreso = eliminarEgreso;
window.eliminarIngreso = eliminarIngreso;
window.agregarDato = agregarDato;