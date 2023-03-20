let elem = document.body.firstChild.nextSibling
console.log(elem)

// let parentEle = document.body.children[0].firstElementChild;
// console.log(parentEle)

let con = document.body.childNodes[3]
console.log(con)

let simp = document.body.childNodes[3].childNodes[3];
console.log(simp)

let deo = document.getElementById('for')
console.log(deo)
deo.style.fontSize = "30px"

let wed = document.querySelectorAll("div > p")
console.log(wed)
wed[0].style.color = "skyblue"
wed[1].style.color = "skyblue"

let headEl = document.createElement("h1")
headEl.innerText = "Welcome to Fast And Furious";
document.body.appendChild(headEl)

let bigHead = document.createElement("button")
document.body.appendChild(bigHead)
bigHead.innerText = "see more"