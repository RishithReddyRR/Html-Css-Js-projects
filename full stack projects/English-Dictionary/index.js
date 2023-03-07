const inputEl = document.getElementById("word")
let meaning = document.querySelector(".meaning")
let wt = document.getElementById("wt")
let mea = document.getElementById("mea")
let sub=document.getElementById("sub")
let audio=document.getElementById("audio")
async function fetchAPI(word) {
    try {
        meaning.style.display="none"
        sub.style.display="block"
        sub.innerText=`Searching the meaning of "${word}"`
        const data=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res=>res.json())
        if(data.title){
            wt.innerText=word;
            mea.innerText="N/A";
            audio.style.display="none"
        
        }
        else{
        sub.style.display="none"
        wt.innerText=word
        mea.innerText=data[0].meanings[0].definitions[0].definition
        audio.setAttribute("src",data[0].phonetics[0].audio)
        audio.style.display="inline"}
        meaning.style.display="inline"
    } catch (error) {
        sub.innerText=error
        sub.style.display=block
    }
   
}
inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key == "Enter") {
        fetchAPI(e.target.value)
    }
})
// fetchAPI("book")