let valorDigitado = prompt("Digite um número: ");
let numero = Number(valorDigitado);

document.getElementById("numero").innerText = numero;
document.getElementById("numero1").innerHTML= numero;
document.getElementById("raiz").innerText = numero ** 0.5;
document.getElementById("inteiro").innerHTML = Number.isInteger(numero) ? "Sim" : "Não";
document.getElementById("NaN").innerText = Number.isNaN(numero) ? `Sim, ${valorDigitado} é NaN` : `Não. Ele é o número ${numero}`
document.getElementById("floor").innerText = Math.floor(numero)
document.getElementById("ceil").innerText = Math.ceil(numero)
document.getElementById("duas").innerText = numero.toFixed(2)







