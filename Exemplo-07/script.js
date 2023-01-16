let linkProz = document.getElementById("link-proz");
let btnSubtmit = document.querySelector("button[type=submit]")

linkProz.addEventListener("click", (event)=>{
    event.preventDefault();
    alert("falhou")
})

btnSubtmit.addEventListener("click", (e)=>{
    e.preventDefault();
    alert("falhou")
})