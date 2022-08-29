//Calculo de ganancias si hago factura A y si facturo los gastos


function solicitarPrecio() {
    let precioFactura = parseFloat(prompt("Ingrese el precio de su servicio que va a cobrar en su Factura A (numero mayor a cero)"));
    while (true) {
        if (!isNaN(precioFactura) && precioFactura != null && precioFactura != "") {
            //es numero
            break;
        } else {
            precioFactura = parseFloat(prompt("Ingrese el precio de su servicio que va a cobrar en su Factura A (numero mayor a cero)"));
            continue;
        }
    }
}

function solicitarCosto() {
    let precioCosto = parseFloat(prompt("Ingrese los gastos facturados que le genero el servicio"));
    while (true) {
        if (!isNaN(precioCosto) && precioCosto != null && precioCosto != "") {
            //es numero
            break;
        } else {
            precioCosto = parseFloat(prompt("Ingrese los gastos facturados que le genero el servicio"));
            continue;
        }
    }
}



//Fucnion ingreso de IIBB de su factura
function solicitarIibb() {
    let valorIibb = parseFloat(prompt("Ingrese el % de IIBB que se le retiene segun su actividad (e.g.3.5)"));
    while (true) {
        if (!isNaN(valorIibb) && valorIibb != null && valorIibb != "") {
            //es numero
            break;
        } else {
            valorIibb = parseFloat(prompt("Ingrese el % de IIBB que se le retiene segun su actividad (e.g.3,5)"));
            continue;
        }
    }
}

//Fucnion ingreso de Impuesto a las Ganancias
function solicitarIg() {
    let valorIg = parseFloat(prompt("Ingrese el % de IIBB que se le retiene segun su actividad (e.g.30)"));
    while (true) {
        if (!isNaN(valorIg) && valorIg != null && valorIg != "") {
            //es numero
            break;
        } else {
            valorIg = parseFloat(prompt("Ingrese el % de Impuesto a las Ganancias que se le retiene segun su actividad (e.g.30)"));
            continue;
        }
    }
}

//Funcion ingreso de IVA de su factura
function solicitarIVA() {
    let valorIva = parseFloat(prompt("Ingrese el % de IVA que se le retiene segun su actividad (e.g.21)"));
    while (true) {
        if (!isNaN(valorIva) && valorIva != null && valorIva != "") {
            //es numero
            break;
        } else {
            valorIva = parseFloat(prompt("Ingrese el % de IVA que se le retiene segun su actividad (e.g.21)"));
            continue;
        }
    }
}


// Funcion ingreso de IVA compra de los costos
function solicitarIVACompra() {
    let valorIvaCompra = parseFloat(prompt("Ingrese el % de IVA que se aplico a la factura de los gastos realizados (e.g.21)"));
    while (true) {
        if (!isNaN(valorIvaCompra) && valorIvaCompra != null && valorIvaCompra != "") {
            //es numero
            break;
        } else {
            valorIvaCompra = parseFloat(prompt("Ingrese el % de IVA que se aplico a la factura de los gastos realizados (e.g.21)"));
            continue;
        }
    }
}

//Funcion Resultado IIBB
let resultadoIibb = (precioFactura / (1 + valorIva / 100) * (valorIibb / 100))


//Funcion Resultado IG
let resultadoIg = (precioFactura / (1 + valorIva / 100) * (valorIg / 100))


// Funcion calcular Ganancia
let calculoGanancia = (((precioFactura / (1 + valorIva / 100)) - (precioCosto / (1 + valorIvaCompra / 100))) - resultadoIibb - resultadoIibb)




solicitarPrecio()
solicitarCosto()
solicitarIibb()
solicitarIVA()
solicitarIVACompra()


console.log(calculoGanancia);