let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'escolha um numero de 1 a 10');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
        
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativa > 1? 'tentativas' : 'tentativa';

        exibirTextoNaTela('p',`Você descobriu o numero secreto com ${tentativa} ${palavraTentativa}!`);

        document.getElementById('reiniciar').removeAttribute('disabled'); 

    }else if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior');
            
        tentativa ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite){
        listaNumerosSorteados = [];
   }

   if (listaNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);   
        return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

