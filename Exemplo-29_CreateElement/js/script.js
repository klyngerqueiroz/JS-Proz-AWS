var novoParagrafo = document.createElement('p');

var textParagrafo = document.createTextNode('Texto de teste')

//ou  

//var textParagrafo = document.createTextNode('')
//textParagrafo.textContent = 'Texto de teste 02';

var body = document.querySelector('body');

novoParagrafo.appendChild(textParagrafo);

console.log(novoParagrafo);

body.appendChild(novoParagrafo);



//inserir em um continer ou DIV

var container = document.getElementById("container");

var span = document.createElement('span');

var text = document.createTextNode('');
text.textContent = 'criando um elemento';

span.appendChild(text);

container.appendChild(span);


