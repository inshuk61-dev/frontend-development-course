let h = document.querySelector("h1");

let buttons = document.querySelectorAll("button");
let count = 0;

buttons.forEach(button => {
    button.addEventListener("click", function() {

        if (button.id === "increase") {
            count++;
        }

        if (button.id === "dec") {
            count--;
        }

        if (button.id === "reset") {
            count = 0;
        }

        h.textContent = count;
    });
});