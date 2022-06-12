const url = "https://api.unsplash.com/photos/?client_id=PKYI2fJvjqc1_VuZ5I6gFAsvK3dKiXRFyA-o4UJz7NE&per_page=50";
const col1 = document.getElementById('col1-img-perfil');
const col2 = document.getElementById('col2-img-perfil');
const col3 = document.getElementById('col3-img-perfil');
const col4 = document.getElementById('col4-img-perfil');
const col5 = document.getElementById('col4-img-perfil');

fetch(url).
then(resp => resp.json()).
then(datos =>{
    // console.log(datos.data.slice(0,8));
    const fotos = datos.slice(0,10);
    console.log(fotos);
    fotos.forEach(foto => {
        // console.log(top);
        const img = foto.urls.regular;
        // Formato de las cards
        const template = `
        <img class="w-100 m-2 rounded" src="${img}" alt="">
        `
        col1.innerHTML += template;
        // console.log(datosNecesarios);
    });
})


fetch(url).
then(resp => resp.json()).
then(datos =>{
    // console.log(datos.data.slice(0,8));
    const fotos = datos.slice(10,20);
    console.log(fotos);
    fotos.forEach(foto => {
        // console.log(top);
        const img = foto.urls.regular;
        // Formato de las cards
        const template = `
        <img class="w-100 m-2 rounded" src="${img}" alt="">
        `
        col2.innerHTML += template;
        // console.log(datosNecesarios);
    });
})

fetch(url).
then(resp => resp.json()).
then(datos =>{
    // console.log(datos.data.slice(0,8));
    const fotos = datos.slice(20,30);
    console.log(fotos);
    fotos.forEach(foto => {
        // console.log(top);
        const img = foto.urls.regular;
        // Formato de las cards
        const template = `
        <img class="w-100 m-2 rounded" src="${img}" alt="">
        `
        col3.innerHTML += template;
        // console.log(datosNecesarios);
    });
})

fetch(url).
then(resp => resp.json()).
then(datos =>{
    // console.log(datos.data.slice(0,8));
    const fotos = datos.slice(30,40);
    console.log(fotos);
    fotos.forEach(foto => {
        // console.log(top);
        const img = foto.urls.regular;
        // Formato de las cards
        const template = `
        <img class="w-100 m-2 rounded" src="${img}" alt="">
        `
        col4.innerHTML += template;
        // console.log(datosNecesarios);
    });
})

fetch(url).
then(resp => resp.json()).
then(datos =>{
    // console.log(datos.data.slice(0,8));
    const fotos = datos.slice(22,34);
    console.log(fotos);
    fotos.forEach(foto => {
        // console.log(top);
        const img = foto.urls.regular;
        // Formato de las cards
        const template = `
        <img class="w-100 m-2 rounded" src="${img}" alt="">
        `
        col5.innerHTML += template;
        // console.log(datosNecesarios);
    });
})

