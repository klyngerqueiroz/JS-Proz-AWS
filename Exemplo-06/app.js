let keyText = document.querySelector("key-text")
let codeText = document.querySelector("code-text")
let quadrado = document.querySelector("quadrado")
let distanciaDaEsquerda = 0;

document.addEventListener("keyup", (e)=>{
    console.log(e.key);
    console.log(e.code);
    keyText.innerHTML = e.key;
})

document.addEventListener("keydown", (e)=>{
    if(e.code == "ArrowRight"){
    console.log("Apertou a seta direita");
    }
})