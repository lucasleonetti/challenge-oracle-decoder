// ----> obteniendo informacion <----
const inputTexto = document.querySelector("#input-texto");
const outPutMensaje = document.querySelector("#msg");


// ----> botones <-----
function btnEncriptar() {

    const textoEncriptado = encriptar(inputTexto.value);
    outPutMensaje.value = textoEncriptado;
}


function btnDesEncriptar() {
    const textoDesencriptado = desEncriptar(inputTexto.value);
    outPutMensaje.value = textoDesencriptado;
}


function btnCopiar() {
    event.preventDefault();
    let copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
    alert("Mensaje Copiado!");
}


// ----> logica de programa <----
function encriptar(StringParaEncriptar) {
    event.preventDefault();
    let matrizCodigo = [["e", "enter",], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return StringParaEncriptar;
}

function desEncriptar(StringParaEncriptar) {
    event.preventDefault();
    let matrizCodigo = [["enter", "e",], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return StringParaEncriptar;
}



// ----> validaciones <----

//valores tabla ASCII para comprobar cada caracter dentro del rango
function esValido(c) {
    c = c.charCodeAt(0);
    return (c >= 97 && c <= 122) || (c == 32); // [a-z ]
}

// recorro la cadena verificando los caracteres
function validarEntrada(cadena) {
    for (var i = 0; i < cadena.length; i++) {
        if (!esValido(cadena[i])) {
            break;
        }
    }
    return i == cadena.length;
}


function validarTextarea(cadena) {
    let txt = cadena.value;
    if (!validarEntrada(txt)) {
        alert("Sin mayusculas ni carecteres especiales! Reingrese el Mensaje!");
        return cadena.value = "";
    }
}


