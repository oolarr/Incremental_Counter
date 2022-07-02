let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let reset = document.querySelector("#reset");
let counterValue = document.querySelector("#counterValue");

let counter = 0;

increment.addEventListener("click" , ()=>{
    counter++;
    counterValue.innerText = counter;
})
;
decrement.addEventListener("click" , ()=>{
    counter--;
    counterValue.innerText = counter;
})
;
reset.addEventListener("click" , ()=>{
    counter = 0;
    counterValue.innerText = 0;
})
;