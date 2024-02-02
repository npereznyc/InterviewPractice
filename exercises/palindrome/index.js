// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //solution 1 - reversing string and checking if reversed string === str
    let revStr=str.split('').reduce((rev, char)=> char+rev, '')
    // if(revStr === str){
    //     return true
    // } else {
    //     return false
    // }

    //another way to write this comparison so we don't need the whole if statement:
    return revStr === str 
    // (will return true if it's true and false if it' not)

    //solution 2 - using every()
        // checks first element against last element, second element against second to last, and so on.
        //this is not an ideal solution because it checks each pair twice.
    // return str.split('').every((char,index)=> {
    //     return char === str[str.length-index-1]
    // })
}

module.exports = palindrome;
