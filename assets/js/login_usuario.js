/* API FETCH */
const formulario = document.getElementById('iniciarSesion')
fetch('http://localhost:8080/api/backroom/usuario/all')
.then(response => response.json())
.then(datos =>{
    //console.log(datos);
    datos.forEach(el => {
        const datosNecesarios = {
            user: el.usuario,
            contrasenia:el.password
          }
    
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
        
            const datos = Object.fromEntries(
                new FormData(e.target)
            )
            //console.log(datos.user);
            formulario.reset(); 
            console.log(datos.contrasenia);
            console.log(typeof(datos.user));
            //console.log(datosNecesarios);
            console.log(datosNecesarios.contrasenia);
            console.log(typeof(datosNecesarios.contrasenia));
            if(datosNecesarios.user===datos.user &&datosNecesarios.contrasenia === datos.contrasenia  ){
                window.location.href="home.html";
        
            } else{
                const  template=`

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Error</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
        <p>Datos Incorrectos</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
                `
                formulario.innerHTML+=template;
            }    
    })
})
})




