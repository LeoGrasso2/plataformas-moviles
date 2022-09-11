// Redactá y resolvé un ejercicio que sea coherente, en el que puedas aplicar lo aprendido de cadenas hasta el momento

// Nota: El ejercicio de métodos de array + este son el TP 1 y llevan nota numérica.

// Ingresar usuario y clave (clave con al menos 8 caracteres, 1 mayuscula y 1 simbolo).

let inputPass = document.getElementById('pass');
let hasUpper=0;


inputPass.addEventListener('keyup', checkPass)

function checkPass(){
    if(document.getElementById('passWarning')){
        document.getElementById('passWarning').remove();
    }
    let pass = document.getElementById('pass').value;
    let lastChar = pass.slice(-1);
    console.log(pass);
    let valid = '<div>falta mayus!</div>';
    if(!/[A-Z]/.test(pass) || pass.length < 8){
        document.getElementById('sendInput').setAttribute('disabled', 'true');
        let div = document.createElement('div');
        div.setAttribute('id' , 'passWarning')
        div.innerHTML = 'La clave debe contener una mayuscula y 8 dígitos (como mínimo)';
        document.body.appendChild(div);
    }
    else{
        document.getElementById('sendInput').setAttribute('disabled', 'false');
        console.log('sipi');
    }
    
}
