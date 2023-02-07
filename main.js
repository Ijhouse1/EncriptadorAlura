const inputMensaje = document.querySelector (".textoIngresado");
const inputResultado = document.querySelector (".textoMostrado");
const copia = document.querySelector("btn-copiar");
copia.style.display = "none"

function validarMensaje(){
    let textoEscrito = document.querySelector(".textoIngresado").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(validador || validador === 0){
        alert("Solo se permiten letras minusculas y sin acentos");
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarMensaje()){
        const textoEncriptado = encriptar(inputMensaje.value)
        inputResultado.value = textoEncriptado
        inputResultado.style.backgroundImage = "none"
        inputMensaje.value = "";
        copia.style.display ="block"
    }
}

//-----------------LLAVES DE ENCRIPTACION-----------------------
//------------------ "a" ---> "ai" -----------------------------
//------------------ "e" ---> "enter" --------------------------
//------------------ "i" ---> "imes" ---------------------------
//------------------ "o" ---> "ober" ---------------------------
//------------------ "u" ---> "ufat" ---------------------------
//--------------------------------------------------------------

function encriptar(fraseEncriptada){    
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    fraseEncriptada = fraseEncriptada.toLowerCase()
    
    for (let i=0; i<matrizCodigo.length; i++){
        if (fraseEncriptada.includes(matrizCodigo[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
       
    }
    return fraseEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputMensaje.value)
    inputResultado.value = textoEncriptado
    inputMensaje.value = "";
}

function desencriptar(fraseDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    fraseDesencriptada = fraseDesencriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(fraseDesencriptada.includes(matrizCodigo[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
    return fraseDesencriptada
}


function copiar(){
    inputResultado.select();
    navigator.clipboard.writeText(inputResultado.value)
    inputResultado.value = "";
    alert("El texto ha sido copiado")
}