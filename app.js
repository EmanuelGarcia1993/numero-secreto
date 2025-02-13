let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 0;

condicionesIniciales();

function generarNumeroSecreto(){

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    document.getElementById('intentar').removeAttribute('disabled');
    
    //Si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
        document.querySelector('#intentar').setAttribute('disabled', true);
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        
    }
}

function asignarTextoElemento(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento() {

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroSecreto);
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroDeUsuario);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        //El usuario acierta
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#intentar').setAttribute('disabled', true);
    } else { 
        //El usuario no acierta
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');        
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;

}

function limpiarCaja() {
    //Limpia el campo para ingresar el numero
    document.querySelector('#valorUsuario').value = '';

}

function condicionesIniciales() {

    if(numeroMaximo == 0) {

        numeroMaximo = parseInt(prompt('Indique el numero maximo de variables aleatorias'));
    
    }
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {

    //Limpiar la caja
    limpiarCaja();
    //Mensaje de indicacion de numeros
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}


