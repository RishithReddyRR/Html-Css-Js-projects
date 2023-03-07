let loan=document.getElementById("loan")
let interest=document.getElementById("interest")
let months=document.getElementById("months")
let pay=document.getElementById("pay")
function payment(){
pay.innerText=(parseInt(loan.value)*(interest.value/100)+parseInt(loan.value))/12
}
loan.addEventListener("input",payment)
interest.addEventListener("input",payment)
pay.addEventListener("input",payment)