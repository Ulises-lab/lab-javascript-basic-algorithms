console.log("I'm ready")
const prompt = require('prompt-sync')();
// Iteration 1: Names and Input
let driver = prompt('Give me you name, driver: '), navigator = prompt('Give me you name, navigator: ')
console.log(`The driver's name is ${driver}\nThe navigator's name is ${navigator}`)
// Iteration 2: Conditionals
if(driver.length>navigator.length){
	console.log(`The driver has the longest name, it has ${driver.length} characters.`)
}
else if(driver.length<navigator.length){
console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`)
}
else{
console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
}

// Iteration 3: Loops
