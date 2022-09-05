//Calculo de ganancias si hago factura A y si facturo los gastos

let precioFactura = 0;
let precioCosto = 0;
let valorIibb = 0;
let valorIg = 0;
let valorIva = 0;
let valorIvaCompra = 0;

const datosFacturas = []

// crear un objeto (datos de factura) para el array (lista de facturas)
function crearDatosFactura(precioFactura, precioCosto, valorIibb, valorIg, valorIva, valorIvaCompra) {
    this.precioFactura = precioFactura;
    this.precioCosto = precioCosto;
    this.valorIibb = valorIibb;
    this.valorIg = valorIg;
    this.valorIva = valorIva;
    this.valorIvaCompra = valorIvaCompra;
}

function cargarFactura(arr, valor) {
    arr.push(valor);
}

// crear objetos datos factura
for (let index = 0; index < 2; index++) {
    while (true) {
        precioFactura = parseFloat(prompt("Trabajo " + (1 + index) + ": " + "Ingrese el precio de su servicio que va a cobrar en su Factura A (numero mayor a cero)"));
        if (!isNaN(precioFactura) && precioFactura != null && precioFactura != "") {
            //es numero
            // console.log("Precio: " + precioFactura)
            precioCosto = parseFloat(prompt("Trabajo " + (1 + index) + ": " + "Ingrese los gastos facturados que le genero el servicio"));
            if (!isNaN(precioCosto) && precioCosto != null && precioCosto != "") {
                //es numero
                // console.log("Gastos: " + precioCosto)
                valorIibb = parseFloat(prompt("Trabajo " + (1 + index) + ": " + "Ingrese el % de IIBB que se le retiene segun su actividad (e.g.3.5)"));
                if (!isNaN(valorIibb) && valorIibb != null && valorIibb != "") {
                    //es numero
                    // console.log("Valor IIBB: " + valorIibb + "%")
                    valorIg = parseFloat(prompt(("Trabajo " + (1 + index) + ": " + "Ingrese el % de Impuesto a las Ganancias que se le retiene segun su actividad (e.g.30)")));
                    if (!isNaN(valorIg) && valorIg != null && valorIg != "") {
                        //es numero
                        // console.log("Valor IG: " + valorIg + "%")
                        valorIva = parseFloat(prompt("Trabajo " + (1 + index) + ": " + "Ingrese el % de IVA que se le retiene segun su actividad (e.g.21)"));
                        if (!isNaN(valorIva) && valorIva != null && valorIva != "") {
                            //es numero
                            // console.log("Valor IVA: " + valorIva + "%")
                            valorIvaCompra = parseFloat(prompt("Trabajo " + (1 + index) + ": " + "Ingrese el % de IVA que se aplico a la factura de los gastos realizados (e.g.21)"));
                            if (!isNaN(valorIvaCompra) && valorIvaCompra != null && valorIvaCompra != "") {
                                //es numero
                                // console.log("Valor IVA Compra: " + valorIvaCompra + "%")
                                break;
                            } else {
                                console.log("Ingrese un numero valido de IVA Compra");
                                continue;
                            };
                        } else {
                            console.log("Ingrese un numero valido de IVA");
                            continue;
                        };
                    } else {
                        console.log("Ingrese un numero valido de IG");
                        continue;
                    };
                } else {
                    console.log("Ingrese un numero valido de IIBB");
                    continue;
                };
            } else {
                console.log("Ingrese un numero valido de Gastos");
                continue;
            };
        } else {
            console.log("Ingrese un numero valido del monto de la factura");
            continue;
        }
    }
    const nuevaFactura = new crearDatosFactura(precioFactura, precioCosto, valorIibb, valorIg, valorIva, valorIvaCompra)
    cargarFactura(datosFacturas, nuevaFactura)

}
console.log(datosFacturas);





let facturaSinIva = 0
let gastosSinIva = 0
let resultadoIibb = 0
let resultadoIg = 0
let Ganancia = 0

datosFacturas.forEach((el,i)=>{
    //Funcion Precio sin IVA
    facturaSinIva = (el.precioFactura / (1 + el.valorIva / 100))
    console.log("Trabajo " + (1 + i) + ": " + "El monto de la factura sin IVA es: " + facturaSinIva);
    //Funcion Costos/Gastos sin IVA
    gastosSinIva = (el.precioCosto / (1 + el.valorIvaCompra / 100))
    console.log("Trabajo " + (1 + i) + ": " + "El monto de los gastos sin IVA es: " + gastosSinIva);
    //Funcion Resultado IIBB
    resultadoIibb = (el.precioFactura / (1 + el.valorIva / 100) * (el.valorIibb / 100))
    console.log("Trabajo " + (1 + i) + ": " + "El monto a reducir de IIBB es: " + resultadoIibb);
    //Funcion Resultado IG
    resultadoIg = (facturaSinIva - gastosSinIva) * (el.valorIg / 100)
    console.log("Trabajo " + (1 + i) + ": " + "El monto a reducir de IG es: " + resultadoIg);
    // Funcion calcular Ganancia
    Ganancia = (facturaSinIva - gastosSinIva - resultadoIibb - resultadoIg)
    console.log("Trabajo " + (1 + i) + ": " + "El monto de la Ganancia es: " + Ganancia);
    //Funcion Informar Resultado con alert 
    Resumen =  alert("Trabajo " + (1 + i) + ":" + "\nPrecio cobrado: " + el.precioFactura + "\nGastos: " + el.precioCosto + "\nPrecio cobrado s/IVA: " + facturaSinIva + "\nGastos s/IVA: " + gastosSinIva + "\nIG: " + resultadoIg + "\nIIBB: " + resultadoIibb + "\nGanancias: " + Ganancia)
    console.log("Trabajo " + (1 + i) + "\nPrecio cobrado: " + el.precioFactura + "\nGastos: " + el.precioCosto + "\nPrecio cobrado s/IVA: " + facturaSinIva + "\nGastos s/IVA: " + gastosSinIva + "\nIG: " + resultadoIg + "\nIIBB: " + resultadoIibb + "\nGanancias: " + Ganancia);
     })



//Funcion de orden superior - Filtrado:
function filtrarFactura(arr, filtro) {
    const filtrado = arr.filter((el) => {
        return el.precioFactura > filtro
    })
    return filtrado
}

ingresarFiltro = prompt ("Mostrar datos de las facturas con precio mayor a: ");

const resultadoFiltro = filtrarFactura(datosFacturas,ingresarFiltro);

console.log(resultadoFiltro);
