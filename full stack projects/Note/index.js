let addNote=document.querySelector(".add")
function add(){
    let ele=document.createElement("textarea")
    addNote.insertAdjacentElement("beforebegin",ele)
    ele.classList.add("note")
    ele.placeholder="Empty note"
}