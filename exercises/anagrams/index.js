// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    //use regEx to eliminate spaces and non alphanumeric characters
    //toLowercase to conver to all lower case
    //create object for each string with characters = keys & number of times they appear = values
    //compare the objects; if they're the same, we have an anagram
    
    const A = stringA.replace(/[^\w]/g,"").toLowerCase()
    const B = stringB.replace(/[^\w]/g,"").toLowerCase()

    if(A.length != B.length){
        return false
    }

    const objA = {}
    const objB = {}

    // console.log(A, B)

    // if (A === B){
    //     return true 
    // }

    for(let char of A){
        objA[char]= objA[char]+1 || 1
    }
    for(let char of B){
        objB[char]= objB[char]+1 || 1
    }

    for(let char in objA){
        if(objA[char]===objB[char]){
            return true
        } else {
            return false
        }
    }
}

anagrams('One one', 'One one c')

module.exports = anagrams;
