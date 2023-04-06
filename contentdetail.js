const detalleDOM = document.querySelector("#detalle")
const trailerDOM = document.querySelector("#trailer")
const btnVolver = document.querySelector("a")

document.addEventListener("DOMContentLoaded", ()=> {
   contenidoAlmacenado = localStorage.getItem("detalle")
   if (contenidoAlmacenado == null) {
      detalleDOM.innerHTML = retornoCardError()
      return
   }
   let contenido = JSON.parse(contenidoAlmacenado)
       detalleDOM.innerHTML = retornoDetalle(contenido)
})