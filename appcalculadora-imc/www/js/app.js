function CalculoIMC(){

    //pegar os valores de peso e altura
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;

//calcular o IMC --> PESO / (ALTURA * ALTURA)
let imc = peso / (altura*altura);
console.log(imc);

}