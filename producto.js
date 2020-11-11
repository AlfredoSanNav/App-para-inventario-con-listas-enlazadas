export default class Producto{
    constructor(codigo, descripcion, cantidad, costo){
        this.codigo = codigo
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
        this.siguiente = null
    }
}