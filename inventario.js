import Producto from './producto.js'

export default class Inventario{
    constructor(){
        this.productos = {}
        this.inicio = 0
        this.final = 0
    }

    agregarFinal(producto){
        this.productos[this.final] = producto
        this.final++

        console.log(this.productos)
    }
}