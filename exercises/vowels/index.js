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
    //iterate over string

    const vowels=['a','e','i','o','u']
    let result=0

    for(let char of vowels){
        if (str.toLowerCase().includes(char)){
            result++
        }
    }
    return result
}

module.exports = vowels;
