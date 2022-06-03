const foto_moda = "https://picsum.photos/v2/list?page=2&limit=100";
const fotos= document.getElementById("fotos_moda");
var elem = document.querySelector(".grid-container");
const man="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js";


fetch(foto_moda)
  .then((r) => r.json())
  .then((datos) => {
    /* console.log(datos.data); */
    const arreglo_fotos = datos.slice(0,30);
    console.log(arreglo_fotos);
      /*  console.log(arregloAnimesUltimos); */
      arreglo_fotos.forEach((photo) => {
        /* console.log(anime) */
        //datos de la api
        const datosNecesarios = {
          nombre: photo.auttor,
          imagen: photo.download_url,
          id: photo.id,
        };
        const template = `
        <img class="grid-item" id="btnabrir" src="${datosNecesarios.imagen}" width="200" height="300"/>
        `;
        fotos.innerHTML+=template;
        var msnry = new Masonry(elem, {
            // options
            itemSelector: ".grid-item",
            columnWidth: 200,
            gutter: 20,
            isFitWidth: true
          }); 
        /* console.log(datosNecesarios); */
        const ventana=document.getElementById("btnabrir")
        ventana.addEventListener("click",function(){
            document.getElementsByClassName("fondo_transparente")[0].style.display="block" 
            return false
           })
           document.getElementsByClassName("modal_cerrar")[0].addEventListener("click",  function(){
            document.getElementsByClassName("fondo_transparente")[0].style.display="none" 
          })
    });
     
  });
 