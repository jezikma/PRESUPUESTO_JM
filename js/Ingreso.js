import Dato from "./Dato.js";

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


/* const cargarIngresos = () => {
    let ingresosHTML = '';

    for (const ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    // Assuming you have an element with id 'lista-ingresos' in your HTML
    const listaIngresosElement = document.getElementById('lista-ingresos');
    
    // Assign the HTML content to the 'lista-ingresos' element
    if (listaIngresosElement) {
        listaIngresosElement.innerHTML = ingresosHTML;
    }
}; */

/* const crearIngresoHTML = (ingreso) => {
    // Implement this function to create HTML for each income item
    // For example, you might create a <div> or <li> element for each income
    // and format the description and value accordingly.
    // Return the HTML string for each income item.
    return `<div>${ingreso.descripcion}: ${ingreso.valor}</div>`;
};

// Call cargarIngresos to dynamically load income items
cargarIngresos(); */


/* const crearIngresoHTML = (ingreso) => {
    const ingresoHTML = `
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
    `;

    return ingresoHTML;
};

// Assuming you have an element with id 'lista-ingresos' in your HTML
const listaIngresosElement = document.getElementById('lista-ingresos');

// Call cargarIngresos to dynamically load income items
cargarIngresos();

// Dummy function for eliminarIngreso (you need to implement it based on your needs)
const eliminarIngreso = (ingresoId) => {
    console.log(`Eliminar ingreso with id: ${ingresoId}`);
};
 */
export default Ingreso;