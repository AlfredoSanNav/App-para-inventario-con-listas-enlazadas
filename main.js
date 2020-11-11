import Inventario from './inventario.js'
import Producto from './producto.js'

class Main{
    constructor(){

    }
    
    test(){
        let producto01 = new Producto(1001, "Coca de 2L", 2, 24)
        let producto02 = new Producto(1002, "Cheetos flamin-hot", 5, 12)
        let producto03 = new Producto(1003, "Maruchan habanero", 4, 12)
        let producto04 = new Producto(1004, "Cacahuates japoneses", 1, 10)

        let inventario01 = new Inventario()

        inventario01.agregarFinal(producto01)
        inventario01.agregarFinal(producto02)
        inventario01.agregarFinal(producto03)
        inventario01.agregarInicio(producto04)

        
        inventario01.eliminarCodigo(1003)

        inventario01.listar()
        
    }
}

let app = new Main()
app.test()
/*
var codigoAgregar = document.querySelector('#codigoAgregar')
var descripcionAgregar = document.querySelector('#descripcionAgregar')
var cantidadAgregar = document.querySelector('#cantidadAgregar')
var costoAgregar = document.querySelector('#costoAgregar')
var posicionAgregar = document.querySelector('#posicionAgregar')
var btnAgregarFinal = document.querySelector('#btnAgregarFinal')

var inventario01 = new Inventario()

btnAgregarFinal.addEventListener('click', () => {
    let codigo = codigoAgregar.value
    let descripcion = descripcionAgregar.value
    let cantidad = cantidadAgregar.value
    let costo = costoAgregar.value

    var producto = new Producto(codigo, descripcion, cantidad, costo)
    inventario01.agregarFinal(producto)

    alert("Se agregó el producto " + producto.descripcion + "con exito!!")
}) */
