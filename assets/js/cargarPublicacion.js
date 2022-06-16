const datosform=document.getElementById('contact-form')
datosform.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = Object.fromEntries(
        new FormData(e.target)
    )
    console.log(datos);
    datosform.reset();
    fetch('http://localhost:8080/api/backroom/publicacion', {
        //mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            linkProd: datos.prenda,
            titulo: datos.title,
            descripcion: datos.description
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