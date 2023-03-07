let moods=document.querySelectorAll(".imgs");
// moods.forEach(ele=>{
//     ele.addEventListener("click",()=>{
//         // console.log(event.target.innerText || event.target.parentNode.innerText)
//         // event.target.classList.add("active")
//         // event.target.parentNode.classList.add("active")
//         // console.log(event)
//         ele
//     })
// })
let review
for(let i=0;i<moods.length;i++){
    moods[i].addEventListener("click",()=>{
        review=moods[i].innerText;
        remove()
        moods[i].classList.add("active");
    })
}
function remove(){
    moods.forEach(ele=>{
        ele.classList.remove("active")
    })
}
let btn=document.querySelector(".btn")
let container=document.querySelector(".container")
btn.addEventListener("click",()=>{
    container.innerHTML="<h2>Thank You!</h2> <h2>Feedback:"+review+"</h2> <p>we'll use your feedback to improve our customer support</p> "
})