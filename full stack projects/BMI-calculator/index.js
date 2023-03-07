let height=document.getElementById("height")
let weight=document.getElementById("weight")
let index=document.getElementById("output")
let cond=document.getElementById("cond")
function compute(){
    let x=parseInt(weight.value)/(parseInt(height.value)/100)**2
    index.value=x;
    if(x<18.5){
    cond.innerText="Underweight"
    }
    else if(x>=18.5 && x<25){
        cond.innerText="Healthy weight"
    }
    else if(x>=25 && x<30){
        cond.innerText="Overweight"
    }
    else{
        cond.innerText="Obesity"
    }
}