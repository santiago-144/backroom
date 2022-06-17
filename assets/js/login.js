const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
/* const boton_login=document.getElementById('button-login');
const clave=document.getElementById('formGroupExampleInput2');
const email=document.getElementById('formGroupExampleInput');
 */




const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const emailError = document.querySelector('#email-error');
const statusInfo = {
    email: false,
}


inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
    
        switch (e.target.name) {
            case 'user':
                
                if(expresiones.email.test(e.target.value)) {
                    statusInfo.email = true;
                    emailError.textContent = '';
                    
                } else {

                
                    statusInfo.email = false;
                    //emailError.textContent = 'Email invalido';
                   /* setTimeout(() =>{
                        emailError.textContent = ' ';
                    },3000); */
                }
            default:
                break;
        }
    });
});

form.addEventListener("submit",(e) =>{

	e.preventDefault();
	console.log('Hola');
	
	if(!Object.values(statusInfo).includes(false)){
		
		console.log("enviado");

		
		const datos = Object.fromEntries(
			new FormData(e.target)
		);
		console.log(datos);

        fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify( {
                correo: datos.user,
                password: datos.contrasenia
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(resp => {
            const token = resp.headers.get('Authorization');
            
            if(token && token.includes('Bearer') && resp.ok) {
                localStorage.setItem('token', token);
                console.log(token);

                fetch('http://localhost:8080/api/backroom/usuario/correo/' + datos.user,{
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': token
                    }
                }).then(r => r.json()).then(datos => {
                    console.log(datos);
                    localStorage.setItem('usuario', JSON.stringify(datos))
                })




                url = window.location;
                const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
               location.href = path +  'home.html';
            } else {
                localStorage.removeItem('token');          
            }
        })

	}
	else{
		console.log(statusInfo);
        console.log("No enviado");

	}
})

