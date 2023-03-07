let cel=document.getElementById("celsius")
let fahren=document.getElementById("fahrenheit")
let kel=document.getElementById("kelvin")
function calc(event){
    if(event.target.name=="celsius"){
        fahren.value=parseInt(event.target.value)+32 
        kel.value=parseInt(event.target.value)+273.15
    }
    else if(event.target.name=="fahrenheit"){
        cel.value=parseInt(event.target.value)-32 
        kel.value=parseInt(event.target.value)-255.372
    }
    else{
        cel.value=parseInt(event.target.value)-273.15;
        fahren.value=parseInt(event.target.value)+255.372
    }
}