const textArea = document.querySelector('.text__area');
const message = document.querySelector('.message');


function botaoCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    message.value = textoCriptografado;
    textArea.value = '';
}


function criptografar(stringCriptografada) {

    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringCriptografada;
}


function botaoDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    message.value = textoDescriptografado;
    textArea.value = '';
}

function descriptografar(stringDescriptografada) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptografada;
}