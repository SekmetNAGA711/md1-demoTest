/*console.log("hello world")

//let thing = "Wackadoodle"
//thing = "Heckadoodle"
//console.log(thing)

//let newThing = 10
//newThing = 5
//console.log(newThing)



const firstName = "Abe"
const age = 36
let isCool = true

console.log(`Name: ${firstName}. Age:${age}.`)
//if(isCool === true) {
//console.log("this person is pretty dope")
//} else {
//   console.log("this person needs to git good.")
//}

if(isCool && age > 17) {
    console.log("this person is still cool, and they arent even a kid!")
} else if(isCool){
    console.log('this person is cool, but that is to be expected')
} else {
    console.log("they arent cool")
}*/
/*let a = 17
let b = 5
let c = 2
let x = 20

let answer = a + (c * b)
console.log(answer)*/

const readline = require('readline')

const reader = readline.createInterface({input: process.stdin, output: process.stdout})//Not important to know HOW this works.

/*reader.question("Hey there! What is your name?",function(response){
    console.log(`hello ${response}`)
})*/

reader.question("Let me guess a number! Pick a number between 1-10", function(num){https://caniuse.com/
    if(num >= 1 && num <=10){
        console.log(`Hmmm... I think your number was ${num}.`)
    } else {
        console.log("HEY! I said BETWEEN 1 AND 10!")
    }
    
}) 

