function meuEscopo(){
    const formulario = document.querySelector('.form');
    const tela = document.querySelector('.tela');
    let contador = 0
    const lista = []

    // Forma antiga de atribuir um listener
    // formulario.onsubmit = function (evento){
    //     evento.preventDefault();
    //     const pessoa = []
    //     pessoa.push(formulario.querySelector('.nome').value)
    //     pessoa.push(" " + formulario.querySelector(".sobreNome").value)
    //     pessoa.push(" " + formulario.querySelector(".peso").value)
    //     pessoa.push(" " + formulario.querySelector(".altura").value)
    //     lista[contador] = pessoa + "<br>"
    //     tela.innerHTML += lista
    //     formulario.setAttribute('class', "f")
    // }

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const pessoa = []
        pessoa.push(formulario.querySelector('.nome').value)
        pessoa.push(" " + formulario.querySelector(".sobreNome").value)
        pessoa.push(" " + formulario.querySelector(".peso").value)
        pessoa.push(" " + formulario.querySelector(".altura").value)
        lista[contador] = pessoa + "<br>"
        tela.innerHTML += lista
        formulario.setAttribute('class', "f")


    })

}
meuEscopo()