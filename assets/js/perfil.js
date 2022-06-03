const url = "https://api.pexels.com/v1/curated";
const col1 = document.getElementById('col1-img-perfil');
const col2 = document.getElementById('col2-img-perfil');
const col3 = document.getElementById('col3-img-perfil');
const col4 = document.getElementById('col4-img-perfil');
const col5 = document.getElementById('col4-img-perfil');

fetch(url).
then(resp => resp.json()).
then(datos =>{
    // console.log(datos.data.slice(0,8));
    const fotos = datos.photos.slice(0,12);
    console.log(fotos);
    fotos.forEach(foto => {
        // console.log(top);
        const img = foto.src.medium;
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
    const fotos = datos.photos.slice(12,24);
    console.log(fotos);
    fotos.forEach(foto => {
        // console.log(top);
        const img = foto.src.medium;
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
    const fotos = datos.photos.slice(24,36);
    console.log(fotos);
    fotos.forEach(foto => {
        // console.log(top);
        const img = foto.src.medium;
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
    const fotos = datos.photos.slice(36,48);
    console.log(fotos);
    fotos.forEach(foto => {
        // console.log(top);
        const img = foto.src.medium;
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
    const fotos = datos.photos.slice(48,60);
    console.log(fotos);
    fotos.forEach(foto => {
        // console.log(top);
        const img = foto.src.medium;
        // Formato de las cards
        const template = `
        <img class="w-100 m-2 rounded" src="${img}" alt="">
        `
        col5.innerHTML += template;
        // console.log(datosNecesarios);
    });
})

