let f = document.querySelector(".main")
let inputs = document.querySelectorAll("input")
let conainer = document.querySelector(".container")
f.addEventListener("submit",function(e){
  console.log(e)
  e.preventDefault()

let card = document.createElement("div")
card.classList.add("card")
let profile = document.createElement("div")
profile.classList.add("profile")

let img=document.createElement("img")
img.setAttribute("src" , inputs[0].value)
let h1=document.createElement("h1")
h1.textContent=(inputs[1].value)
let h2=document.createElement("h2")
h2.textContent=(inputs[2].value)
let p=document.createElement("p")
p.textContent=(inputs[3].value)

profile.appendChild(img);
card.appendChild(profile);
card.appendChild(h1);
card.appendChild(h2);
card.appendChild(p);

conainer.appendChild(card)
})
