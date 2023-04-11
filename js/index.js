const precio = 2000 
let tipoPack = {}   
let gramos = 0              
let reprocann = true 
let registroReprocann = 1    

const pack = [{codigo: 1, tipo: 'Standard', factor: 1.3},
            {codigo: 2, tipo: 'Full', factor: 1.2},
            {codigo: 3, tipo: 'Premium', factor: 1.1}]


let mensajeBienvenida = "hola ! como estas? si queres registrarte Ingresa el código del pack de afiliado:" 

function iniciarCotizacion() {
    let codigo = parseInt(prompt(mensajeBienvenida))
    
    let tipoPack = pack.find((pack)=> pack.codigo === codigo)
    if (tipoPack === undefined) {
        alert(" Error en el código de pack afiliado ingresado.")
        return iniciarCotizacion()
    }

    gramos = parseInt(prompt("Ingresa los gramos para la cuota mensual:"))
    if (gramos <= 9 && gramos <= 40) {
        alert("Recuerda que las cuotas van entre 10 y 40  gramos por afiliado.")
        return iniciarCotizacion()
    }

    reprocann = confirm("Pulsa aceptar si ya tenes aprobado el reprocann. si no es asi, pulsa cancelar.")
    if (reprocann === false) {
        registroReprocann = 1.5
    }
    const cotizadorPack = new Cotizador(tipoPack, precio, registroReprocann, gramos) 
    alert(" La cuota mensual es de $ " + cotizadorPack.obtenerCotizacion().toFixed(2))
    alert(" te enviamos un mail con las indicaciones para recibir tu cuota mensual, muchas gracias por asociarte a Green Garden Cannabis Club.")
}

