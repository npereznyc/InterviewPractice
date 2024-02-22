// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    //iterative solution:

    //instatiate vowels array
    //intantiate result at 0
    //iterate over array; if str contains character of array, increment result
    //return result

    // const vowels=['a','e','i','o','u']
    // let result=0

    // for(let char of vowels){
    //     if (str.toLowerCase().includes(char)){
    //         result++
    //     }
    // }
    // return result

    //regex solution:

    const regex=/[aeiou]/gi

    // if(str.match(regex)){
    //     return str.match(regex).length
    // } else {
    //     return 0
    // }

    //ternary expression option, rather than if statement:
    return str.match(regex) ? str.match(regex).length : 0

    //need either the if statement or ternary expression because .match() will return null if there are no matches

}
vowels('bcdfghjkl')
module.exports = vowels;
