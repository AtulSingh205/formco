let f = document.querySelector(".main")
let inputs = document.querySelectorAll("input")
let crd = document.querySelector(".card")
f.addEventListener("click",function(e){
    // console.log(e)
  e.preventDefault()

})
inputs.forEach(inp=>{
inp.addEventListener("change",function(e){
      console.log("hh chl rha hai ",e.target.value)
      crd.textContent +=" "+ e.target.value
  })
})
  