let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole(){
    console.log('o botão foi clicado');
}

function verificarAlert(){
    alert('Eu amo JS');
}

function verificarPrompt(){
    let cidade = prompt('Digine o nome de uma cidade:');
    alert(`Estive em ${cidade}, e me lembrei de você`);
}

function verificarSoma(){
    let valor1 = parseInt(prompt('Digite um numero:'));
    let valor2 = parseInt(prompt('Digite outro numero:'));
    let soma = (valor1 + valor2);
    alert(`a soma de ${valor1} e ${valor2} é de ${soma}`);
}

