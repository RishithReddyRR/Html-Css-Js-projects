let pounds=document.getElementById("pounds")
let weight=document.getElementById("weight")
let warn=document.getElementById("warn")
let errorTime
function compute(){
    if(parseInt(pounds.value)>=0){
        weight.innerText=parseInt(pounds.value)*0.453592
        clearTimeout(errorTime)
        errorTime=setTimeout(()=>{
            weight.innerText=""
        },2000)
        
    }
    else{
      warn.style.display="block";
      clearTimeout(errorTime)
        errorTime=setTimeout(()=>{
          warn.style.display="none";
      },2000)
    }
}
pounds.addEventListener("input",compute);

