const block = document.querySelector("#block")
const input = document.getElementsByTagName('input')

const btn = document.getElementById('btn')
btn.addEventListener('click',() => {
    block.innerHTML += input[0].value
})
const x = document.querySelector("#x")
x.addEventListener("click",() => {
    block.innerHTML = ''
})