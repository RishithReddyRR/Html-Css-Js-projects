let apiKey="v17Hqh/rKUK8VUvGKukVug==XiomhuG6Gyli7twI";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey
    }
};
let url="https://api.api-ninjas.com/v1/quotes?category=happiness";
let quote=document.querySelector(".quote")
let author=document.querySelector(".author")
let get=document.querySelector(".get")
async function fetchAPI(){
    try {
        author.innerText=""
        quote.innerText="loading...."
        let data=await fetch(url,options).then(response=>response.json())
        quote.innerText=`" ${data[0].quote} " `
        author.innerText="-"+data[0].author
    } catch (error) {
        
    }
}
get.addEventListener("click",fetchAPI)