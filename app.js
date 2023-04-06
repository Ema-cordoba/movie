document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(()=>{
        obtengoContenido(URL)
    },2500)
})


const verDetalle = (id)=> {
    //debugger
       const seleccion = contenidoJSON.find(contenido => contenido.id == id)
           localStorage.setItem("detalle", JSON.stringify(seleccion))
            location.href = "detail.html"
 }    