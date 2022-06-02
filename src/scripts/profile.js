const urlTop1 = "../img/API_ropa.json";
const topAnime1 = document.getElementById('col1-img-perfil');


fetch(urlTop1).
    then(resp => resp.json()).
    then(datos =>{
        // console.log(datos.data.slice(0,8));

        const animesTop = datos.photos.slice(0,10);
        console.log(animesTop);

        animesTop.forEach(top => {
            // console.log(top);

            const img = top.src.medium;
            
            
            // Formato de las cards
            const template = `
            <img class="w-100 m-2 rounded" src="${img}" alt="">
            `

            topAnime1.innerHTML += template;
            // console.log(datosNecesarios);
        });
    })

const urlTop2 = "../img/API_ropa.json";
const topAnime2 = document.getElementById('col2-img-perfil');


fetch(urlTop2).
    then(resp => resp.json()).
    then(datos =>{
        // console.log(datos.data.slice(0,8));

        const animesTop = datos.photos.slice(10,20);
        console.log(animesTop);

        animesTop.forEach(top => {
            // console.log(top);

            const img = top.src.medium;
            
            
            // Formato de las cards
            const template = `
            <img class="w-100 m-2 rounded" src="${img}" alt="">
            `

            topAnime2.innerHTML += template;
            // console.log(datosNecesarios);
        });
    })


const urlTop3 = "../img/API_ropa.json";
const topAnime3 = document.getElementById('col3-img-perfil');


fetch(urlTop2).
    then(resp => resp.json()).
    then(datos =>{
        // console.log(datos.data.slice(0,8));

        const animesTop = datos.photos.slice(20,30);
        console.log(animesTop);

        animesTop.forEach(top => {
            // console.log(top);

            const img = top.src.medium;
            
            
            // Formato de las cards
            const template = `
            <img class="w-100 m-2 rounded" src="${img}" alt="">
            `

            topAnime3.innerHTML += template;
            // console.log(datosNecesarios);
        });
    })

const urlTop4 = "../img/API_ropa.json";
const topAnime4 = document.getElementById('col4-img-perfil');


fetch(urlTop2).
    then(resp => resp.json()).
    then(datos =>{
        // console.log(datos.data.slice(0,8));

        const animesTop = datos.photos.slice(30,40);
        console.log(animesTop);

        animesTop.forEach(top => {
            // console.log(top);

            const img = top.src.medium;
            
            
            // Formato de las cards
            const template = `
            <img class="w-100 m-2 rounded" src="${img}" alt="">
            `

            topAnime4.innerHTML += template;
            // console.log(datosNecesarios);
        });
})

const urlTop5 = "../img/API_ropa.json";
const topAnime5 = document.getElementById('col4-img-perfil');


fetch(urlTop2).
    then(resp => resp.json()).
    then(datos =>{
        // console.log(datos.data.slice(0,8));

        const animesTop = datos.photos.slice(40,50);
        console.log(animesTop);

        animesTop.forEach(top => {
            // console.log(top);

            const img = top.src.medium;
            
            
            // Formato de las cards
            const template = `
            <img class="w-100 m-2 rounded" src="${img}" alt="">
            `

            topAnime5.innerHTML += template;
            // console.log(datosNecesarios);
        });
})

