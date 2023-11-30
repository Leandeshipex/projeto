
function tabuada(valor) {
    console.log (`A tabuada de ${valor} é...`);

    for (let i = 1; i <= 10; i++){  
    let multiplicacao = valor * i; 

    console.log (`${valor} x ${i} = ${multiplicacao}`); 
    }
}
tabuada(5);