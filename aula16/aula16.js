const alunos = ['Luiz', 'Maria', 'Joao']
alunos[3] = "Heitor"
alunos[alunos.length] = alunos.unshift("Ninna Carla") + alunos.unshift("Rafael") + alunos.push("Dog")
 alunos[alunos.push("Penultino")] = "ultimo"
 console.log(alunos.pop())
 delete alunos[1]
for (let i = 1; i <= 200000; i++){
    alunos.unshift(i)
}
console.log(alunos)