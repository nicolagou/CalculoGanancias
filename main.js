//Calculo de ganancias si hago factura A y si facturo los gastos

const precioFactura = document.querySelector("#precioFactura"),
    precioCosto = document.querySelector("#precioCosto"),
    valorIibb = document.querySelector("#valorIibb"),
    valorIg = document.querySelector("#valorIg"),
    valorIva = document.querySelector("#valorIva"),
    valorIvaCompra = document.querySelector("#valorIvaCompra"),
    tbody = document.querySelector("#table-body"),
    tbodyVer = document.querySelector("#table-bodyVer"),
    btnCargar = document.querySelector("#btnCargar");

const datosFacturas = JSON.parse(localStorage.getItem("datosFacturas")) || [];
const datosVerFacturas = JSON.parse(sessionStorage.getItem("datosVerFacturas")) || [];

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
        
        let {precioFactura, precioCosto, valorIibb, valorIg, valorIva, valorIvaCompra, facturaSinIva, gastosSinIva, resultadoIibb, resultadoI, ganancia} = item;
        
        html = `<tr>
                  <td>${precioFactura}</td>
                  <td>${precioCosto}</td>
                  <td>${valorIibb}</td>
                  <td>${valorIg}</td>
                  <td>${valorIva}</td>
                  <td>${valorIvaCompra}</td>
                    <td>${facturaSinIva}</td>
                    <td>${gastosSinIva}</td>
                    <td>${resultadoIibb}</td>
                    <td>${resultadoIg}</td>
                    <td>${ganancia}</td>
              </tr>`;

        arr === datosFacturas ? tbody.innerHTML += html : tbodyVer.innerHTML += html;
        }
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
    localStorage.setItem("datosFacturas", JSON.stringify(datosFacturas));

    //agregado botton que confirma la carga de los datos
    Toastify({
        text: "Factura Cargada",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

});

btnVer.addEventListener("click", () => {
    const nuevaFactura = new crearDatosFactura(
        precioFactura.value,
        precioCosto.value,
        valorIibb.value,
        valorIg.value,
        valorIva.value,
        valorIvaCompra.value,
    );

    cargarFactura(datosVerFacturas, nuevaFactura);
    //resetar el html de la tabla
    tbodyVer.innerHTML = "";
    crearTablaHtml(datosVerFacturas);
    sessionStorage.setItem("datosVerFacturas", JSON.stringify(datosVerFacturas));
});

fetch ("./data.json")
.then (response=>response.json())
.then (data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})