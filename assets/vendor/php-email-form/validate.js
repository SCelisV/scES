// console.log('funcionando');

var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')

    var datos = new FormData( formulario );

    formulario.querySelector('.error-message').classList.remove('d-block');
    formulario.querySelector('.sent-message').classList.remove('d-block');

    console.log(datos)
    console.log(datos.get('name'))
    console.log(datos.get('email'))
    console.log(datos.get('subject'))
    console.log(datos.get('message'))

    fetch('forms/post.php',{
        method: 'POST',
        body: datos
    })
        .then(response => {
            console.log('Response:', response)
            // me esta dando este error: Uncaught (in promise) SyntaxError: JSON.parse: unexpected character at line 1 column 1
            //return response.json(); 
            console.log(response.status)
            console.log(response.statusText)
            console.log(response.url)
            console.log(response.ok)
            if( response.ok ) {
                return response.status
              } else {
                throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
            }
        })

    .then( data => {
        console.log("data: ", data)
        formulario.querySelector('.loading').classList.remove('d-block');
        if (data == 200) {
            formulario.querySelector('.sent-message').classList.add('d-block');
            formulario.reset(); 
        } else {
          throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
        }
    })

    .catch((error) => {
        formulario.querySelector('.error-message').innerHTML = error;
        formulario.querySelector('.error-message').classList.add('d-block');
    });
})