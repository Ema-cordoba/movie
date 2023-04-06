const obtengoContenido = (URL) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET",URL)
    xhr.timeout = 2000
    xhr.send()
    xhr.addEventListener("loadend",()=>{
        if(xhr.readyState == 4 && xhr.status >= 200){
            contenidoJSON = JSON.parse(xhr.responseText)
            console.table(contenidoJSON)
            contenidoJSON.forEach(cont => {
                cardsAmostrar += retornoCardContenido(cont)
            });
            contenidoDOM.innerHTML = cardsAmostrar
        }
    })
    xhr.addEventListener("error",()=>{
        contenidoDOM.innerHTML = retornoCardError()
    })
    cargandoDOM.innerHTML = ''
}
