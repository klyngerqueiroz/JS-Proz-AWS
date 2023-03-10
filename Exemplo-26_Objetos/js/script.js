let pessoa = {
    nome: 'klynger', idade: 34, sexo: 'masculino',
    soma: function(a,b){
        var res = a+b
        return res

    }
}
console.log('Olá meu nome e ' + pessoa.nome, 'sou do sexo ' + pessoa.sexo, 'tenho ' + pessoa.idade)

res = pessoa.soma(2,2);
console.log(res)