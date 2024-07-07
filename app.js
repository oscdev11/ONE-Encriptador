const textoAEncriptar = document.getElementById('textArea');
const btEncriptar = document.getElementById('btEncriptar');
const btDesencriptar = document.getElementById('btDesencriptar');
const textoSalida = document.getElementById('textOcultar');
const imagenSalida = document.getElementById('imagenSalida');
const btCopiar = document.getElementById('btCopiar');
const textOcultarSalida = document.getElementById('textoSalida');
const mainSalida = document.getElementById('main__salida');

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
        mainSalida.style.justifyContent = "space-between"
    } else {
        imagenSalida.style.display = '';
        textOcultarSalida.style.display = '';
        textoSalida.innerText = 'Ningún mensaje fue encontrado';
        btCopiar.style.display = 'none';
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
        textoSalida.style.fontWeight = '';
        textoSalida.style.textAlign = "left";
    } else {
        imagenSalida.style.display = '';
        textOcultarSalida.style.display = '';
        textoSalida.innerText = 'Ningún mensaje fue encontrado';
        btCopiar.style.display = 'none';
    }
}


function copiarTexto() {
    const textoSalida = document.getElementById('textOcultar');
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
