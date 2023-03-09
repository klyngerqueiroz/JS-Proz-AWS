let arr = ['Home', 'Index', 'Sobre', 'Contato','Pesquisa'];

let listaUl = document.createElement('ul');

let nav = document.getElementsByTagName('nav');

nav[0].appendChild(listaUl);

let listaNav = document.getElementsByTagName('ul')

for(let i = 0; i<arr.length; i++){
    listaFor = document.createElement('li');

    let textoLi = document.createTextNode(arr[i])

    listaFor.appendChild(textoLi);

    listaNav[0].appendChild(listaFor);

    console.log(listaFor)
}





