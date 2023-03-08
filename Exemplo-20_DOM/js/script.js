var lista = ['Alemanha', 'Brasil','Colombia','Dinamarca','Espanha'];

 var listaUl = document.createElement("ul");

 var b = document.getElementsByTagName('body');

 //console.log(b[0]);

 b[0].appendChild(listaUl);

 var listaNoBody = document.getElementsByTagName('ul');

 console.log(listaNoBody[0]);

 for(var i = 0; i<lista.length; i++){
    var liFor = document.createElement('li');

    var textoli = document.createTextNode(lista[i]);

    liFor.appendChild(textoli);

    console.log(lista[i]);
    
    listaNoBody[0].appendChild(liFor);
 }



