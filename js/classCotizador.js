class Cotizador {
    constructor(pack, precio, reprocann, gramos) {
        this.pack = pack
        this.precio = precio
        this.reprocann = reprocann
        this.gramos = gramos 
    }
    obtenerCotizacion() {
        return this.pack.factor * this.precio * this.reprocann * this.gramos
    }

}