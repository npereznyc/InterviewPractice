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
    
    // if using helper function:
    const objA=buildMap(stringA)
    const objB=buildMap(stringB)
        
    if(Object.keys(objA).length!=Object.keys(objB).length){
        return false
    }

    //if not using helper function (still doing 3 total iterations with or without helper function):
        // const A = stringA.replace(/[^\w]/g,"").toLowerCase()
        // const B = stringB.replace(/[^\w]/g,"").toLowerCase()

        // if(A.length != B.length){
        //     return false
        // }

        // const objA = {}
        // const objB = {}
    
        // for(let char of A){
        //     objA[char]= objA[char]+1 || 1
        // }
        // for(let char of B){
        //     objB[char]= objB[char]+1 || 1
        // }

    for(let char in objA){
        if(objA[char]!=objB[char]){
            return false
        }
    }
    return true
}

// helper function:
function buildMap(str){
    const charMap = {}
    for(let char of str.replace(/[^\w]/g,'').toLowerCase()) {
        charMap[char] = charMap[char]+1 || 1
    }
    return charMap
}



//alternate solution, using a helper function that also sorts the strings and no hashmap:

// function anagrams(stringA, stringB) {
//     return cleanString(stringA)===cleanString(stringB) //will return true if this is true and fase if it is false.
    
// }

// function cleanString(str){
//     return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
//     //because .sort() only works on arrays, we need to use .split(') to convert the string to an array and then .join('') to convert it back to a string
// }

anagrams('One one', 'One one c')

module.exports = anagrams;
