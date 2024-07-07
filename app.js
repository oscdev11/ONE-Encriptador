const textoAEncriptar = document.getElementById('textArea');
const btEncriptar = document.getElementById('btEncriptar');
const btDesencriptar = document.getElementById('btDesencriptar');
const textoDesencriptado = document.getElementById('textoDesencriptado');

let vocal = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
];

function encriptarTexto() {
    const texto = textoAEncriptar.value.toLowerCase();
    let textoEncriptado = "";
    for (let i = 0; i < vocal.length; i++) {
        if (texto.includes(vocal[i][0])) {
            textoEncriptado = texto.replaceAll(vocal[i][0], vocal[i][1]);
        };
    };
    console.log(textoEncriptado);
}