// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // const arr=str.split(' ')
    // const newArr=[]

    // for(let word of arr){ //could also do (let word of str.split(' ')) to avoid instantiating another variable
    //     let capital = word[0].toUpperCase()
    //     let rest = word.slice(1)
    //     newArr.push(capital+rest)
    //     //can also write this in one line:
    //     //newArr.push(word[0].toUpperCase() + word.slice(1))
    // }
    // return newArr.join(' ')

    //les ideal solution using a classic for loop, iterating through string and capitalizing every character that has a space before it:

    let result = str[0].toUpperCase() //need to capitalize first character, since it won't have a space before it.

    for(let i = 1; i<str.length; i++){ //start iterating from 1 since we already accounted for index 0 above.
        if(str[i-1] ===' '){
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }
    return result

}
capitalize('hi there, how is it going?')


module.exports = capitalize;
