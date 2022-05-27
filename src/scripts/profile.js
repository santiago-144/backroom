const urlTop1 = "https://rickandmortyapi.com/api/character/?page=19";
const topAnime1 = document.getElementById('col1-img-perfil');


fetch(urlTop1).
    then(resp => resp.json()).
    then(datos =>{
        // console.log(datos.data.slice(0,8));

        const animesTop = datos.results.slice(0,15);
        console.log(animesTop);

        animesTop.forEach(top => {
            // console.log(top);

            const img = top.image;
            
            
            // Formato de las cards
            const template = `
            <img class="w-100 m-2 rounded" src="${img}" alt="">
            `

            topAnime1.innerHTML += template;
            // console.log(datosNecesarios);
        });
    })

const urlTop2 = "https://rickandmortyapi.com/api/character/?page=10";
const topAnime2 = document.getElementById('col2-img-perfil');


fetch(urlTop2).
then(resp => resp.json()).
then(datos =>{
    // console.log(datos.data.slice(0,8));

    const animesTop = datos.results.slice(0,15);
    console.log(animesTop);

    animesTop.forEach(top => {
        // console.log(top);

        const img = top.image;
        
        
        // Formato de las cards
        const template = `
        <img class="w-100 m-2 rounded" src="${img}" alt="">
        `

        topAnime2.innerHTML += template;
        // console.log(datosNecesarios);
    });
})


const urlTop3 = "https://rickandmortyapi.com/api/character/?page=15";
const topAnime3 = document.getElementById('col3-img-perfil');


fetch(urlTop3).
then(resp => resp.json()).
then(datos =>{
    // console.log(datos.data.slice(0,8));

    const animesTop = datos.results.slice(0,15);
    console.log(animesTop);

    animesTop.forEach(top => {
        // console.log(top);

        const img = top.image;
        
        
        // Formato de las cards
        const template = `
        <img class="w-100 m-2 rounded" src="${img}" alt="">
        `

        topAnime3.innerHTML += template;
        // console.log(datosNecesarios);
    });
})

const urlTop4 = "https://rickandmortyapi.com/api/character/?page=8";
const topAnime4 = document.getElementById('col4-img-perfil');

fetch(urlTop4).
then(resp => resp.json()).
then(datos =>{
    // console.log(datos.data.slice(0,8));

    const animesTop = datos.results.slice(0,15);
    console.log(animesTop);

    animesTop.forEach(top => {
        // console.log(top);

        const img = top.image;
        
        
        // Formato de las cards
        const template = `
        <img class="w-100 m-2 rounded" src="${img}" alt="">
        `

        topAnime4.innerHTML += template;
        // console.log(datosNecesarios);
    });
})

const urlTop5 = "https://rickandmortyapi.com/api/character/?page=6";
const topAnime5 = document.getElementById('col5-img-perfil');


fetch(urlTop5).
then(resp => resp.json()).
then(datos =>{
    // console.log(datos.data.slice(0,8));

    const animesTop = datos.results.slice(0,15);
    console.log(animesTop);

    animesTop.forEach(top => {
        // console.log(top);

        const img = top.image;
        
        
        // Formato de las cards
        const template = `
        <img class="w-100 m-2 rounded" src="${img}" alt="">
        `

        topAnime5.innerHTML += template;
        // console.log(datosNecesarios);
    });
})

