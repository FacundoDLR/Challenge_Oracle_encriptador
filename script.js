const inputTexto= document.querySelector(".mensaje-input");
const mensaje= document.querySelector(".mensaje-lupa");
const imgder= document.querySelector(".imglupa");
const titlederecho= document.querySelector(".tituloder");
const btnderecho= document.querySelector(".btncopiar");

function copyToClipBoard() {

    var content = document.getElementById('texto-derecho');
    
    content.select();
    document.execCommand('copy');

    alert("Texto copiado al portapapeles");
}


function btnencriptar(){
    const textoEncriptado= encriptar(inputTexto.value);
    
    mensaje.value = textoEncriptado;
    imgder.style.display= "none";
    titlederecho.style.display= "none";
    btnderecho.style.display= "show";
    btnderecho.style.display= "inherit";
}

function encriptar(Stringparaencriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    Stringparaencriptar = Stringparaencriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(Stringparaencriptar.includes(matrizCodigo[i][0])){
            Stringparaencriptar = Stringparaencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return Stringparaencriptar;
}

function btndesencriptar(){
    const textoDesencriptado= desencriptar(inputTexto.value);
    mensaje.value= textoDesencriptado;
}

function desencriptar(Stringparadesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    Stringparadesencriptar = Stringparadesencriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(Stringparadesencriptar.includes(matrizCodigo[i][0])){
            Stringparadesencriptar = Stringparadesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return Stringparadesencriptar;
}

