// Redactá y resolvé un ejercicio que sea coherente, en el que puedas aplicar lo aprendido de cadenas hasta el momento

// Nota: El ejercicio de métodos de array + este son el TP 1 y llevan nota numérica.

// Ingresar usuario y clave (clave con al menos 8 caracteres, 1 mayuscula y 1 simbolo).

let inputPass = document.getElementById('pass');
let hasUpper=0;


inputPass.addEventListener('keyup', checkPass)

function checkPass(){
    let pass = document.getElementById('pass').value;
    let lastChar = pass.slice(-1);
    console.log(pass);

    if(pass.match(/A-Z]/g)){
        console.log('sipi');
    }
}
