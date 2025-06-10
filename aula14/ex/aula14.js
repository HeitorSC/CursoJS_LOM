let ultimas = prompt("Quantas letras você quer ver do seu nome?");
let nome = prompt("Qual é o seu nome meu jovemTeste?");

document.body.innerHTML += `O seu nome é ${nome}<br>`;
document.body.innerHTML += `O seu nome tem ${nome.length} letras</p><br>`;
document.body.innerHTML += `<p>A segunda letra do seu nome é ${nome[1]} </p><br>`;
document.body.innerHTML += `<p>A segunda letra do seu nome é ${nome.charAt(1)} </p>`;
document.body.innerHTML += `<p>Primeira letra "t" é ${nome.search("t")}</p><br>`;
document.body.innerHTML += `<p>A última letra "a"é ${nome.lastIndexOf("a")}</p><br>`;
document.body.innerHTML += `<p>As ${ultimas} ultimas letras do seu nome são ${nome.slice(ultimas * -1).replace(" ", "")} </p><br>`;
document.body.innerHTML += `<p>AS palavras do seu nome são ${nome.split(" ")} </p><br>`;
document.body.innerHTML += `<p>Seu nome em letras maiúsculas é ${nome.toUpperCase()} </p><br>`;
document.body.innerHTML += `<p>Seu nome em letras minúsculas é ${nome.toLowerCase()} </p><br>`;
Math.hypot()