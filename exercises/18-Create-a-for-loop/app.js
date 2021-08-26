/* This exercise should be moved before 17-Your first loop? */

// Declare and write your function here:
function standardsMaker(timesArg) {
    for (let i = 0; i < timesArg; i++) {
        console.log("I will write questions if I'm stuck");
        
    }
}


// Calling the function:
var times = parseInt(prompt("How many times:"));

standardsMaker(times);