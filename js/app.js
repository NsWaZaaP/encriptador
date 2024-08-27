function reemplazarVocales(parrafo) {
    return parrafo
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');
}
function cifrar(){
    const parrafo = document.getElementById('inputTexto').value;
    const resultado = reemplazarVocales(parrafo);
    document.getElementById('resultado').innerText = resultado;
}


console.log(resultado);

function descifrarTexto(texto) {
    return texto
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');
}

function descifrar() {
    const textoCifrado = document.getElementById('inputTexto').value;
    const resultadoDescifrado = descifrarTexto(textoCifrado);
    document.getElementById('resultado').innerText = resultadoDescifrado;   
}


