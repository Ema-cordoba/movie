let cardsAmostrar = ""
let contenidoJSON = []

const URL = `${location.origin}/triller.json`
//const URL = `https://api.mirutadementira.com.au/`

const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")


const peticionAJAX = ()=> {
    
    const URLJPH = "https://jsonplaceholder.typicode.com/posts"
    const xhr = new XMLHttpRequest
          xhr.open("GET", URLJPH)
          xhr.timeout = 5000
          xhr.send()
          xhr.addEventListener("loadend", ()=> {
              if (xhr.readyState == 4 && (xhr.status == 200 && xhr.status <= 299)) {
                 const contenidoPOST = JSON.parse(xhr.responseText)
                       console.table(contenidoPOST)
              } else{
                throw new error
              }
          })
          xhr.addEventListener("error", ()=> {
            xhr.abort()
            console.error("Se ha producido un error :(")
          })

}