/***************************************************************************
 * Calculo de faixa etária
 * Exemplo prático para estudo de nós para a Aula09 de testes de Software
 * Autor: Wanderlei Silva do Carmo <wander.silva@gmail.com>
 *
 ****************************************************************************/



function  faixaEtaria() {
var idade = parseInt(document.querySelector("#txt_idade").value); 
var resultado = document.querySelector("#resultado");

      if ( idade < 12 ){
      	 resultado.innerHTML = "Criança."
      } 
      else if ( idade < 21 ) {
      	resultado.innerHTML = "Adolescente"
      } 
      else if ( idade < 60){
      	resultado.innerHTML = "Adulto"
      } 
      else {
      	resultado.innerHTML = "Idoso"
      	//alert("Idoso")
      }
 }
