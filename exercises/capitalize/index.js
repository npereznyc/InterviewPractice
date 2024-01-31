// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const arr=str.split(' ')
    const newArr=[]

    for(let word of arr){
        let capital = word[0].toUpperCase()
        let rest = word.slice(1)
        newArr.push(capital+rest)
    }
    return newArr.join(' ')
}
capitalize('hi there, how is it going?')


module.exports = capitalize;
