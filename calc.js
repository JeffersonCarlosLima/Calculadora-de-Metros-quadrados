function metrosqds(){
   var comprimento = document.getElementById('comprimento').value;
   var largura = document.getElementById('largura').value;
   var calculo = largura * comprimento;
   document.getElementById('resultado').innerHTML=calculo;
}