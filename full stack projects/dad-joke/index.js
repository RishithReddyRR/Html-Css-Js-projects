let btn=document.querySelector(".btn");
let apiKey="v17Hqh/rKUK8VUvGKukVug==XiomhuG6Gyli7twI";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey
    }
};
 const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"
 let mtr=document.querySelector(".matter")
 async function getJoke(){
    try {
        
        mtr.innerText="Updating...."
        btn.disabled=true;
        btn.innerText="Loading.."
        const response=await fetch(apiURL,options);
        const [data]=await response.json();
        btn.innerText="TELL ME A joke";
        btn.disabled=false;
        mtr.innerText=data["joke"];
    } catch (error) {
     mtr.innerText="an error happened,try again later"   ;
     btn.innerText="TELL ME A joke";
        btn.disabled=false;
    }
 }
btn.addEventListener("click",getJoke)
