
var textInput = document.querySelector("#caixadetexto");
var outInput = document.querySelector("#tentativa");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('tentativa').innerHTML = '<textarea readonly id="caixadetexto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    document.getElementById('tentativa').innerHTML = '<textarea readonly id="caixadetexto">' + texto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('tentativa').querySelector('textarea');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  
