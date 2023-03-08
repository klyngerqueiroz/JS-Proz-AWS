function olaMundo(){
    console.log('hello world')
}

olaMundo();

function somar(n1,n2){
    var res= n1*n2
    return res;
}

console.log(somar(5,5));

var result_1 = somar(2,2);
console.log(result_1);

var result_2 = somar(5,10)
console.log(result_2);


function chamarNome(nome){
    console.log('meu nome e ' + nome)
}

var bancoDeDados = 'Pedro'
chamarNome(bancoDeDados);

chamarNome("klynger");
chamarNome('joão');


function contagem(){
    
    for(let i = 0; i<4; i++){
    console.log('Testando numeros em sequencia ' + i)
    }
}

contagem();



