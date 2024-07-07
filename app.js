const textoAEncriptar = document.getElementById('textArea');
const btEncriptar = document.getElementById('btEncriptar');
const btDesencriptar = document.getElementById('btDesencriptar');
const textoSalida = document.getElementById('textoSalida');
const imagenSalida = document.getElementById('imagenSalida');
const btCopiar = document.getElementById('btCopiar');
const textOcultarSalida = document.getElementById('textOcultar');

const paraEncriptar = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const paraDesencriptar = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};


function encriptarTexto() {
    const textoOriginal = textoAEncriptar.value.toLowerCase();
    if (textoOriginal.length > 0) {
        let textoEncriptado = '';
        for (let caracter of textoOriginal) {
            if (paraEncriptar.hasOwnProperty(caracter)) {
                textoEncriptado += paraEncriptar[caracter];
            } else {
                textoEncriptado += caracter;
            }
        }
        imagenSalida.style.display = "none";
        textOcultarSalida.style.display = "none";
        btCopiar.style.display = "block";
        textoSalida.innerText = textoEncriptado;
        textoSalida.style.textAlign = "left";
    }
}

function desencriptar() {
    let texto = textoAEncriptar.value.toLowerCase();
    if(texto.length>0){
        for (let clave in paraDesencriptar) {
            if (texto.includes(clave)) {
                texto = texto.replaceAll(clave, paraDesencriptar[clave]);
            }
        }
        imagenSalida.style.display = "none";
        textOcultarSalida.style.display = "none";
        btCopiar.style.display = "block";
        textoSalida.innerText = texto;
        textoSalida.style.textAlign = "left";
    }
}


function copiarTexto() {
    const textoSalida = document.getElementById('textoSalida');
    let textoCopiado = textoSalida.innerText;
    navigator.clipboard.writeText(textoCopiado);
    mostrarMensaje();
}

function mostrarMensaje() {
    const mensaje = document.getElementById('mensajeTemporal');
    mensaje.classList.add('mostrar');

    setTimeout(() => {
        mensaje.classList.remove('mostrar');
    }, 3000);
}
