let button = document.querySelector("button")
let span   = document.querySelector("span")
let section = document.querySelector("section")
let p = document.getElementById("pa")

function mouseOn(){
    span.style.opacity = "100";
}

function mouseOut(){
    span.style.opacity = "0";
}

button.addEventListener("mouseover", mouseOn)
button.addEventListener("mouseout", mouseOut)


//////////////////////////

function fazeUmClick(){
    section.innerHTML = "Fez um click"
}

button.addEventListener("click", fazeUmClick)


/////////////////////////////////

function fazerDoisCliks(){
    p.innerHTML = 'fez um clique duplo'
}

button.addEventListener("dblclick", fazerDoisCliks)
