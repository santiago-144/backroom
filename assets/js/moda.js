const foto_moda = "https://picsum.photos/v2/list?page=2&limit=100";
const fotos= document.getElementById("fotos_moda");
var elem = document.querySelector(".grid-container");
const modalWin=document.getElementById('windowModal')

fetch(foto_moda)
  .then((r) => r.json())
  .then((datos) => {
    /* console.log(datos.data); */
    const arreglo_fotos = datos.slice(0,30);
    console.log(arreglo_fotos);
      arreglo_fotos.forEach((photo,i) => {
        //datos de la api
        const datosNecesarios = {
          nombre: photo.author,
          imagen: photo.download_url,
          id: photo.id,
          ropa: photo.url
        }
        console.log(i);
        contador=i%2;
        //console.log(contador);
        if(contador===1){
        /* ........................................fotos..............................................*/ 
        const template = `
        <a href="#!" data-toggle="modal" data-target="#modalImage${i}">
                    <img class="grid-item" src="${datosNecesarios.imagen}" width="200" height="300" id="img"/></a>
                    <div class="modal fade" id="modalImage${i}" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="modalImage${i}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">${datosNecesarios.nombre}</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body container-fluid">
                            <div class="row">
                            <div class="col">
                                <img src="${datosNecesarios.imagen}" width="200" height="300" alt="" class="mx-auto d-block">
                            </div>
                            <div class="col">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                  <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home${i}" role="tab" aria-controls="nav-home" aria-selected="true"><img src="assets/img/icon-flame.svg" alt=""></a>
                                  <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile${i}" role="tab" aria-controls="nav-profile" aria-selected="false"><img src="assets/img/icon-start.svg" alt=""></a>
                                  <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact${i}" role="tab" aria-controls="nav-contact" aria-selected="false"><img src="assets/img/icon-comment.svg" alt=""></a>
                                </div>
                              </nav>
                              <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home${i}" role="tabpanel" aria-labelledby="nav-home-tab">prenda</div>
                                <div class="tab-pane fade" id="nav-profile${i}" role="tabpanel" aria-labelledby="nav-profile-tab"> 
                                  ${datosNecesarios.ropa}
                                </div>
                                <div class="tab-pane fade" id="nav-contact${i}" role="tabpanel" aria-labelledby="nav-contact-tab">info prenda</div>
                              </div>
                            </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Seguir</button>
                        </div>
                      </div>
                    </div>
                  </div>  
                  </div>  
       
        `;
        fotos.innerHTML+=template;
      /* ......................................... fin fotos..........................................*/
      }
      else{ 
      /*............................................fotos.............................................*/ 
        const template = `
      <a href="#!" data-toggle="modal" data-target="#modalImage${i}">
      <img class="grid-item" src="${datosNecesarios.imagen}" width="200" height="400" id="img"/></a>
      <div class="modal fade" id="modalImage${i}" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="modalImage${i}" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">${datosNecesarios.nombre}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body container-fluid">
              <div class="row">
              <div class="col">
                  <img src="${datosNecesarios.imagen}" width="200" height="300" alt="" class="mx-auto d-block">
              </div>
              <div class="col">
              <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home${i}" role="tab" aria-controls="nav-home" aria-selected="true"><img src="assets/img/icon-flame.svg" alt=""></a>
                    <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile${i}" role="tab" aria-controls="nav-profile" aria-selected="false"><img src="assets/img/icon-start.svg" alt=""></a>
                    <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact${i}" role="tab" aria-controls="nav-contact" aria-selected="false"><img src="assets/img/icon-comment.svg" alt=""></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-home${i}" role="tabpanel" aria-labelledby="nav-home-tab">prenda</div>
                  <div class="tab-pane fade" id="nav-profile${i}" role="tabpanel" aria-labelledby="nav-profile-tab"> 
                    ${datosNecesarios.ropa}
                  </div>
                  <div class="tab-pane fade" id="nav-contact${i}" role="tabpanel" aria-labelledby="nav-contact-tab">info prenda</div>
                </div>
              </div>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Seguir</button>
          </div>
        </div>
      </div>
    </div>  
    </div>  
 
      `;
      fotos.innerHTML+=template;
      /*.........................................fin fotos...............................................................*/
            }
    })
    var msnry = new Masonry(elem, {
      // options
      itemSelector: ".grid-item",
      columnWidth: 200,
      gutter: 20,
      isFitWidth: true
    })
   
 
  })

 

 