// 4 types of DOM
// Selection
// Manipulation
// Event handling 

let h = document.querySelectorAll("h1");

console.log(h[2].innerText)
let count = 0
let button = document.addEventListener("click", function () {

if (count===0){
    h[0].innerText = "Hello Pakistan!"
    h[0].style.color = "red";
    count++;
}
else {
    h[1].innerText = "Hello!!";
    h[1].style.color="purple";
    h[1].style.border="none"
}

})