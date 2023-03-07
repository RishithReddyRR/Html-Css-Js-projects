let get=document.querySelector(".get")
let name=document.querySelector("#two")
async function emojiAPI(){
    let data=await fetch("https://emoji-api.com/emojis?access_key=194ac4caeac20d9199d8459b313e609621b36fd5")
    .then(Response=>Response.json())
    .catch()
    // console.log(data[2].character)
    let x=Math.random()*(data.length-1)
    console.log(data[parseInt(x)])
    get.innerText=data[parseInt(x)].character;
    name.innerText=data[parseInt(x)].slug;
}
get.addEventListener("click",emojiAPI)