let get = document.querySelector(".get")
let pic = document.querySelector(".pic")
let name = document.querySelector(".name")
let anime = document.querySelector(".anime")
let load = document.querySelector(".load")
async function animeAPi() {
    anime.style.display="none"
    load.style.display="block"
    load.innerText="loading"
    let data = await fetch("https://api.catboys.com/img")
    .then(response=>response.json())
    .catch()
    pic.setAttribute("src",data["url"])
    name.innerText=data.artist;
    load.style.display="none"
        anime.style.display="block"
    // console.log(data)
}
get.addEventListener("click", animeAPi)