// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //instantiate empty object
    //iterate over string to populate object
    //object look up for greatest number - instantiate variable for greatest? update it's value?
    let charObj={}
    let max=0
    let maxChar=''

    for(let char of str) {
        charObj[char] = charObj[char]+1 || 1
    }

    for(let char in charObj){
        if(charObj[char]>max){
            max=charObj[char]
            maxChar=char
        }
    }
    return maxChar

    //alternate solution with similar time and space complexity:

    // let charObj={}

    // for(let char of str) {
    //     charObj[char] = charObj[char]+1 || 1
    // }

    // const values = Object.values(charObj)

    // const maxValue=values.reduce((max,currentValue)=> {
    //     return (currentValue>max) ? currentValue : max
    // }, values[0])

    // return Object.keys(charObj).find(key =>charObj[key]===maxValue)
   

    

}
maxChar('abcdefghijklmnaaaaa')

module.exports = maxChar;
