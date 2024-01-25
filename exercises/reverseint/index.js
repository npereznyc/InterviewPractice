// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // let result
    const revInt=parseInt(n.toString().split('').reverse().join(''))
    
    // if(Math.sign(n) === -1){
    //     result = -revInt
    // } else {
    //     result = revInt
    // }
    // return result

    
    return revInt * Math.sign(n)
    //this is another way to arrive at the solution, without instantiating a new variable (result) and without using an if statement. If we multiply the reversed number by the the result of Math.sign(n), then we'll get a negative number if n is negative and a postive number if n is positive.
}

reverseInt(-53)

module.exports = reverseInt;
