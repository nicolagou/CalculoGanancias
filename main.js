//Calculo de ganancias si hago factura A y si facturo los gastos

const precioFactura = document.querySelector("#precioFactura"),
    precioCosto = document.querySelector("#precioCosto"),
    valorIibb = document.querySelector("#valorIibb"),
    valorIg = document.querySelector("#valorIg"),
    valorIva = document.querySelector("#valorIva"),
    valorIvaCompra = document.querySelector("#valorIvaCompra"),
    tbody = document.querySelector("#table-body"),
    btnCargar = document.querySelector("#btnCargar");

const datosFacturas = [] || JSON.parse(localStorage.getItem("datosFacturas"));

let facturaSinIva = 0
let gastosSinIva = 0
let resultadoIibb = 0
let resultadoIg = 0
let Ganancia = 0

// CONSTRUCTOR crear un objeto (datos de factura) para el array (lista de facturas)
function crearDatosFactura(precioFactura, precioCosto, valorIibb, valorIg, valorIva, valorIvaCompra) {
    this.precioFactura = precioFactura;
    this.precioCosto = precioCosto;
    this.valorIibb = valorIibb;
    this.valorIg = valorIg;
    this.valorIva = valorIva;
    this.valorIvaCompra = valorIvaCompra;
    this.facturaSinIva = ((this.precioFactura / (1 + this.valorIva / 100))).toFixed(2);
    this.gastosSinIva = (this.precioCosto / (1 + this.valorIvaCompra / 100)).toFixed(2);
    this.resultadoIibb = (this.precioFactura / (1 + this.valorIva / 100) * (this.valorIibb / 100)).toFixed(2);
    this.resultadoIg = ((this.facturaSinIva - this.gastosSinIva) * (this.valorIg / 100)).toFixed(2)
    this.ganancia = ((this.facturaSinIva - this.gastosSinIva - this.resultadoIibb - this.resultadoIg)).toFixed(2)
}

//Cargar al array las nuevas facturas
function cargarFactura(arr, obj) {
    arr.push(obj);
}

//Manipular el DOM
function crearTablaHtml(arr) {
    let html = "";
    for (const item of arr) {
        html = `<tr>
                  <td>${item.precioFactura}</td>
                  <td>${item.precioCosto}</td>
                  <td>${item.valorIibb}</td>
                  <td>${item.valorIg}</td>
                  <td>${item.valorIva}</td>
                  <td>${item.valorIvaCompra}</td>
                    <td>${item.facturaSinIva}</td>
                    <td>${item.gastosSinIva}</td>
                    <td>${item.resultadoIibb}</td>
                    <td>${item.resultadoIg}</td>
                    <td>${item.ganancia}</td>
              </tr>`;
        tbody.innerHTML += html;
    }
    localStorage.setItem("datosFacturas",JSON.stringify(datosFacturas))
}

//Listeners
btnCargar.addEventListener("click", () => {
    const nuevaFactura = new crearDatosFactura(
        precioFactura.value,
        precioCosto.value,
        valorIibb.value,
        valorIg.value,
        valorIva.value,
        valorIvaCompra.value,
        );

    cargarFactura(datosFacturas, nuevaFactura);
    //resetar el html de la tabla
    tbody.innerHTML = "";
    crearTablaHtml(datosFacturas);
});

