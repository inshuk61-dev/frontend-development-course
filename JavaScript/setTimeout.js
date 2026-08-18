//  Set Time out
let a = 10;
let b = 20; 
function sum(){
    console.log(a+b);

    setTimeout(() => {
        console.log(a+b)
    }, 3000);

}
sum();

// Set Interval 
let c = 18;
let d = 22;
count = 0;
function abc(){
    const delay = setInterval(() => {
         console.log(a+b);
         count++;
         if (count===9){
            console.log("Stop");
            clearInterval(delay)
         }
  }, 3000); 
}
abc()


// Clear Invteral

let i = 0;
function counting(){
    const delays= setInterval(() => {
        console.log("The count is " + i)
        
        if (i===20){
            console.log("Stop Counting");
            clearInterval(delays)
        }
        i++;
    }, 3000);
}
counting()
