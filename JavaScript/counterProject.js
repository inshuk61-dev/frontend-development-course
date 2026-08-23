let h = document.querySelector("h1")

let plus = document.getElementById("increase")
let min = document.getElementById("dec")
let res = document.getElementById("reset")

let count = 0;
plus.addEventListener("click", function () {
    count = count + 1;
    h.textContent = count;
    console.log(count)


})
min.addEventListener("click", function () {
    count = count - 1;
    h.textContent = count;
    console.log(count)


})
res.addEventListener("click", function () {
    count = 0;
    h.textContent = count;
    console.log(count)


})