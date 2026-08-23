
 let div = document.querySelector(".div");
let buttons = document.querySelectorAll("button");
let count = 0;

buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (count === 0) {
            div.style.backgroundColor = "red"; 
            console.log(count)
            count ++
        }
        else if (count===1){
            div.style.backgroundColor="blue";
            console.log(count)
            count ++
                }
        else {
             div.style.backgroundColor="green";
            console.log(count)
            count = 0
        }
        
        
    });
});
