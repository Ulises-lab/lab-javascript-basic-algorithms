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
driver = driver.toUpperCase()
console.log(driver.split('').join(' '))

let newNavigator = []
for(i = navigator.length;i>-1;i--){
	if(i>-1){
	newNavigator.push(navigator[i])
	}
}
console.log(newNavigator.join(''))

// Another way
/* navigator.split('').reverse().join('')
  */
navigator = navigator.toUpperCase()
if(driver>navigator){
	console.log("The driver's name goes first.")
}
else if(driver<navigator){
	console.log('Yo, the navigator goes first, definitely.')
}
else{
	console.log('What?! You both have the same name?')
}


// Bonus 1
let longText1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper blandit varius. Nam sed sapien sed mi molestie congue. Phasellus non leo quis tellus vulputate dignissim vel quis lorem. Praesent fermentum porta eleifend. Mauris eros turpis, pellentesque ac hendrerit mollis, vehicula ac turpis. Donec facilisis arcu vitae fringilla dapibus. Nulla venenatis dolor posuere porttitor malesuada. Aenean non posuere risus. In hac habitasse platea dictumst. Cras consequat ex urna, a tempor diam convallis vulputate. Mauris placerat leo a nunc venenatis aliquet. Ut velit quam, rhoncus nec efficitur nec, consectetur sit amet ligula. Vivamus sed consequat velit. Nulla facilisi.',
longText2 = 'Nunc in dignissim nulla. Phasellus vestibulum semper dui et pharetra. Vivamus non egestas tortor, eget eleifend tellus. Vivamus sit amet orci ullamcorper, euismod ante ut, vehicula nisi. Nunc venenatis, dui eget dignissim elementum, quam felis pellentesque purus, egestas vehicula lectus augue in justo. Morbi placerat magna at rhoncus dictum. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc at finibus nibh, sit amet vulputate risus.',
longText3 = 'Pellentesque sagittis nulla sit amet nisi feugiat, quis imperdiet libero pellentesque. Aenean pellentesque dolor id leo cursus, a bibendum dolor malesuada. Duis ut gravida eros, in interdum neque. Mauris malesuada libero dui, eu efficitur massa efficitur non. Quisque tempus molestie ipsum. Nullam elementum mauris nec dolor euismod, et convallis libero vestibulum. Cras ullamcorper nisi quis magna auctor, quis sollicitudin mi tempor. Nulla facilisi. Nunc vitae elit ut nunc luctus bibendum non sed libero. Donec pellentesque cursus justo, sed viverra dui efficitur vel. Nulla et vestibulum nibh, nec gravida erat. Phasellus ac consectetur lorem, quis mattis urna. Nulla non libero ex.'

let longText = longText1 + longText2 + longText3
console.log(longText.split(' ').length)

// Bonus 2

