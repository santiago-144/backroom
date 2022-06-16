/* API FETCH */
const formulario = document.getElementById('registro-form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = Object.fromEntries(
        new FormData(e.target)
    )
    console.log(datos);
    formulario.reset();

    fetch('http://localhost:8080/api/backroom/usuario', {
        //mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: datos.nombre,
            usuario: datos.usuario,
            correo: datos.email,
            password: datos.contrasenia
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });

});