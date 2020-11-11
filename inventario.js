import Producto from './producto.js'

export default class Inventario{
    constructor(){
        this.inicio = null
    }

    agregarFinal(nuevo){
        if(this.inicio == null){
            this.inicio = nuevo
        } else {
            let aux = inicio
            while(aux.siguiente != null){
                aux = aux.siguiente
            }
            aux.siguiente = nuevo
        }
    }

    agregarInicio(nuevo){
        nuevo.siguiente = this.inicio
        this.inicio = nuevo
    }

    eliminarInicio(){
        let aux = this.inicio
        this.inicio = this.inicio.siguiente
        aux.siguiente = null
        return aux
    }

    eliminarCodigo(codigo){
        if(this.inicio.codigo == codigo){
            return this.eliminarInicio()
        } else{
            this.buscarAnterior(codigo)
        }
    }

    buscarAnterior(codigo){
        let aux = this.inicio
        while(aux.siguiente.codigo == codigo || aux.siguiente != null){
            aux = aux.siguiente
        }
        if(aux.siguiente == null){
            return null
        }else{
            let temp = aux.siguiente
            aux.siguiente =aux.siguiente.siguiente
            temp.siguiente = null
            return temp 
        }
        
    }
}