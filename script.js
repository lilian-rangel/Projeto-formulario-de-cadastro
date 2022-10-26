/* Máscaras ER */
function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id( el ){
  return document.getElementById( el );
}
window.onload = function(){
  id('celular').onkeyup = function(){
    mascara( this, mtel );
  }
}

function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var nascimento = document.getElementById("nascimento");
    var email = document.getElementById("email");
    var celular = document.getElementById("celular");
    var cep = document.getElementById("cep");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var estados = document.getElementById("estados");

    // verificar se o nome está vazio
        if (nome.value == "") {
            alert("Nome não informado");
            // Deixa o input com o focus
            nome.focus();
            // retorna a função e não olha as outras linhas
            return;
          }
        if (sobrenome.value == "") {
            alert("Sobrenome não informado");
            sobrenome.focus();
            return;
          }
        if (nascimento.value == "") {
            alert("Data de nascimento não informado");
            nascimento.focus();
            return;
          }
        if (email.value == "") {
            alert("E-mail não informado");
            email.focus();
            return;
          }
        if (celular.value == "") {
            alert("Celular não informado");
            celular.focus();
            return;
          }
        if (cep.value == "") {
            alert("CEP não informado");
            cep.focus();
            return;
          }
        if (endereco.value == "") {
            alert("Endereço não informado");
            endereco.focus();
            return;
          }
        if (numero.value == "") {
            alert("Número de endereço não informado");
            numero.focus();
            return;
          }
        if (bairro.value == "") {
            alert("Bairro não informado");
            bairro.focus();
            return;
          }
        if (cidade.value == "") {
            alert("Cidade não informado");
            cidade.focus();
            return;
          }
        if (estados.value == "") {
            alert("Estado não informado");
            estados.focus();
            return;
          }
          alert("Formulário enviado!");
          // envia o formulário
          //formulario.submit();
}