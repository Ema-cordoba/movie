const retornoCardContenido = (cont)=> {
    let HTMLCard = `<div class="col s12 m6 l3">
                     <div class="card z-depth-2">
                     <div class="card-image">
                        <img loading="lazy" src="${cont.poster}" title="${cont.titulo}">
                        <a id=btn3}" class="btn-floating halfway-fab waves-effect waves-black blue"><i class="material-icons" onclick="verDetalle(${cont.id})"><i class="fa-sharp fa-solid fa-magnifying-glass-arrow-right"></i></i></a>
                     </div>
                     <div class="card-content red">
                     <p class="yellow-text">Genero: ${cont.genero}</p>
                     <p></p>
                     <p class="white-text">Temporadas: ${cont.temporadas}</p>
                     </div>
                     </div>
                    </div>`
       return HTMLCard
 }
 
 const retornoCardError = ()=> {
    let HTMLCardError = `<div class="center white-text">
                        <br><br>
                        <br><br>
                        <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos</h4>
                        <br><br>
                        <i class="large material-icons">Sentiment_very_dissatisfied</i>
                        <br><br>
                        </div>`
       return HTMLCardError
 }
 

 const retornoHTMLPreloader = ()=> {
   HTMLPreloader = `<br><br><br>
                     <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                           <div class="circle"></div>
                        </div><div class="gap-patch">
                           <div class="circle"></div>
                        </div><div class="circle-clipper right">
                           <div class="circle"></div>
                              </div>
                              </div>
                           </div>
                              <div class="circle"></div>
                           </div><div class="circle-clipper right">
                           <div class="circle"></div>
                        </div>
                        </div>
                     </div>`
   return HTMLPreloader
}
 
 
 
 
 
 
 const retornoDetalle = (contenido)=> {
    HTMLDetalle = `<div id="container-details" class="row center">
                      <div class="col s12 m5 l4 center-align">
                      <img src="${contenido.poster}" width="100%">
                      </div>
                      <div class="col s12 m7 l8">
                      <table>
                         <tbody class="white-text">
                            <tr>
                            <td class="yellow-text">TÍTULO</td>
                            <td><h5>${contenido.titulo}</h5></td>
                            </tr>
                            <tr>
                            <td class="yellow-text">CATEGORÍA</td>
                            <td>${contenido.categoria}</td>
                            </tr>
                            <tr>
                            <td class="yellow-text">GÉNERO:</td>
                            <td>${contenido.genero}</td>
                            </tr>
                            <tr>
                            <td class="yellow-text">RESUMEN</td>
                            <td>${contenido.resumen}</td>
                            </tr>
                            <tr>
                            <td class="yellow-text">TEMPORADAS</td>
                            <td>${contenido.temporadas}</td>
                            </tr>
                            <tr>
                            <td class="yellow-text">REPARTO</td>
                            <td><h6>${contenido.reparto}</h6></td>
                            </tr>
                           
                         </tbody>
                      </table>
                      </div>
                      <div>
                      <iframe width="560" height="315" src="${contenido.trailer}" frameborder="0" encrypted-media;="" allowfullscreen="">
                      </iframe>
                      </div>
                   </div>`
          return HTMLDetalle
 }