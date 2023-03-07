let fc=document.getElementById("from")
let sc=document.getElementById("to")
let wfc=document.getElementById("worth-first")
let wsc=document.getElementById("worth-second")
let equi=document.querySelector(".equi")
async function updateRate(){
    let url=`https://v6.exchangerate-api.com/v6/5131313c6550a04591bd9b21/latest/${fc.value}`
    data=await fetch(url)
         .then(response=>response.json())
         .catch()
    equi.innerText=`${fc.value.toUpperCase()}=${data.conversion_rates[sc.value.toUpperCase()]}${sc.value.toUpperCase()}`
    wsc.value=parseInt(wfc.value)*(data.conversion_rates[sc.value.toUpperCase()])
    
}
fc.addEventListener("change",updateRate)
sc.addEventListener("change",updateRate)
wfc.addEventListener("input",updateRate)